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
import { useScenario } from '../../contexts/ScenarioContext';

interface LmpData {
  datetime: string;
  Energy: number;
  Congestion: number;
  Loss: number;
  LMP: number;
}

export default function PricingChart() {
  const { selectedScenario } = useScenario();
  const [data, setData] = useState<LmpData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedScenario) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/lmp-components?scenarioid=${selectedScenario.scenarioid}`);
        if (!response.ok) {
          throw new Error('Failed to fetch pricing data');
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
  }, [selectedScenario]);

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

  if (loading) {
    return (
      <div className="w-full h-96 bg-white rounded-lg shadow-lg p-6 flex items-center justify-center">
        <div className="text-gray-500">Loading pricing data...</div>
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">LMP Breakdown</h2>
      <div style={{ width: '100%', height: '500px' }}>
        <ResponsiveContainer>
          <ComposedChart data={data} margin={{ top: 20, right: 30, left: 30, bottom: 25 }}>
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
                value: '$/MWh', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle' }
              }}
              domain={[
                (dataMin: number) => Math.floor(dataMin / 20) * 20,
                (dataMax: number) => Math.ceil(dataMax / 20) * 20
              ]}
              tickFormatter={formatYAxisTick}
              ticks={(() => {
                if (data.length === 0) return [];
                const allValues = data.flatMap(d => [d.Energy, d.Congestion, d.Loss, d.LMP]);
                const min = Math.min(...allValues);
                const max = Math.max(...allValues);
                const tickMin = Math.floor(min / 20) * 20;
                const tickMax = Math.ceil(max / 20) * 20;
                const ticks = [];
                for (let i = tickMin; i <= tickMax; i += 20) {
                  ticks.push(i);
                }
                return ticks;
              })()}
            />
            <Tooltip 
              labelFormatter={formatTooltipLabel}
              formatter={(value, name) => [
                `$${Number(value).toFixed(2)}/MWh`, 
                name
              ]}
            />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="Energy" 
              stackId="1" 
              stroke="#3B82F6" 
              fill="#3B82F6" 
              fillOpacity={0.6}
              name="Energy" 
            />
            <Area 
              type="monotone" 
              dataKey="Congestion" 
              stackId="1" 
              stroke="#10B981" 
              fill="#10B981" 
              fillOpacity={0.6}
              name="Congestion" 
            />
            <Area 
              type="monotone" 
              dataKey="Loss" 
              stackId="1" 
              stroke="#F59E0B" 
              fill="#F59E0B" 
              fillOpacity={0.6}
              name="Losses" 
            />
            <Line 
              type="monotone" 
              dataKey="LMP" 
              stroke="#000000" 
              strokeWidth={2} 
              dot={false} 
              name="LMP" 
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 