import React, { useState, useEffect } from 'react';
import { useScenario } from '../../contexts/ScenarioContext';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ZoneDemandDataPoint {
  datetime: string;
  [zoneName: string]: string | number;
}

interface ZoneDemandResponse {
  scenarioid: number | null;
  data: ZoneDemandDataPoint[];
}

const ZoneDemandChart: React.FC = () => {
  const { selectedScenario } = useScenario();
  const [data, setData] = useState<ZoneDemandDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [availableZones, setAvailableZones] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedScenario) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`/api/zone-demand?scenarioid=${selectedScenario.scenarioid}`);
        const result: ZoneDemandResponse = await response.json();
        
        if (response.ok) {
          setData(result.data);
          
          // Extract available zones from the data (excluding datetime)
          if (result.data.length > 0) {
            const zones = Object.keys(result.data[0]).filter(
              key => key !== 'datetime'
            );
            setAvailableZones(zones);
          }
          
          setError(null);
        } else {
          setError('Failed to fetch zone demand data');
        }
      } catch (err) {
        setError('Error loading zone demand data');
        console.error('Error fetching zone demand data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedScenario]);

  const formatTooltip = (value: number, name: string) => {
    return [`${value.toFixed(2)} GW`, name];
  };

  // Custom tick formatter to show clean date progression
  const formatDateTick = (tickItem: string) => {
    const date = new Date(tickItem);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric'
    });
  };

  // New formatter for tooltip to show date and hour
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

  // Color mapping for different zones
  const zoneColors: { [key: string]: string } = {
    'Pacific Gas & Electric': '#3B82F6',
    'San Diego Gas & Electric': '#EF4444', 
    'Southern CA Edison': '#10B981',
    'Valley Electric Association': '#F59E0B',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Hourly Zone Demand</h2>

      {loading && <div className="text-gray-600">Loading chart data...</div>}
      {error && <div className="text-red-600">Error: {error}</div>}
      
      {!loading && !error && data.length > 0 && (
        <div style={{ width: '100%', height: '500px' }}>
          <ResponsiveContainer>
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 60, bottom: 25 }}>
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
                  value: 'Demand (GW)', 
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
              
              {/* Render areas for each zone */}
              {availableZones.map((zone, index) => (
                <Area
                  key={zone}
                  type="monotone"
                  dataKey={zone}
                  stackId="1"
                  stroke={zoneColors[zone] || '#6B7280'}
                  fill={zoneColors[zone] || '#6B7280'}
                  fillOpacity={0.6}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}

      {!loading && !error && data.length === 0 && (
        <div className="text-gray-600">No zone demand data available.</div>
      )}
    </div>
  );
};

export default ZoneDemandChart; 