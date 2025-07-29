import type { APIRoute } from 'astro';
import * as cheerio from 'cheerio';

export const GET: APIRoute = async ({ request }) => {
  try {
    // Debug: Log all environment variables to see what's available
    console.log('process.env keys:', Object.keys(process.env));
    console.log('process.env.YES_AUTH:', process.env.YES_AUTH);
    console.log('import.meta.env.YES_AUTH:', import.meta.env.YES_AUTH);
    
    // Try both approaches
    const yesAuth = process.env.YES_AUTH || import.meta.env.YES_AUTH;
    if (!yesAuth) {
      return new Response(
        JSON.stringify({ 
          error: 'YES_AUTH not found in environment variables',
          debug: {
            processEnvKeys: Object.keys(process.env),
            processEnvYesAuth: process.env.YES_AUTH,
            importMetaEnvYesAuth: import.meta.env.YES_AUTH,
            nodeEnv: process.env.NODE_ENV
          }
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Parse credentials (assuming they're stored as a JSON string like "['username', 'password']")
    const credentials = JSON.parse(yesAuth);
    const [username, password] = credentials;

    // YES Energy API URL for Houston LMP
    const url = 'https://services.yesenergy.com/PS/rest/timeseries/multiple.html?agglevel=hour&startdate=2025-07-09&items=RTLMP:10000697077';

    // Make authenticated request to YES Energy
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

    // Get HTML response
    const htmlText = await response.text();
    console.log('YES Energy API response length:', htmlText.length);
    
    // Parse HTML table data using cheerio (equivalent to pd.read_html)
    const processedData = parseHtmlTable(htmlText);

    return new Response(JSON.stringify({ 
      success: true,
      data: processedData 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('YES Energy API error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch data from YES Energy API', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

// HTML table parser using cheerio (equivalent to pd.read_html)
function parseHtmlTable(html: string) {
  try {
    const $ = cheerio.load(html);
    const tables = $('table');
    
    if (tables.length === 0) {
      console.log('No tables found in HTML response');
      return [];
    }

    console.log(`Found ${tables.length} table(s) in HTML response`);

    // Process the first table
    const table = tables.first();
    const data: any[] = [];
    let headers: string[] = [];

    // Extract headers
    table.find('thead tr, tr').first().find('th, td').each((i, el) => {
      headers.push($(el).text().trim());
    });

    console.log('Headers found:', headers);

    // Extract data rows
    table.find('tbody tr, tr').each((rowIndex, row) => {
      if (rowIndex === 0 && table.find('thead').length > 0) {
        // Skip header row if we have a separate thead
        return;
      }

      const rowData: any = {};
      let hasData = false;

      $(row).find('td, th').each((cellIndex, cell) => {
        const cellValue = $(cell).text().trim();
        const headerName = headers[cellIndex];

        if (headerName && cellValue) {
          hasData = true;
          // Try to parse as number if it looks like a number
          const numValue = parseFloat(cellValue);
          rowData[headerName] = isNaN(numValue) ? cellValue : numValue;
        }
      });

      if (hasData) {
        data.push(rowData);
      }
    });

    console.log(`Parsed ${data.length} rows of data`);
    console.log('Sample data:', data.slice(0, 2));

    return data;
  } catch (error) {
    console.error('Error parsing HTML table:', error);
    return [];
  }
} 