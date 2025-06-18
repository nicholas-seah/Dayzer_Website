import React, { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface CongestionData {
  datetime: string;
  'Total Congestion': number;
  Other: number;
  [constraintName: string]: string | number;
}

interface CongestionResponse {
  scenarioid: number;
  data: CongestionData[];
  metadata: {
    constraintNames: string[];
    constraintDetails: {
      [constraintName: string]: {
        [datetime: string]: {
          shiftFactor: number;
          shadowprice: number;
        };
      };
    };
  };
}

// Generate distinct colors for constraints
const generateColors = (count: number): string[] => {
  // Use a carefully selected palette of highly distinct colors
  const distinctColors = [
    '#FF6B6B', // Red
    '#4ECDC4', // Teal
    '#45B7D1', // Blue
    '#FFA726', // Orange
    '#66BB6A', // Green
    '#AB47BC', // Purple
    '#FF7043', // Deep Orange
    '#26A69A', // Cyan
    '#42A5F5', // Light Blue
    '#FFCA28', // Amber
    '#EF5350', // Red variant
    '#29B6F6', // Light Blue variant
    '#9CCC65', // Light Green
    '#EC407A', // Pink
    '#78909C', // Blue Grey
    '#FDD835', // Yellow
    '#8D6E63', // Brown
    '#D4E157', // Lime
    '#FF8A65', // Deep Orange variant
    '#81C784', // Green variant
  ];
  
  if (count <= distinctColors.length) {
    return distinctColors.slice(0, count);
  }
  
  // If we need more colors, generate additional ones with good separation
  const additionalColors = [];
  for (let i = distinctColors.length; i < count; i++) {
    const hue = (i * 137.508) % 360; // Golden angle for good distribution
    const saturation = 70 + (i % 3) * 10; // Vary saturation 70-90%
    const lightness = 45 + (i % 4) * 10; // Vary lightness 45-75%
    additionalColors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
  }
  
  return [...distinctColors, ...additionalColors];
};

export default function CongestionChart() {
  const [data, setData] = useState<CongestionData[]>([]);
  const [metadata, setMetadata] = useState<CongestionResponse['metadata'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/congestion-plot');
        if (!response.ok) {
          throw new Error('Failed to fetch congestion data');
        }
        const result: CongestionResponse = await response.json();
        setData(result.data);
        setMetadata(result.metadata);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Custom tick formatter for y-axis to show whole numbers
  const formatYAxisTick = (value: number) => {
    return Math.round(value).toString();
  };

  // Custom tick formatter to show clean date progression
  const formatDateTick = (tickItem: string) => {
    const date = new Date(tickItem);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric'
    });
  };

  // Formatter for tooltip to show date and hour
  const formatTooltipLabel = (label: string) => {
    const date = new Date(label);
    return `${date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })} at ${date.toLocaleTimeString('en-US', { 
      hour: 'numeric',
      minute: '2-digit',
      hour12: true 
    })}`;
  };

  // Custom tooltip content that filters out zero values
  const CustomTooltipContent = ({ active, payload, label }: any) => {
    if (!active || !payload || !payload.length) {
      return null;
    }

    // Filter out zero/near-zero values
    const nonZeroPayload = payload.filter((entry: any) => {
      const value = Number(entry.value);
      return Math.abs(value) >= 0.01;
    });

    if (nonZeroPayload.length === 0) {
      return null;
    }

    // Separate Total Congestion from constraints for sorting
    const totalCongestionEntry = nonZeroPayload.find((entry: any) => entry.name === 'Total Congestion');
    const constraintEntries = nonZeroPayload.filter((entry: any) => entry.name !== 'Total Congestion');

    // Sort constraints by value (highest to lowest)
    const sortedConstraints = constraintEntries.sort((a: any, b: any) => {
      return Number(b.value) - Number(a.value);
    });

    // Combine sorted constraints with Total Congestion at the end
    const sortedPayload = [...sortedConstraints];
    if (totalCongestionEntry) {
      sortedPayload.push(totalCongestionEntry);
    }

    return (
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-3">
        <p className="font-semibold text-gray-800 mb-2">
          {formatTooltipLabel(label)}
        </p>
        {sortedPayload.map((entry: any, index: number) => {
          const value = Number(entry.value);
          const name = entry.name;
          
          if (name === 'Total Congestion') {
            return (
              <p key={index} style={{ color: '#000000' }} className="text-sm border-t border-gray-200 pt-1 mt-1">
                <span className="font-medium">{name}:</span> ${value.toFixed(2)}/MWh
              </p>
            );
          }
          
          if (name === 'Other') {
            return (
              <p key={index} style={{ color: entry.color }} className="text-sm">
                <span className="font-medium">{name}:</span> ${value.toFixed(2)}/MWh
              </p>
            );
          }
          
          // Find the original constraint name
          const originalName = displayConstraints.find(constraint => 
            shortenConstraintName(constraint) === name
          );
          
          // Show constraint details if available
          const datetime = payload[0]?.payload?.datetime;
          if (metadata && datetime && originalName && metadata.constraintDetails[originalName] && metadata.constraintDetails[originalName][datetime]) {
            const details = metadata.constraintDetails[originalName][datetime];
            return (
              <p key={index} style={{ color: entry.color }} className="text-sm">
                <span className="font-medium">{name}:</span> ${value.toFixed(2)}/MWh 
                <span className="text-gray-600"> (SF: {details.shiftFactor.toFixed(3)}, SP: ${details.shadowprice.toFixed(2)})</span>
              </p>
            );
          }
          
          return (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              <span className="font-medium">{name}:</span> ${value.toFixed(2)}/MWh
            </p>
          );
        })}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="w-full h-96 bg-white rounded-lg shadow-lg p-6 flex items-center justify-center">
        <div className="text-gray-500">Loading congestion data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-96 bg-white rounded-lg shadow-lg p-6 flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!metadata) {
    return (
      <div className="w-full h-96 bg-white rounded-lg shadow-lg p-6 flex items-center justify-center">
        <div className="text-gray-500">No congestion data available</div>
      </div>
    );
  }

  // Get all constraint names including "Other" - handle empty case
  const allConstraints = [...(metadata.constraintNames || []), 'Other'];
  
  // Use ALL constraints (no filtering to top 10)
  const displayConstraints = allConstraints;
  
  // Function to shorten constraint names
  const shortenConstraintName = (name: string) => {
    if (name === 'Other' || name === 'Total Congestion') return name;
    
    // Extract meaningful parts of the constraint name
    const parts = name.split('_');
    if (parts.length > 2) {
      // Take first 2 parts and last part, limit total length
      const shortened = `${parts[0]}_${parts[1]}...${parts[parts.length - 1]}`;
      return shortened.length > 25 ? shortened.substring(0, 25) + '...' : shortened;
    }
    return name.length > 25 ? name.substring(0, 25) + '...' : name;
  };
  
  const colors = generateColors(displayConstraints.length);

  // Show message if no meaningful data
  if (data.length === 0 || displayConstraints.length <= 1) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Congestion Analysis</h2>
        <div className="w-full h-96 flex items-center justify-center">
          <div className="text-gray-500">No constraint data available for the selected period</div>
        </div>
      </div>
    );
  }

  // Use original data (no need to recalculate since showing all constraints)
  const chartData = data;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Congestion Analysis</h2>
      <div style={{ width: '100%', height: '600px' }}>
        <ResponsiveContainer>
          <ComposedChart data={chartData} margin={{ top: 20, right: 30, left: 60, bottom: 25 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.5} />
            <XAxis 
              dataKey="datetime" 
              tickFormatter={formatDateTick}
              tick={{ fontSize: 11 }}
              tickLine={false}
              interval={23}
              height={50}
            />
            <YAxis 
              label={{ 
                value: 'Congestion ($/MWh)', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle' }
              }}
              domain={[
                (dataMin: number) => Math.floor(dataMin / 10) * 10,
                (dataMax: number) => Math.ceil(dataMax / 10) * 10
              ]}
              tickFormatter={formatYAxisTick}
              interval={0}
              ticks={(() => {
                if (chartData.length === 0) return [];
                const allValues = chartData.flatMap(d => [
                  d['Total Congestion'],
                  ...displayConstraints.map(constraint => Number(d[constraint]) || 0)
                ]);
                const min = Math.min(...allValues);
                const max = Math.max(...allValues);
                const tickMin = Math.floor(min / 10) * 10;
                const tickMax = Math.ceil(max / 10) * 10;
                const ticks = [];
                for (let i = tickMin; i <= tickMax; i += 10) {
                  ticks.push(i);
                }
                return ticks;
              })()}
            />
            <Tooltip 
              content={CustomTooltipContent}
            />
            
            {/* Render areas for each constraint */}
            {displayConstraints.map((constraintName, index) => (
              <Area
                key={constraintName}
                type="monotone"
                dataKey={constraintName}
                stackId="1"
                stroke="none"
                fill={colors[index]}
                fillOpacity={0.85}
                name={shortenConstraintName(constraintName)}
              />
            ))}
            
            {/* Total congestion line overlay */}
            <Line 
              type="monotone" 
              dataKey="Total Congestion" 
              stroke="#000000" 
              strokeWidth={2} 
              dot={false} 
              name="Total Congestion" 
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 