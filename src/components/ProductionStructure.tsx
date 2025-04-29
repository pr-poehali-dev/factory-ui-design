
import React from 'react';

const structureData = [
  { id: 1, level: 0, name: 'Завод', quantity: 85 },
  { id: 2, level: 1, name: 'Цех №1', quantity: 40 },
  { id: 3, level: 2, name: 'Участок №1', quantity: 15 },
  { id: 4, level: 2, name: 'Участок №2', quantity: 25 },
  { id: 5, level: 1, name: 'Цех №2', quantity: 25 },
  { id: 6, level: 1, name: 'Цех №3', quantity: 20 },
];

export const ProductionStructure = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-3 border">Обозначение</th>
            <th className="text-right p-3 border w-[200px]">Количество</th>
          </tr>
        </thead>
        <tbody>
          {structureData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="p-3 border">
                <div className="flex items-center">
                  <span
                    className="inline-block"
                    style={{ paddingLeft: `${item.level * 20}px` }}
                  >
                    {item.level > 0 && (
                      <span className="mr-2">
                        {item.level === 1 ? "└─" : "├─ ─"}
                      </span>
                    )}
                    {item.name}
                  </span>
                </div>
              </td>
              <td className="p-3 border text-right">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
