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
  const colors = [
    '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
    '#06B6D4', '#84CC16', '#F97316', '#EC4899', '#6366F1',
    '#14B8A6', '#FDE047', '#F87171', '#A78BFA', '#34D399',
  ];
  
  if (count <= colors.length) {
    return colors.slice(0, count);
  }
  
  // Generate additional colors if needed
  const additionalColors = [];
  for (let i = colors.length; i < count; i++) {
    const hue = (i * 137.508) % 360; // Golden angle approximation
    additionalColors.push(`hsl(${hue}, 70%, 50%)`);
  }
  
  return [...colors, ...additionalColors];
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

  // Custom tooltip formatter
  const customTooltipFormatter = (value: any, name: string, props: any) => {
    if (name === 'Total Congestion') {
      return [`$${Number(value).toFixed(2)}/MWh`, name];
    }
    
    if (name === 'Other') {
      return [`$${Number(value).toFixed(2)}/MWh`, name];
    }
    
    // For constraint names, show additional details
    const datetime = props.payload?.datetime;
    if (metadata && datetime && metadata.constraintDetails[name] && metadata.constraintDetails[name][datetime]) {
      const details = metadata.constraintDetails[name][datetime];
      return [
        `$${Number(value).toFixed(2)}/MWh`,
        `${name} (SF: ${details.shiftFactor.toFixed(3)}, SP: $${details.shadowprice.toFixed(2)})`
      ];
    }
    
    return [`$${Number(value).toFixed(2)}/MWh`, name];
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

  // Get all constraint names including "Other"
  const allConstraints = [...metadata.constraintNames, 'Other'];
  const colors = generateColors(allConstraints.length);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Congestion Analysis</h2>
      <div style={{ width: '100%', height: '500px' }}>
        <ResponsiveContainer>
          <ComposedChart data={data} margin={{ top: 20, right: 30, left: 60, bottom: 25 }}>
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
                if (data.length === 0) return [];
                const allValues = data.flatMap(d => [
                  d['Total Congestion'],
                  ...allConstraints.map(constraint => Number(d[constraint]) || 0)
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
              labelFormatter={formatTooltipLabel}
              formatter={customTooltipFormatter}
            />
            <Legend />
            
            {/* Render areas for each constraint */}
            {allConstraints.map((constraintName, index) => (
              <Area
                key={constraintName}
                type="monotone"
                dataKey={constraintName}
                stackId="1"
                stroke={colors[index]}
                fill={colors[index]}
                fillOpacity={0.6}
                name={constraintName}
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