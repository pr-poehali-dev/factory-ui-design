
import { TableCell, TableRow, TableHeader, TableHead, TableBody, Table } from "@/components/ui/table";

const ProductionStructure = () => {
  const structureData = [
    { id: 1, level: 0, name: "Завод", quantity: 85 },
    { id: 2, level: 1, name: "Цех №1", quantity: 40 },
    { id: 3, level: 2, name: "Участок №1", quantity: 15 },
    { id: 4, level: 2, name: "Участок №2", quantity: 25 },
    { id: 5, level: 1, name: "Цех №2", quantity: 25 },
    { id: 6, level: 1, name: "Цех №3", quantity: 20 },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[400px]">Обозначение</TableHead>
          <TableHead className="text-right">Количество</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {structureData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="flex items-center">
                <span className="ml-[{item.level * 20}px]" style={{ marginLeft: `${item.level * 20}px` }}>
                  {item.level === 0 && "📊 "}
                  {item.level === 1 && "📈 "}
                  {item.level === 2 && "⚙️ "}
                  {item.name}
                </span>
              </div>
            </TableCell>
            <TableCell className="text-right">{item.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductionStructure;
