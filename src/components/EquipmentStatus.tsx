
import React from 'react';

const StatusItem = ({ label, value, className }: { label: string; value: number; className?: string }) => (
  <div className={`flex justify-between p-3 border-b ${className}`}>
    <span>{label}:</span>
    <span className="font-semibold">{value}</span>
  </div>
);

export const EquipmentStatus = () => {
  return (
    <div className="border rounded-md overflow-hidden">
      <StatusItem 
        label="Оборудования на заводе" 
        value={85} 
        className="bg-gray-50 font-medium"
      />
      <StatusItem 
        label="Работа по программе" 
        value={40}
      />
      <StatusItem 
        label="Выключенных" 
        value={20}
      />
      <StatusItem 
        label="В простое" 
        value={15}
      />
      <StatusItem 
        label="В аварии" 
        value={10}
      />
    </div>
  );
};
