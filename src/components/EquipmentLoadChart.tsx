
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" tickFormatter={(value) => `${value}%`} />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ fontSize: 14 }}
          width={80}
        />
        <Tooltip formatter={(value) => [`${value}%`]} />
        <Legend />
        <Bar
          dataKey="Работа по программе"
          stackId="a"
          fill="#c7d2fe"
          name="Работа по программе"
        />
        <Bar
          dataKey="Отключенные"
          stackId="a"
          fill="#bfdbfe"
          name="Отключенные"
        />
        <Bar dataKey="В простое" stackId="a" fill="#fef08a" name="В простое" />
        <Bar dataKey="В аварии" stackId="a" fill="#bbf7d0" name="В аварии" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EquipmentLoadChart;
