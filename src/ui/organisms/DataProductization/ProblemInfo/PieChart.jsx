import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const PercentagePieChart = ({ problems, color }) => {
  const data = problems.map(({ percentage }) => ({
    value: percentage,
    color: `rgba(${color},${(percentage / 2 + 50) / 100})`,
  }));
  return (
    <ResponsiveContainer width={120} height={120}>
      <PieChart>
        <Pie
          stroke="none"
          data={data}
          cx={55}
          cy={55}
          innerRadius={40}
          outerRadius={60}
          dataKey="value"
        >
          {data.map(({ color }, index) => (
            <Cell key={`cell-${index}`} fill={color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
export default PercentagePieChart;
