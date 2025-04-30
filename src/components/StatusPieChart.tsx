
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// Данные для круговой диаграммы статусов оборудования
const data = [
  { name: 'Работа по программе', value: 50 },
  { name: 'Отключенные', value: 25 },
  { name: 'В простое', value: 15 },
  { name: 'В аварии', value: 10 },
];

// Цвета для сегментов диаграммы
const COLORS = ['#4ade80', '#93c5fd', '#fde047', '#f87171'];

const StatusPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value) => [`${value}%`, 'Значение']} 
        />
        <Legend layout="vertical" verticalAlign="middle" align="right" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default StatusPieChart;
