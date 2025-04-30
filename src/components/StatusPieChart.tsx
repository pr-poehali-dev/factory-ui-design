import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// Данные для круговой диаграммы статусов оборудования
const data = [
  { name: 'Работа по программе', value: 50 },
  { name: 'Отключенные', value: 25 },
  { name: 'В простое', value: 15 },
  { name: 'В аварии', value: 10 },
];

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
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={
                index === 0 ? "hsl(var(--chart-primary))" : 
                index === 1 ? "hsl(var(--chart-secondary))" : 
                index === 2 ? "hsl(var(--chart-tertiary))" : 
                "hsl(var(--chart-quaternary))"
              } 
            />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value) => [`${value}%`, 'Значение']} 
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            color: "hsl(var(--card-foreground))",
            border: "1px solid hsl(var(--border))"
          }}
        />
        <Legend 
          layout="vertical" 
          verticalAlign="middle" 
          align="right" 
          wrapperStyle={{ 
            color: "hsl(var(--chart-text))" 
          }} 
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default StatusPieChart;