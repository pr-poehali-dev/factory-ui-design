
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw, Printer } from "lucide-react";
import EquipmentLoadChart from "@/components/EquipmentLoadChart";
import CoefficientsChart from "@/components/CoefficientsChart";
import StatusPieChart from "@/components/StatusPieChart";
import EquipmentStatus from "@/components/EquipmentStatus";
import ProductionStructure from "@/components/ProductionStructure";

const Factory = () => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Завод</h1>
      
      {/* Фильтры и настройки */}
      <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-white border rounded-lg">
        <div className="flex-1 min-w-[200px]">
          <label className="text-base font-medium text-gray-700 mb-1 block">Дата</label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Дата"
            className="h-11 px-4 py-2 text-base"
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="text-base font-medium text-gray-700 mb-1 block">Время начала</label>
          <Input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            placeholder="Время начала"
            className="h-11 px-4 py-2 text-base"
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="text-base font-medium text-gray-700 mb-1 block">Время окончания</label>
          <Input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            placeholder="Время окончания"
            className="h-11 px-4 py-2 text-base"
          />
        </div>
        <div className="flex items-end gap-2">
          <Button className="flex items-center gap-2 h-11 px-5 py-2.5 text-base font-medium">
            <RefreshCw size={16} /> Обновить
          </Button>
          <Button variant="outline" className="flex items-center gap-2 h-11 px-5 py-2.5 text-base font-medium">
            <Printer size={16} /> Печать
          </Button>
        </div>
      </div>

      {/* Основное содержимое */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* Левая колонка с графиками */}
        <div className="col-span-8 space-y-6">
          {/* График загрузки оборудования */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold mb-2">График загрузки оборудования завода</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <EquipmentLoadChart />
              </div>
              <div className="mt-4 p-2 bg-gray-50 rounded text-sm">
                <p className="font-medium mb-2 text-base">Легенда цветов:</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-2 bg-purple-200"></div>
                    <span>Работа по программе</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-2 bg-blue-200"></div>
                    <span>Отключенные</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-2 bg-yellow-200"></div>
                    <span>В простое</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-2 bg-green-200"></div>
                    <span>В аварии</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Динамика изменения коэффициентов */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold mb-2">Динамика изменения коэффициентов по дням</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[450px]">
                <CoefficientsChart />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Правая колонка */}
        <div className="col-span-4 space-y-6">
          {/* Текущий статус оборудования */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold mb-2">Текущий статус оборудования</CardTitle>
            </CardHeader>
            <CardContent>
              <EquipmentStatus />
            </CardContent>
          </Card>

          {/* Круговая диаграмма */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold mb-2">Круговая диаграмма со значениями</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="h-[350px]">
                <StatusPieChart />
              </div>
            </CardContent>
          </Card>

          {/* Уровень завода */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold mb-2">Уровень завода</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-16 bg-gray-100 rounded-md relative">
                <div 
                  className="h-full bg-green-500 rounded-md" 
                  style={{ width: '82%' }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                  82%
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Общая эффективность производства
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Структура производства */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold mb-2">Структура производства</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductionStructure />
        </CardContent>
      </Card>
    </div>
  );
};

export default Factory;
