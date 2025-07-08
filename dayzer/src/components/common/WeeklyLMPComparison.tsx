import React, { useEffect, useState } from 'react';
import { useScenario } from '../../contexts/ScenarioContext';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';

interface LMPDataPoint {
  datetime: string;
  dayName: string;
  thisWeekLMP: number | null;
  lastWeekLMP: number | null;
}

interface WeeklyLMPResponse {
  scenarioid: number;
  simulationDate: string;
  data: LMPDataPoint[];
  metadata: {
    thisWeekRange: string;
    lastWeekRange: string;
    totalHours: number;
    thisWeekDataPoints: number;
    lastWeekDataPoints: number;
  };
}

export default function WeeklyLMPComparison() {
  const { selectedScenario } = useScenario();
  const [data, setData] = useState<LMPDataPoint[]>([]);
  const [metadata, setMetadata] = useState<WeeklyLMPResponse['metadata'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredData, setHoveredData] = useState<LMPDataPoint | null>(null);
  const [pinnedData, setPinnedData] = useState<LMPDataPoint | null>(null);
  const [cursorPosition, setCursorPosition] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedScenario) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/weekly-lmp-comparison?scenarioid=${selectedScenario.scenarioid}`);
        if (!response.ok) {
          throw new Error('Failed to fetch weekly LMP comparison data');
        }
        const result: WeeklyLMPResponse = await response.json();
        setData(result.data);
        setMetadata(result.metadata);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedScenario]);

  // Custom tick formatter for x-axis to show day names at appropriate intervals
  const formatXAxisTick = (tickItem: string, index: number) => {
    const date = new Date(tickItem);
    const hour = date.getHours();
    
    // Show day name at the beginning of each day (hour 0)
    if (hour === 0) {
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return dayNames[date.getDay()];
    }
    return '';
  };

  // Filter data to show day names at proper intervals (every 24 hours, at beginning of each day)
  const getXAxisTicks = () => {
    const ticks: string[] = [];
    for (let i = 0; i < data.length; i += 24) { // Start at hour 0 (beginning of day), then every 24 hours
      ticks.push(data[i].datetime);
    }
    return ticks;
  };

  // Handle mouse events for custom tooltip area
  const handleMouseMove = (data: any) => {
    if (data && data.activePayload && data.activePayload[0] && !pinnedData) {
      setHoveredData(data.activePayload[0].payload);
      setCursorPosition(data.activePayload[0].payload.datetime);
    }
  };

  const handleMouseLeave = () => {
    if (!pinnedData) {
      setHoveredData(null);
      setCursorPosition(null);
    }
  };

  // Handle click to pin/unpin data
  const handleChartClick = (event: any) => {
    if (event && event.activePayload && event.activePayload.length > 0) {
      const clickedData = event.activePayload[0].payload;
      if (pinnedData && pinnedData.datetime === clickedData.datetime) {
        // Clicking on the same pinned data - unpin it
        setPinnedData(null);
        setCursorPosition(null);
      } else {
        // Pin the clicked data
        setPinnedData(clickedData);
        setHoveredData(null); // Clear hover data when pinning
        setCursorPosition(null); // Clear cursor position when pinning
      }
    } else {
      // Clicked on empty space - unpin
      setPinnedData(null);
      setCursorPosition(null);
    }
  };

  // Format datetime for display
  const formatDateTime = (date: Date) => 
    `${date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })} at ${date.toLocaleTimeString('en-US', { 
      hour: 'numeric',
      minute: '2-digit',
      hour12: true 
    })}`;

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 h-full flex items-center justify-center">
        <div className="text-gray-500">Loading LMP comparison...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 h-full flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 h-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Weekly LMP Comparison</h3>
      
      {metadata && (
        <div className="text-xs text-gray-600 mb-4">
          <div>This Week: {metadata.thisWeekRange}</div>
          <div>Last Week: {metadata.lastWeekRange}</div>
        </div>
      )}
      
      <div style={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer>
          <LineChart 
            data={data} 
            margin={{ top: 20, right: 20, left: 20, bottom: 60 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleChartClick}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.5} />
            <XAxis 
              dataKey="datetime"
              tickFormatter={formatXAxisTick}
              ticks={getXAxisTicks()}
              tick={{ fontSize: 11 }}
              tickLine={false}
              interval={0}
              height={50}
            />
            <YAxis 
              label={{ 
                value: '$/MWh', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle' }
              }}
              tick={{ fontSize: 11 }}
            />
            <Legend />
            
            {/* Vertical line on hover */}
            {cursorPosition && (
              <ReferenceLine 
                x={cursorPosition} 
                stroke="#666666" 
                strokeWidth={1} 
                strokeDasharray="2 2"
                opacity={0.7}
              />
            )}
            
            {/* This Week's LMP - Solid Black Line */}
            <Line
              type="monotone"
              dataKey="thisWeekLMP"
              stroke="#000000"
              strokeWidth={2}
              dot={false}
              connectNulls={false}
              name="Forecast Week"
            />
            
            {/* Last Week's LMP - Dashed Red Line */}
            <Line
              type="monotone"
              dataKey="lastWeekLMP"
              stroke="#EF4444"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              connectNulls={false}
              name="Last Week"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Fixed info area below chart */}
      <div className="mt-2 h-32 flex items-center">
        {(pinnedData || hoveredData) ? (
          <div className="w-full">
            {pinnedData && (
              <div className="flex justify-end mb-2">
                <button 
                  onClick={() => setPinnedData(null)}
                  className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                >
                  Unpin
                </button>
              </div>
            )}
            <div className="bg-white border border-gray-200 rounded p-2 shadow-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-1 px-2 font-medium text-gray-700 bg-gray-100 text-xs">Metric</th>
                    <th className="text-left py-1 px-2 font-medium text-gray-700 bg-gray-100 text-xs">Forecast Week</th>
                    <th className="text-left py-1 px-2 font-medium text-gray-700 bg-gray-100 text-xs">Last Week</th>
                    <th className="text-left py-1 px-2 font-medium text-gray-700 bg-gray-100 text-xs">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    const activeData = pinnedData || hoveredData;
                    if (!activeData) return null;
                    
                    const forecastDate = new Date(activeData.datetime);
                    const lastWeekDate = new Date(forecastDate.getTime() - 7 * 24 * 60 * 60 * 1000);
                    const forecastLMP = activeData.thisWeekLMP;
                    const lastWeekLMP = activeData.lastWeekLMP;
                    
                    // Calculate difference and percentage
                    let difference = null;
                    let percentageChange = null;
                    let changeDisplay = 'N/A';
                    
                    if (forecastLMP !== null && lastWeekLMP !== null) {
                      difference = forecastLMP - lastWeekLMP;
                      percentageChange = ((difference / lastWeekLMP) * 100);
                      const arrow = difference > 0 ? '↑' : difference < 0 ? '↓' : '→';
                      const sign = difference > 0 ? '+' : '';
                      changeDisplay = `${arrow} ${sign}$${difference.toFixed(2)} (${sign}${percentageChange.toFixed(1)}%)`;
                    }
                    
                    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    const forecastDay = dayNames[forecastDate.getDay()];
                    const lastWeekDay = dayNames[lastWeekDate.getDay()];
                    const sameDay = forecastDay === lastWeekDay;
                    
                    return (
                      <>
                        <tr className="border-b border-gray-200">
                          <td className="py-1 px-2 font-medium text-gray-600 text-xs">Time</td>
                          <td className="py-1 px-2 text-black text-xs">{formatDateTime(forecastDate)}</td>
                          <td className="py-1 px-2 text-red-500 text-xs">{formatDateTime(lastWeekDate)}</td>
                          <td className="py-1 px-2 text-gray-600 text-xs">{sameDay ? 'Same Hour' : 'Different Hour'}</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-1 px-2 font-medium text-gray-600 text-xs">LMP</td>
                          <td className="py-1 px-2 text-black text-xs">
                            {forecastLMP !== null ? `$${Number(forecastLMP).toFixed(2)}/MWh` : 'No data'}
                          </td>
                          <td className="py-1 px-2 text-red-500 text-xs">
                            {lastWeekLMP !== null ? `$${Number(lastWeekLMP).toFixed(2)}/MWh` : 'No data'}
                          </td>
                          <td className={`py-1 px-2 font-medium text-xs ${
                            difference === null ? 'text-gray-400' : 
                            difference > 0 ? 'text-green-600' : 
                            difference < 0 ? 'text-red-600' : 'text-gray-600'
                          }`}>
                            {changeDisplay}
                          </td>
                        </tr>
                        <tr>
                          <td className="py-1 px-2 font-medium text-gray-600 text-xs">Day</td>
                          <td className="py-1 px-2 text-black text-xs">{forecastDay}</td>
                          <td className="py-1 px-2 text-red-500 text-xs">{lastWeekDay}</td>
                          <td className="py-1 px-2 text-gray-600 text-xs">{sameDay ? 'Same Day' : 'Different Day'}</td>
                        </tr>
                      </>
                    );
                  })()}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="w-full p-3 bg-gray-50 border border-gray-200 rounded flex items-center justify-center">
            <p className="text-gray-500 text-sm">Hover over the chart to see detailed breakdown, or click to pin data</p>
          </div>
        )}
      </div>
    </div>
  );
} 