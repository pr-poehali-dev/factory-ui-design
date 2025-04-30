
const EquipmentStatus = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
        <span>Оборудования на заводе:</span>
        <span className="font-bold">85</span>
      </div>
      
      <div className="flex justify-between items-center p-2 bg-purple-50 rounded-md">
        <span>Работа по программе:</span>
        <span className="font-bold">42</span>
      </div>
      
      <div className="flex justify-between items-center p-2 bg-blue-50 rounded-md">
        <span>Выключенных:</span>
        <span className="font-bold">18</span>
      </div>
      
      <div className="flex justify-between items-center p-2 bg-yellow-50 rounded-md">
        <span>В простое:</span>
        <span className="font-bold">15</span>
      </div>
      
      <div className="flex justify-between items-center p-2 bg-red-50 rounded-md">
        <span>В аварии:</span>
        <span className="font-bold">10</span>
      </div>
    </div>
  );
};

export default EquipmentStatus;
