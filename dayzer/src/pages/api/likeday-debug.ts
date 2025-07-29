import type { APIRoute } from 'astro';
import * as cheerio from 'cheerio';

export const POST: APIRoute = async ({ request }) => {
  try {
    const params = await request.json();
    
    // Get credentials
    const yesAuth = process.env.YES_AUTH || import.meta.env.YES_AUTH;
    if (!yesAuth) {
      return new Response(JSON.stringify({ error: 'YES_AUTH not found' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const credentials = JSON.parse(yesAuth);
    const [username, password] = credentials;

    // Debug: Show exactly what we're requesting
    const startDate = params.startDate || '2024-01-01';
    const endDate = params.endDate || '2025-07-18';
    const item = 'RTLMP:20000001321'; // RT LMP
    
    const url = `https://services.yesenergy.com/PS/rest/timeseries/multiple.html?agglevel=hour&startdate=${startDate}&enddate=${endDate}&timezone=PST&items=${item}`;
    
    console.log('=== LIKEDAY DEBUG ===');
    console.log('Requesting URL:', url);
    console.log('Date range:', startDate, 'to', endDate);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`YES Energy API responded with status: ${response.status}`);
    }

    const htmlText = await response.text();
    console.log('Response length:', htmlText.length);
    
    // Parse the HTML table
    const parsedData = parseHtmlTable(htmlText);
    console.log('Total parsed records:', parsedData.length);
    
    // Debug: Show first and last few records
    if (parsedData.length > 0) {
      console.log('First 5 records:', parsedData.slice(0, 5));
      console.log('Last 5 records:', parsedData.slice(-5));
      
      // Check date ranges in the data
      const marketDays = parsedData.map(row => row.MARKETDAY).filter(Boolean);
      const uniqueDays = [...new Set(marketDays)].sort();
      console.log('Unique market days (first 10):', uniqueDays.slice(0, 10));
      console.log('Unique market days (last 10):', uniqueDays.slice(-10));
      console.log('Total unique days:', uniqueDays.length);
      
      // Check if we have the expected date format
      const dateTimeValues = parsedData.map(row => row.DATETIME).filter(Boolean);
      console.log('Sample DATETIME values:', dateTimeValues.slice(0, 5));
    }

    return new Response(JSON.stringify({
      success: true,
      debug: {
        requestedUrl: url,
        requestedDateRange: `${startDate} to ${endDate}`,
        totalRecords: parsedData.length,
        sampleData: parsedData.slice(0, 10),
        uniqueDays: parsedData.length > 0 ? [...new Set(parsedData.map(row => row.MARKETDAY))].sort().slice(0, 20) : [],
        dateTimeFormat: parsedData.length > 0 ? parsedData.slice(0, 5).map(row => ({ DATETIME: row.DATETIME, MARKETDAY: row.MARKETDAY })) : []
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Debug error:', error);
    return new Response(JSON.stringify({ 
      error: 'Debug failed', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

function parseHtmlTable(html: string): any[] {
  const $ = cheerio.load(html);
  const tables = $('table');
  
  if (tables.length === 0) return [];

  const table = tables.first();
  const data: any[] = [];
  let headers: string[] = [];

  // Extract headers with detailed logging
  table.find('thead tr, tr').first().find('th, td').each((i, el) => {
    const headerText = $(el).text().trim();
    headers.push(headerText);
  });

  console.log('Extracted headers:', headers);

  // Extract data rows with detailed logging
  table.find('tbody tr, tr').each((rowIndex, row) => {
    if (rowIndex === 0 && table.find('thead').length > 0) return;

    const rowData: any = {};
    let hasData = false;
    const cellDebug: string[] = [];

    $(row).find('td, th').each((cellIndex, cell) => {
      const cellValue = $(cell).text().trim();
      const headerName = headers[cellIndex];
      
      cellDebug.push(`[${cellIndex}] ${headerName}: "${cellValue}"`);

      if (headerName && cellValue) {
        hasData = true;
        
        // Smart parsing: keep dates and text as strings, only parse pure numbers
        if (isDateString(cellValue) || isTextValue(cellValue)) {
          rowData[headerName] = cellValue;
        } else {
          const numValue = parseFloat(cellValue);
          rowData[headerName] = isNaN(numValue) ? cellValue : numValue;
        }
      }
    });

    if (hasData) {
      data.push(rowData);
      // Log first few rows in detail
      if (rowIndex <= 3) {
        console.log(`Row ${rowIndex} cells:`, cellDebug);
        console.log(`Row ${rowIndex} parsed:`, rowData);
      }
    }
  });

  return data;
}

// Helper functions for smart parsing
function isDateString(value: string): boolean {
  // Check for date patterns like "01/01/2024" or "01/01/2024 01:00:00"
  return /^\d{1,2}\/\d{1,2}\/\d{4}(\s\d{1,2}:\d{2}:\d{2})?$/.test(value);
}

function isTextValue(value: string): boolean {
  // Check for known text values that should not be parsed as numbers
  const textValues = ['ONPEAK', 'OFFPEAK', 'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 
                     'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
  return textValues.includes(value.toUpperCase());
} 