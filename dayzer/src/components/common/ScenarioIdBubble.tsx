import React, { useEffect, useState } from 'react';

export default function ScenarioIdBubble() {
  const [scenarioid, setScenarioid] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/zone-demand')
      .then(res => res.json())
      .then(data => setScenarioid(data.scenarioid));
  }, []);

  if (scenarioid === null) return null;

  return (
    <div className="flex justify-center">
      <div className="inline-block px-4 py-1 mb-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm shadow">
        Scenario ID: <span className="font-mono">{scenarioid}</span>
      </div>
    </div>
  );
} 