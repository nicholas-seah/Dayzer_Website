import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// Mock data (replace with API fetch later)
const data = [
  {
    date: '2024-05-01',
    revenue_actual: 1000,
    revenue_forecast: null,
    lmp_rt_actual: 45.2,
    lmp_da_actual: 44.0,
    lmp_forecast: 48.0,
  },
  {
    date: '2024-05-02',
    revenue_actual: 1100,
    revenue_forecast: 1200,
    lmp_rt_actual: 47.1,
    lmp_da_actual: 46.0,
    lmp_forecast: 49.0,
  },
  {
    date: '2024-05-03',
    revenue_actual: 1050,
    revenue_forecast: 1250,
    lmp_rt_actual: 46.5,
    lmp_da_actual: 45.5,
    lmp_forecast: 50.0,
  },
  {
    date: '2024-05-04',
    revenue_actual: null,
    revenue_forecast: 1300,
    lmp_rt_actual: null,
    lmp_da_actual: null,
    lmp_forecast: 51.0,
  },
];

export default function LmpRevenueChart() {
  return (
    <div className="w-full h-96 bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-4">LMP & Revenue Chart (Mock Data)</h2>
      <ResponsiveContainer width="100%" height="85%">
        <ComposedChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" orientation="left" label={{ value: 'LMP', angle: -90, position: 'insideLeft' }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: 'Revenue', angle: 90, position: 'insideRight' }} />
          <Tooltip />
          <Legend />
          {/* Bar for Actual Revenue */}
          <Bar yAxisId="right" dataKey="revenue_actual" name="Actual Revenue" fill="#87ceeb" opacity={0.5} />
          {/* Bar for Forecast Revenue */}
          <Bar yAxisId="right" dataKey="revenue_forecast" name="Forecast Revenue (110%)" fill="#ff0000" opacity={0.3} />
          {/* Line for RT Actual LMP */}
          <Line yAxisId="left" type="monotone" dataKey="lmp_rt_actual" name="RT Actual LMP" stroke="#0000ff" strokeWidth={2} dot={false} />
          {/* Line for DA Actual LMP */}
          <Line yAxisId="left" type="monotone" dataKey="lmp_da_actual" name="DA Actual LMP" stroke="#ffa500" strokeWidth={2} dot={false} />
          {/* Line for Forecast LMP */}
          <Line yAxisId="left" type="monotone" dataKey="lmp_forecast" name="Forecast LMP" stroke="#ff0000" strokeWidth={2} dot={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
} 