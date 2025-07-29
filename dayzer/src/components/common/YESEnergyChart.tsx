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

interface YESEnergyDataPoint {
  DATETIME: string;
  MARKETDAY: string;
  HOURENDING: number;
  [key: string]: string | number;
}

interface YESEnergyResponse {
  success: boolean;
  data: YESEnergyDataPoint[];
  error?: string;
}

const YESEnergyChart: React.FC = () => {
  const [data, setData] = useState<YESEnergyDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/yes-energy-test');
        const result: YESEnergyResponse = await response.json();
        
        if (result.success && result.data) {
          setData(result.data);
          setError(null);
        } else {
          setError(result.error || 'Failed to fetch YES Energy data');
        }
      } catch (err) {
        setError('Error loading YES Energy data');
        console.error('Error fetching YES Energy data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatTooltip = (value: number, name: string) => {
    return [`$${value.toFixed(2)}/MWh`, 'Houston LMP'];
  };

  // Format hour for x-axis
  const formatXAxisTick = (tickItem: number) => {
    return `HE${tickItem}`;
  };

  // Formatter for tooltip to show hour
  const formatTooltipLabel = (label: number) => {
    return `Hour Ending: ${label}`;
  };

  // Get the LMP column name (it will be something like "RTLMP ($/MWh)")
  const getLMPColumnName = () => {
    if (data.length > 0) {
      const columns = Object.keys(data[0]);
      return columns.find(col => col.includes('RTLMP') || col.includes('LMP')) || 'LMP';
    }
    return 'LMP';
  };

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 h-96 flex items-center justify-center">
        <div className="text-gray-500">Loading Houston LMP data from YES Energy...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 h-96 flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  const lmpColumnName = getLMPColumnName();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Houston LMP - July 9, 2025 (YES Energy Data)
      </h2>
      
      {!loading && !error && data.length > 0 && (
        <div style={{ width: '100%', height: '400px' }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 60, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.5} />
              <XAxis 
                dataKey="HOURENDING"
                tickFormatter={formatXAxisTick}
                tick={{ fontSize: 11 }}
                tickLine={false}
                domain={[1, 24]}
              />
              <YAxis 
                label={{ 
                  value: '$/MWh', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle' }
                }}
              />
              <Tooltip 
                formatter={formatTooltip}
                labelFormatter={formatTooltipLabel}
              />
              <Legend />
              
              {/* Houston LMP Line */}
              <Line
                type="monotone"
                dataKey={lmpColumnName}
                stroke="#EF4444"
                strokeWidth={2}
                dot={{ r: 4 }}
                name="Houston LMP"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {!loading && !error && data.length === 0 && (
        <div className="text-gray-600 text-center py-8">
          No Houston LMP data available from YES Energy.
        </div>
      )}
      
      {/* Debug info */}
      {data.length > 0 && (
        <div className="mt-4 text-xs text-gray-500">
          <p>Data points: {data.length}</p>
          <p>Columns: {Object.keys(data[0]).join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default YESEnergyChart; 