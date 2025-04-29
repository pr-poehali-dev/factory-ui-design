
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw, Printer } from "lucide-react";
import { EquipmentLoadChart } from "@/components/EquipmentLoadChart";
import { CoefficientsChart } from "@/components/CoefficientsChart";
import { StatusPieChart } from "@/components/StatusPieChart";
import { EquipmentStatus } from "@/components/EquipmentStatus";
import { ProductionStructure } from "@/components/ProductionStructure";

const Factory = () => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Завод</h1>
      
      {/* Фильтры и настройки */}
      <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-white border rounded-lg">
        <div className="flex-1 min-w-[200px]">
          <label className="text-sm text-gray-600 mb-1 block">Дата</label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Дата"
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="text-sm text-gray-600 mb-1 block">Время начала</label>
          <Input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            placeholder="Время начала"
          />
        </div>
        <div className="flex-1 min-w-[200px]">
          <label className="text-sm text-gray-600 mb-1 block">Время окончания</label>
          <Input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            placeholder="Время окончания"
          />
        </div>
        <div className="flex items-end gap-2">
          <Button className="flex items-center gap-2">
            <RefreshCw size={16} /> Обновить
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Printer size={16} /> Печать
          </Button>
        </div>
      </div>

      {/* Основное содержимое */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Левая колонка с графиками */}
        <div className="lg:col-span-2 space-y-6">
          {/* График загрузки оборудования */}
          <Card>
            <CardHeader>
              <CardTitle>График загрузки оборудования завода</CardTitle>
            </CardHeader>
            <CardContent>
              <EquipmentLoadChart />
              <div className="mt-4 p-2 bg-gray-50 rounded text-sm">
                <p className="font-medium mb-2">Легенда цветов:</p>
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
              <CardTitle>Динамика изменения коэффициентов по дням</CardTitle>
            </CardHeader>
            <CardContent>
              <CoefficientsChart />
            </CardContent>
          </Card>
        </div>

        {/* Правая колонка */}
        <div className="space-y-6">
          {/* Текущий статус оборудования */}
          <Card>
            <CardHeader>
              <CardTitle>Текущий статус оборудования</CardTitle>
            </CardHeader>
            <CardContent>
              <EquipmentStatus />
            </CardContent>
          </Card>

          {/* Круговая диаграмма */}
          <Card>
            <CardHeader>
              <CardTitle>Круговая диаграмма со значениями</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <StatusPieChart />
            </CardContent>
          </Card>

          {/* Уровень завода */}
          <Card>
            <CardHeader>
              <CardTitle>Уровень завода</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-16 bg-gray-100 rounded-md relative">
                <div 
                  className="h-full bg-green-500 rounded-md" 
                  style={{ width: '82%' }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
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
          <CardTitle>Структура производства</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductionStructure />
        </CardContent>
      </Card>
    </div>
  );
};

export default Factory;
