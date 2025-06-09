import React, { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface LmpData {
  datetime: string;
  Energy: number;
  Congestion: number;
  Loss: number;
  LMP: number;
}

export default function LmpComponentsChart() {
  const [data, setData] = useState<LmpData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/lmp-components');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-96 bg-white rounded shadow p-4 flex items-center justify-center">
        <div className="text-gray-500">Loading chart data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-96 bg-white rounded shadow p-4 flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="w-full h-96 bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">LMP Components</h2>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="datetime" 
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            }}
          />
          <YAxis label={{ value: 'LMP ($/MWh)', angle: -90, position: 'insideLeft' }} />
          <Tooltip 
            labelFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleString();
            }}
          />
          <Legend />
          <Area type="monotone" dataKey="Energy" stackId="1" stroke="#8884d8" fill="#8884d8" name="Energy" />
          <Area type="monotone" dataKey="Congestion" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Congestion" />
          <Area type="monotone" dataKey="Loss" stackId="1" stroke="#ffc658" fill="#ffc658" name="Loss" />
          <Line type="monotone" dataKey="LMP" stroke="#000" strokeWidth={2} dot={false} name="LMP (Total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
} 