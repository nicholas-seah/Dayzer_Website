import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface NetLoadDataPoint {
  datetime: string;
  totalDemand: number;
  renewableGeneration: number;
  netLoad: number;
}

interface NetLoadResponse {
  scenarioid: number | null;
  data: NetLoadDataPoint[];
}

const NetLoadChart: React.FC = () => {
  const [data, setData] = useState<NetLoadDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/net-load');
        const result: NetLoadResponse = await response.json();
        
        if (response.ok) {
          setData(result.data);
          setError(null);
        } else {
          setError('Failed to fetch net load data');
        }
      } catch (err) {
        setError('Error loading net load data');
        console.error('Error fetching net load data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatTooltip = (value: number, name: string) => {
    const displayNames: { [key: string]: string } = {
      totalDemand: 'Total Demand',
      renewableGeneration: 'Renewable Generation',
      netLoad: 'Net Load'
    };
    
    return [`${value.toFixed(2)} GW`, displayNames[name] || name];
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Net Load</h2>

      {loading && <div className="text-gray-600">Loading chart data...</div>}
      {error && <div className="text-red-600">Error: {error}</div>}
      
      {!loading && !error && data.length > 0 && (
        <div style={{ width: '100%', height: '500px' }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 60, bottom: 25 }}>
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
                  value: 'Load (GW)', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle' }
                }}
              />
              <Tooltip 
                formatter={formatTooltip}
                labelFormatter={formatTooltipLabel}
              />
              <Legend 
                formatter={(value) => {
                  const displayNames: { [key: string]: string } = {
                    totalDemand: 'Total Demand',
                    renewableGeneration: 'Renewable Generation',
                    netLoad: 'Net Load'
                  };
                  return displayNames[value] || value;
                }}
              />
              
              {/* Total Demand - Blue solid line */}
              <Line
                type="monotone"
                dataKey="totalDemand"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={false}
                strokeDasharray=""
              />
              
              {/* Net Load - Red solid line */}
              <Line
                type="monotone"
                dataKey="netLoad"
                stroke="#EF4444"
                strokeWidth={2}
                dot={false}
                strokeDasharray=""
              />
              
              {/* Renewable Generation - Green dashed line */}
              <Line
                type="monotone"
                dataKey="renewableGeneration"
                stroke="#10B981"
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {!loading && !error && data.length === 0 && (
        <div className="text-gray-600">No net load data available.</div>
      )}
    </div>
  );
};

export default NetLoadChart; 