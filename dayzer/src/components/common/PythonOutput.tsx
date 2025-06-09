import React, { useEffect, useState } from 'react';

export default function PythonOutput() {
  const [output, setOutput] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/sum')
      .then(res => res.text())
      .then(setOutput)
      .catch(() => setOutput('Error fetching Python output.'));
  }, []);

  return (
    <div className="font-mono bg-gray-100 p-4 rounded">
      <pre>{output}</pre>
    </div>
  );
} 