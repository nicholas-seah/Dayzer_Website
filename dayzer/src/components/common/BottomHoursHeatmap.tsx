import React, { useEffect, useState } from 'react';
import { useScenario } from '../../contexts/ScenarioContext';

interface BottomHoursData {
  forecastWeekFrequency: number[];  // HE1-24 frequency (0-7)
  lastWeekFrequency: number[];      // HE1-24 frequency (0-7)
  metadata: {
    forecastWeekRange: string;
    lastWeekRange: string;
  };
}

export default function BottomHoursHeatmap() {
  const { selectedScenario } = useScenario();
  const [data, setData] = useState<BottomHoursData | null>(null);
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
        const response = await fetch(`/api/bottom-hours-frequency?scenarioid=${selectedScenario.scenarioid}`);
        if (!response.ok) {
          throw new Error('Failed to fetch bottom hours frequency data');
        }
        const result: BottomHoursData = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedScenario]);

  // Generate granular blue gradient color based on frequency (0-7)
  const getFrequencyColor = (frequency: number): string => {
    if (frequency === 0) return '#FFFFFF'; // Pure white
    
    // Calculate intensity: 0=white, 7=dark blue
    // Using HSL for smooth gradient: hue=210 (blue), saturation=100%, lightness varies
    const lightness = 100 - (frequency * 12); // 100% to 16% lightness
    return `hsl(210, 100%, ${lightness}%)`;
  };

  // Get text color for readability (dark blue frequencies need white text)
  const getTextColor = (frequency: number): string => {
    return frequency >= 4 ? '#FFFFFF' : '#374151'; // White text for dark blues, gray for light
  };

  if (loading) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 h-full flex items-center justify-center">
        <div className="text-gray-500 text-sm">Loading bottom hours...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 h-full flex items-center justify-center">
        <div className="text-red-500 text-sm">Error: {error}</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 h-full flex items-center justify-center">
        <div className="text-gray-500 text-sm">No data available</div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 h-full">
      <h3 className="text-md font-semibold text-gray-800 mb-3">Bottom Hours Frequency</h3>
      
      <div className="text-xs text-gray-600 mb-3">
        <div>Frequency of Lowest Priced 3 Hours</div>
      </div>
      
      {/* Heatmap Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs">
          <thead>
            <tr>
              <th className="w-16 text-left py-1 px-1 font-medium text-gray-700 border border-gray-300 bg-gray-100">Week</th>
              {/* HE1-24 columns */}
              {Array.from({ length: 24 }, (_, i) => i + 1).map(he => (
                <th key={he} className="text-center py-1 px-1 font-medium text-gray-700 border border-gray-300 bg-gray-100 min-w-[24px]">
                  {he}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Forecast Week Row */}
            <tr style={{ height: '32px' }}>
              <td className="py-1 px-1 font-medium text-gray-700 border border-gray-300 bg-gray-50 text-xs align-middle" style={{ height: '32px' }}>
                Forecast
              </td>
              {data.forecastWeekFrequency.map((frequency, index) => (
                <td 
                  key={index}
                  className="text-center py-1 px-1 border border-gray-300 min-w-[24px] font-medium align-middle"
                  style={{ 
                    backgroundColor: getFrequencyColor(frequency),
                    color: getTextColor(frequency),
                    height: '32px'
                  }}
                  title={`HE${index + 1}: ${frequency} times in bottom-3`}
                >
                  {frequency}
                </td>
              ))}
            </tr>
            
            {/* Prior Week Row */}
            <tr style={{ height: '32px' }}>
              <td className="py-1 px-1 font-medium text-gray-700 border border-gray-300 bg-gray-50 text-xs align-middle" style={{ height: '32px' }}>
                Prior
              </td>
              {data.lastWeekFrequency.map((frequency, index) => (
                <td 
                  key={index}
                  className="text-center py-1 px-1 border border-gray-300 min-w-[24px] font-medium align-middle"
                  style={{ 
                    backgroundColor: getFrequencyColor(frequency),
                    color: getTextColor(frequency),
                    height: '32px'
                  }}
                  title={`HE${index + 1}: ${frequency} times in bottom-3`}
                >
                  {frequency}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 