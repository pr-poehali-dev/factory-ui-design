
import React from 'react';

// Данные структуры производства
const productionData = [
  { id: 1, name: 'Завод', quantity: 85, level: 0 },
  { id: 2, name: 'Цех №1', quantity: 40, level: 1 },
  { id: 3, name: 'Участок №1', quantity: 15, level: 2 },
  { id: 4, name: 'Участок №2', quantity: 25, level: 2 },
  { id: 5, name: 'Цех №2', quantity: 25, level: 1 },
  { id: 6, name: 'Цех №3', quantity: 20, level: 1 },
];

const ProductionStructure = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="border p-4 text-left font-semibold text-base">Обозначение</th>
            <th className="border p-4 text-left font-semibold text-base">Количество</th>
          </tr>
        </thead>
        <tbody>
          {productionData.map((item) => (
            <tr key={item.id}>
              <td className="border p-4 text-base">
                <div className="flex items-center">
                  {item.level > 0 && (
                    <span style={{ marginLeft: `${item.level * 20}px` }}>
                      {item.level === 1 ? '└─' : '├───'}
                    </span>
                  )}
                  {item.name}
                </div>
              </td>
              <td className="border p-4 text-base">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductionStructure;
