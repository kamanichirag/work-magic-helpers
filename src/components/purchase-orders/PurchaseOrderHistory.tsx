
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  InventoryHistoryItem, 
  MonthlyHistoryItem 
} from "@/types/purchase-order";

interface PurchaseOrderHistoryProps {
  inventoryHistory: InventoryHistoryItem[];
  monthlyHistory: MonthlyHistoryItem[];
}

export function PurchaseOrderHistory({ 
  inventoryHistory, 
  monthlyHistory 
}: PurchaseOrderHistoryProps) {
  return (
    <Tabs defaultValue="inventory">
      <TabsList className="mx-4 mt-4">
        <TabsTrigger value="inventory">Purchase History</TabsTrigger>
        <TabsTrigger value="monthly">Monthly Sales History</TabsTrigger>
      </TabsList>
      
      <TabsContent value="inventory" className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-8">#</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Qty</TableHead>
              <TableHead className="text-right">Retail</TableHead>
              <TableHead className="text-right">Wholesale</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryHistory.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell className="text-center">{item.qty}</TableCell>
                <TableCell className="text-right">${item.retail.toFixed(2)}</TableCell>
                <TableCell className="text-right">${item.wholesale.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
      
      <TabsContent value="monthly" className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-8">#</TableHead>
              <TableHead>Month</TableHead>
              <TableHead className="text-center">Qty</TableHead>
              <TableHead className="text-right">Retail</TableHead>
              <TableHead className="text-right">Wholesale</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {monthlyHistory.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.month}</TableCell>
                <TableCell className="text-center">{item.qt}</TableCell>
                <TableCell className="text-right">${item.retail.toFixed(2)}</TableCell>
                <TableCell className="text-right">${item.wholesale.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  );
}
