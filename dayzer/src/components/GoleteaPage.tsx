import React from 'react';
import { ScenarioProvider } from '../contexts/ScenarioContext';
import ScenarioInfo from './common/ScenarioInfo';
import PricingChart from './common/PricingChart';
import CongestionChart from './common/CongestionChart';

export default function GoleteaPage() {
  return (
    <ScenarioProvider>
      <div className="space-y-6">
        {/* Scenario Info Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <ScenarioInfo />
        </div>
        
        {/* Goleta Content Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">Goleta</h1>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <PricingChart />
              <CongestionChart />
            </div>
          </div>
        </div>
      </div>
    </ScenarioProvider>
  );
} 