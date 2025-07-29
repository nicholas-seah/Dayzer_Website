import React, { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface MECData {
  date: string;
  topHoursMEC: number;
  bottomHoursMEC: number;
  topHoursUnit: string;
  bottomHoursUnit: string;
  isLastWeek: boolean;
  topHoursDetails: MarginalUnitData[];
  bottomHoursDetails: MarginalUnitData[];
  topHours: number[];
  bottomHours: number[];
}

interface MarginalUnitData {
  unitid: number;
  unitname: string;
  unittype: string;
  hour: number;
  energyCost: number;
}

interface MECResponse {
  scenarioId: number;
  data: MECData[];
  dateRanges: {
    lastWeek: string;
    thisWeek: string;
  };
}

export default function MECOverviewChart() {
  const [data, setData] = useState<MECData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        console.log('Fetching MCE overview data...');
        const response = await fetch(`${window.location.origin}/api/mec-overview`);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('API error:', errorText);
          throw new Error(`Failed to fetch MCE overview data: ${response.status} ${errorText}`);
        }
        
        const jsonData: MECResponse = await response.json();
        console.log('Received data:', jsonData);
        setData(jsonData.data);
      } catch (err) {
        console.error('API error:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch MCE data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const topData = payload.find((p: any) => p.dataKey === 'topHoursMEC');
      const bottomData = payload.find((p: any) => p.dataKey === 'bottomHoursMEC');
      const dataPoint = data.find(d => d.date === label);

      if (!dataPoint) return null;

      return (
        <div className="bg-white p-4 border border-gray-300 rounded shadow-lg max-w-sm text-left">
          <p className="font-medium mb-3">{`Date: ${label}`}</p>
          
          {topData && dataPoint.topHours && dataPoint.topHours.length > 0 && (
            <div className="mb-4">
              <p className="text-red-600 font-medium mb-2">
                Top 2 Hours: (Hour {dataPoint.topHours.join(' & ')}) - ${topData.value.toFixed(2)}
              </p>
              {dataPoint.topHoursDetails && dataPoint.topHoursDetails.map((unit, index) => (
                <p key={index} className="text-sm text-gray-700 ml-2">
                  (<span className="font-bold">{unit.unittype}</span>) {unit.unitname}
                </p>
              ))}
            </div>
          )}
          
          {bottomData && dataPoint.bottomHours && dataPoint.bottomHours.length > 0 && (
            <div>
              <p className="text-blue-600 font-medium mb-2">
                Bottom 2 Hours: (Hour {dataPoint.bottomHours.join(' & ')}) - ${bottomData.value.toFixed(2)}
              </p>
              {dataPoint.bottomHoursDetails && dataPoint.bottomHoursDetails.map((unit, index) => (
                <p key={index} className="text-sm text-gray-700 ml-2">
                  (<span className="font-bold">{unit.unittype}</span>) {unit.unitname}
                </p>
              ))}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  const formatXAxisTick = (value: string) => {
    const date = new Date(value);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-80 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <div className="text-gray-500">Loading MCE overview...</div>
        </div>
        <div className="h-80 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <div className="text-gray-500">Loading MCE overview...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-80 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <div className="text-red-500">Error: {error}</div>
        </div>
        <div className="h-80 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <div className="text-red-500">Error: {error}</div>
        </div>
      </div>
    );
  }

  // Split data into last week and this week
  const lastWeekData = data.filter(d => d.isLastWeek);
  const thisWeekData = data.filter(d => !d.isLastWeek);

  // Calculate unified Y-axis domain using only This Week data (since Last Week shows "Coming Soon")
  const allValues = thisWeekData.flatMap(d => [d.topHoursMEC, d.bottomHoursMEC]);
  const minValue = allValues.length > 0 ? Math.min(...allValues) : 0;
  const maxValue = allValues.length > 0 ? Math.max(...allValues) : 100;
  // Add some padding to the range (10% on each side)
  const padding = (maxValue - minValue) * 0.1;
  const yAxisDomain = [
    Math.max(0, Math.floor(minValue - padding)), 
    Math.ceil(maxValue + padding)
  ];

  // Calculate Y-axis ticks every $10
  const generateYAxisTicks = () => {
    const ticks = [];
    const [minDomain, maxDomain] = yAxisDomain;
    // Start from the nearest $10 below the minimum
    const startTick = Math.floor(minDomain / 10) * 10;
    // End at the nearest $10 above the maximum
    const endTick = Math.ceil(maxDomain / 10) * 10;
    
    for (let tick = startTick; tick <= endTick; tick += 10) {
      ticks.push(tick);
    }
    return ticks;
  };

  const yAxisTicks = generateYAxisTicks();

  const renderChart = (chartData: MECData[], title: string, showYAxisLabel: boolean = false, isComingSoon: boolean = false) => (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-6">
      <h3 className="text-lg font-medium text-gray-700 text-center">{title}</h3>
      
      {isComingSoon ? (
        <div className="h-80 w-full bg-white rounded border border-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-lg">Coming Soon</div>
        </div>
      ) : (
        <div className="h-80 w-full bg-white rounded border border-gray-100">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 20, right: 30, left: 40, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="date" 
                tickFormatter={formatXAxisTick}
                stroke="#6b7280"
                fontSize={12}
                height={40}
              />
              <YAxis 
                domain={yAxisDomain}
                stroke="#6b7280"
                fontSize={12}
                label={showYAxisLabel ? { 
                  value: '$/MWh', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle' }
                } : undefined}
                tickFormatter={(value) => `$${value}`}
                ticks={yAxisTicks}
              />
              <Tooltip content={<CustomTooltip />} />
              
              <Line
                type="monotone"
                dataKey="topHoursMEC"
                stroke="#dc2626"
                strokeWidth={2}
                dot={{ fill: '#dc2626', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
                name="Top 2 Hours"
              />
              <Line
                type="monotone"
                dataKey="bottomHoursMEC"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
                name="Bottom 2 Hours"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Two Charts Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {renderChart(lastWeekData, "Last Week", true, true)}
        {renderChart(thisWeekData, "This Week", true)}
      </div>
      
      {/* Shared Legend */}
      <div className="flex flex-wrap justify-center gap-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-red-600"></div>
          <span className="text-gray-600">Top 2 Hours</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-blue-600"></div>
          <span className="text-gray-600">Bottom 2 Hours</span>
        </div>
      </div>
    </div>
  );
} 