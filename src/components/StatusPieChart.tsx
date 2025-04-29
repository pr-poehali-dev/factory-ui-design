
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Работа по программе', value: 40 },
  { name: 'Отключенные', value: 20 },
  { name: 'В простое', value: 15 },
  { name: 'В аварии', value: 10 },
];

const COLORS = ['#4f46e5', '#0284c7', '#ca8a04', '#dc2626'];

export const StatusPieChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}`, 'Количество']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
