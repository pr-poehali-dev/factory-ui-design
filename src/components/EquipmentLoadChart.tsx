import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Цех №1",
    "Работа по программе": 40,
    "Отключенные": 30,
    "В простое": 20,
    "В аварии": 10,
  },
  {
    name: "Цех №2",
    "Работа по программе": 45,
    "Отключенные": 25,
    "В простое": 20,
    "В аварии": 10,
  },
  {
    name: "Цех №3",
    "Работа по программе": 35,
    "Отключенные": 25,
    "В простое": 30,
    "В аварии": 10,
  },
];

const EquipmentLoadChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" barCategoryGap={20}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-grid))" />
        <XAxis 
          type="number" 
          tickFormatter={(value) => `${value}%`} 
          tick={{ fill: "hsl(var(--chart-text))" }}
        />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ fontSize: 14, fill: "hsl(var(--chart-text))" }}
          width={80}
        />
        <Tooltip 
          formatter={(value) => [`${value}%`]} 
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            color: "hsl(var(--card-foreground))",
            border: "1px solid hsl(var(--border))"
          }}
        />
        <Legend 
          wrapperStyle={{ color: "hsl(var(--chart-text))" }} 
        />
        <Bar
          dataKey="Работа по программе"
          stackId="a"
          fill="hsl(var(--chart-primary))"
          name="Работа по программе"
        />
        <Bar
          dataKey="Отключенные"
          stackId="a"
          fill="hsl(var(--chart-secondary))"
          name="Отключенные"
        />
        <Bar 
          dataKey="В простое" 
          stackId="a" 
          fill="hsl(var(--chart-tertiary))" 
          name="В простое" 
        />
        <Bar 
          dataKey="В аварии" 
          stackId="a" 
          fill="hsl(var(--chart-quaternary))" 
          name="В аварии" 
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EquipmentLoadChart;