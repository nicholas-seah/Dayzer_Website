import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface Scenario {
  scenarioid: number;
  simulation_date: string;
  scenarioname: string;
}

interface ScenarioContextType {
  selectedScenario: Scenario | null;
  availableScenarios: Scenario[];
  setSelectedScenario: (scenario: Scenario) => void;
  loading: boolean;
  error: string | null;
}

const ScenarioContext = createContext<ScenarioContextType | undefined>(undefined);

export function useScenario() {
  const context = useContext(ScenarioContext);
  if (context === undefined) {
    throw new Error('useScenario must be used within a ScenarioProvider');
  }
  return context;
}

interface ScenarioProviderProps {
  children: ReactNode;
}

export function ScenarioProvider({ children }: ScenarioProviderProps) {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [availableScenarios, setAvailableScenarios] = useState<Scenario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvailableScenarios = async () => {
      try {
        const response = await fetch('/api/available-scenarios');
        if (!response.ok) {
          throw new Error('Failed to fetch available scenarios');
        }
        
        const data = await response.json();
        console.log('Fetched scenarios data:', data);
        
        setAvailableScenarios(data.scenarios || []);
        
        // Set default scenario (most recent CAISO_WEEK)
        if (data.defaultScenario) {
          console.log('Setting default scenario:', data.defaultScenario);
          setSelectedScenario(data.defaultScenario);
        } else {
          console.log('No default scenario found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Failed to fetch scenarios:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailableScenarios();
  }, []);

  return (
    <ScenarioContext.Provider
      value={{
        selectedScenario,
        availableScenarios,
        setSelectedScenario,
        loading,
        error,
      }}
    >
      {children}
    </ScenarioContext.Provider>
  );
} 