
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// Данные для графика загрузки оборудования
const data = [
  {
    name: 'Цех №1',
    работа: 30,
    отключенные: 20,
    простой: 15,
    авария: 35,
  },
  {
    name: 'Цех №2',
    работа: 40,
    отключенные: 10,
    простой: 30,
    авария: 20,
  },
  {
    name: 'Цех №3',
    работа: 20,
    отключенные: 25,
    простой: 25,
    авария: 30,
  },
];

export const EquipmentLoadChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 10, right: 30, left: 60, bottom: 10 }}
        stackOffset="expand"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
        <YAxis dataKey="name" type="category" />
        <Bar dataKey="работа" stackId="a" fill="#e9d5ff" name="Работа по программе" />
        <Bar dataKey="отключенные" stackId="a" fill="#bfdbfe" name="Отключенные" />
        <Bar dataKey="простой" stackId="a" fill="#fef08a" name="В простое" />
        <Bar dataKey="авария" stackId="a" fill="#bbf7d0" name="В аварии" />
      </BarChart>
    </ResponsiveContainer>
  );
};
