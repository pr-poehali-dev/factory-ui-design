import React from 'react';

const EquipmentStatus = () => {
  return (
    <div className="space-y-4">
      <div className="border-b pb-2">
        <div className="flex justify-between items-center text-base mb-2">
          <span className="font-medium">Оборудования на заводе:</span>
          <span className="font-semibold">85</span>
        </div>
      </div>
      
      <div className="border-b pb-2">
        <div className="flex justify-between items-center text-base mb-2">
          <span className="font-medium">Работа по программе:</span>
          <span className="font-semibold">50</span>
        </div>
      </div>
      
      <div className="border-b pb-2">
        <div className="flex justify-between items-center text-base mb-2">
          <span className="font-medium">Выключенных:</span>
          <span className="font-semibold">25</span>
        </div>
      </div>
      
      <div className="border-b pb-2">
        <div className="flex justify-between items-center text-base mb-2">
          <span className="font-medium">В простое:</span>
          <span className="font-semibold">15</span>
        </div>
      </div>
      
      <div className="pb-2">
        <div className="flex justify-between items-center text-base mb-2">
          <span className="font-medium">В аварии:</span>
          <span className="font-semibold">10</span>
        </div>
      </div>
    </div>
  );
};

export default EquipmentStatus;