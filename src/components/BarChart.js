import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/BarChart.css';

const data = [
  { name: 'Jan', ventes: 4000 },
  { name: 'Fév', ventes: 3000 },
  { name: 'Mar', ventes: 5000 },
  { name: 'Avr', ventes: 2780 },
  { name: 'Mai', ventes: 1890 },
  { name: 'Juin', ventes: 2390 },
  { name: 'Juil', ventes: 3490 },
  { name: 'Aoû', ventes: 4000 },
  { name: 'Sep', ventes: 4500 },
  { name: 'Oct', ventes: 3800 },
  { name: 'Nov', ventes: 4300 },
  { name: 'Déc', ventes: 5200 },
];

const CustomBarChart = () => {
  return (
    <div className="chart-container">
      <h2>Ventes mensuelles</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ventes" fill="#3498db" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;