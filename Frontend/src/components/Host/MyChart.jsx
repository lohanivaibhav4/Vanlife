import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: '01-03', amount: 4000 },
  { name: '15-03', amount: 1500 },
  { name: '30-03', amount: 3000 },
  { name: '15-04', amount: 4000 },
  { name: '30-04', amount: 1500 },
  { name: '15-05', amount: 3000 },
];

const MyBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barCategoryGap={20}>
        <CartesianGrid strokeDasharray="6 6" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis 
          tickFormatter={(value) => `Rs.${value / 1000}k`}
          domain={[0, 4000]}
        />
        <Tooltip formatter={(value) => `Rs.${value}`} />
        <Bar
          dataKey="amount"
          radius={[10, 10, 0, 0]}
          fill="#FDBA74"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyBarChart;
