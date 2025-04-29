
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '15.04', готовность: 20, загрузка: 30, потери: 10 },
  { date: '16.04', готовность: 40, загрузка: 50, потери: 30 },
  { date: '17.04', готовность: 65, загрузка: 70, потери: 55 },
  { date: '18.04', готовность: 82, загрузка: 85, потери: 45 },
  { date: '19.04', готовность: 70, загрузка: 80, потери: 40 },
  { date: '20.04', готовность: 90, загрузка: 95, потери: 60 },
];

export const CoefficientsChart = () => {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => [`${value}%`]} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="готовность" 
            name="Коэффициент готовности" 
            stroke="#4338ca" 
            activeDot={{ r: 8 }} 
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="загрузка" 
            name="Коэффициент производственной загрузки" 
            stroke="#16a34a" 
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="потери" 
            name="Коэффициент потерь элеватора" 
            stroke="#eab308" 
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
