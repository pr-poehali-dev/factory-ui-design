
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useTheme } from '@/hooks/use-theme';

// Данные для круговой диаграммы статусов оборудования
const data = [
  { name: 'Работа по программе', value: 50 },
  { name: 'Отключенные', value: 25 },
  { name: 'В простое', value: 15 },
  { name: 'В аварии', value: 10 },
];

// Цвета для сегментов диаграммы
const COLORS = {
  light: ['#4ade80', '#93c5fd', '#fde047', '#f87171'],
  dark: ['#22c55e', '#3b82f6', '#eab308', '#ef4444']
};

const StatusPieChart = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const colors = isDark ? COLORS.dark : COLORS.light;

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
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value) => [`${value}%`, 'Значение']}
          contentStyle={{ 
            backgroundColor: isDark ? "#1f2937" : "#ffffff", 
            borderColor: isDark ? "#374151" : "#e5e7eb",
            color: isDark ? "#e5e7eb" : "#111827"
          }}
        />
        <Legend 
          layout="vertical" 
          verticalAlign="middle" 
          align="right"
          wrapperStyle={{ color: isDark ? "#e5e7eb" : "#111827" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default StatusPieChart;
