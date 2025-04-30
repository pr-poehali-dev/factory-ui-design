
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Обновленные данные в соответствии с изображением
const data = [
  { date: '15.04', готовность: 32, загрузка: 26, потери: 18.4 },
  { date: '16.04', готовность: 59.2, загрузка: 52.9, потери: 38.9 },
  { date: '17.04', готовность: 67.3, загрузка: 60.5, потери: 56.3 },
  { date: '18.04', готовность: 93.5, загрузка: 85.0, потери: 56.3 },
  { date: '19.04', готовность: 76.8, загрузка: 67.5, потери: 41.7 },
  { date: '20.04', готовность: 96.0, загрузка: 92.9, потери: 61.0 },
];

// Значения коэффициентов из левого верхнего угла графика
const coefficientValues = [
  { name: 'Коэффициент готовности', value: '92 (↑3)' },
  { name: 'Коэффициент производственной загрузки', value: '93 (↑4)' },
  { name: 'Коэффициент потерь элеватора', value: '61 (↑13)' }
];

export const CoefficientsChart = () => {
  return (
    <div className="space-y-4">
      {/* Таблица с коэффициентами */}
      <div className="border rounded-md p-2 bg-gray-50 mb-2">
        <h3 className="font-medium mb-1 text-sm">Коэффициенты</h3>
        <div className="space-y-1">
          {coefficientValues.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span>{item.name}</span>
              <span className="font-semibold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* График */}
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
    </div>
  );
};
