
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useTheme } from "@/hooks/use-theme";

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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart 
        data={data} 
        layout="vertical" 
        barCategoryGap={20}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#e5e7eb"} />
        <XAxis 
          type="number" 
          tickFormatter={(value) => `${value}%`} 
          stroke={isDark ? "#9ca3af" : "#4b5563"}
        />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ fontSize: 14 }}
          width={80}
          stroke={isDark ? "#9ca3af" : "#4b5563"}
        />
        <Tooltip 
          formatter={(value) => [`${value}%`]} 
          contentStyle={{ backgroundColor: isDark ? "#1f2937" : "#ffffff", borderColor: isDark ? "#374151" : "#e5e7eb" }}
          labelStyle={{ color: isDark ? "#e5e7eb" : "#111827" }}
        />
        <Legend wrapperStyle={{ color: isDark ? "#e5e7eb" : "#111827" }} />
        <Bar
          dataKey="Работа по программе"
          stackId="a"
          fill={isDark ? "#a78bfa" : "#c7d2fe"}
          name="Работа по программе"
        />
        <Bar
          dataKey="Отключенные"
          stackId="a"
          fill={isDark ? "#60a5fa" : "#bfdbfe"}
          name="Отключенные"
        />
        <Bar dataKey="В простое" stackId="a" fill={isDark ? "#fcd34d" : "#fef08a"} name="В простое" />
        <Bar dataKey="В аварии" stackId="a" fill={isDark ? "#4ade80" : "#bbf7d0"} name="В аварии" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EquipmentLoadChart;
