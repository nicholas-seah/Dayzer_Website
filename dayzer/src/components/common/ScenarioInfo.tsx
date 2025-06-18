import React, { useEffect, useState } from 'react';

interface ScenarioInfoProps {
  className?: string;
}

export default function ScenarioInfo({ className = '' }: ScenarioInfoProps) {
  const [scenarioid, setScenariosid] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScenarioInfo = async () => {
      try {
        // Use the lmp-components endpoint to get scenarioid (it's returned in the response)
        const response = await fetch('/api/lmp-components');
        if (response.ok) {
          // For now, we'll extract from any API call that returns scenarioid
          // In the future, we could create a dedicated scenario info endpoint
          
          // Try the test endpoint which returns scenarioid
          const testResponse = await fetch('/api/test-unit-66038');
          if (testResponse.ok) {
            const result = await testResponse.json();
            if (result.scenarioid) {
              setScenariosid(result.scenarioid);
            }
          }
        }
      } catch (error) {
        console.error('Failed to fetch scenario info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchScenarioInfo();
  }, []);

  if (loading) {
    return (
      <div className={`text-sm text-gray-500 ${className}`}>
        Loading scenario info...
      </div>
    );
  }

  if (!scenarioid) {
    return null;
  }

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium ${className}`}>
      Scenario ID: {scenarioid}
    </div>
  );
} 