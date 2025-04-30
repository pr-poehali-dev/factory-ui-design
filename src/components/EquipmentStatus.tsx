
import React from "react";

const EquipmentStatus = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
        <span className="text-base font-medium">Оборудования на заводе:</span>
        <span className="text-base font-semibold">85</span>
      </div>
      
      <div className="flex justify-between items-center p-2 bg-purple-50 rounded-md">
        <span className="text-base font-medium">Работа по программе:</span>
        <span className="text-base font-semibold">42</span>
      </div>
      
      <div className="flex justify-between items-center p-2 bg-blue-50 rounded-md">
        <span className="text-base font-medium">Выключенных:</span>
        <span className="text-base font-semibold">18</span>
      </div>
      
      <div className="flex justify-between items-center p-2 bg-yellow-50 rounded-md">
        <span className="text-base font-medium">В простое:</span>
        <span className="text-base font-semibold">15</span>
      </div>
      
      <div className="flex justify-between items-center p-2 bg-red-50 rounded-md">
        <span className="text-base font-medium">В аварии:</span>
        <span className="text-base font-semibold">10</span>
      </div>
    </div>
  );
};

export default EquipmentStatus;
