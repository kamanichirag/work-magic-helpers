
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { PurchaseOrderItem } from "@/types/purchase-order";

interface PurchaseOrderItemsProps {
  items: PurchaseOrderItem[];
  onSelectItem: (itemId: string) => void;
  selectedItemId: string | null;
}

export function PurchaseOrderItems({ items, onSelectItem, selectedItemId }: PurchaseOrderItemsProps) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="w-16">Item #</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-center w-12">Qty</TableHead>
            <TableHead className="text-center w-12">Cases</TableHead>
            <TableHead className="text-right">Last Cost</TableHead>
            <TableHead className="text-right">Retail</TableHead>
            <TableHead className="text-right">Adj</TableHead>
            <TableHead className="text-right">Plus</TableHead>
            <TableHead className="text-right">Reg</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead className="text-right">New Cost</TableHead>
            <TableHead className="text-right">New Price</TableHead>
            <TableHead className="text-right">New Whole</TableHead>
            <TableHead className="text-right">New COGS</TableHead>
            <TableHead className="text-right">LnCost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow 
              key={item.id}
              onClick={() => onSelectItem(item.id)}
              className={`cursor-pointer ${selectedItemId === item.id ? 'bg-blue-50' : ''}`}
            >
              <TableCell className="font-mono">{item.id}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell className="text-center">{item.qty}</TableCell>
              <TableCell className="text-center">{item.cases}</TableCell>
              <TableCell className="text-right">${item.lastCost.toFixed(2)}</TableCell>
              <TableCell className="text-right">${item.retail.toFixed(2)}</TableCell>
              <TableCell className="text-right">${item.adj.toFixed(2)}</TableCell>
              <TableCell className="text-right">${item.plus.toFixed(2)}</TableCell>
              <TableCell className="text-right">${item.reg.toFixed(2)}</TableCell>
              <TableCell className="text-right">${item.total.toFixed(2)}</TableCell>
              <TableCell className="text-right text-blue-600">${item.newCost.toFixed(2)}</TableCell>
              <TableCell className="text-right text-blue-600">${item.newPrice.toFixed(2)}</TableCell>
              <TableCell className="text-right text-blue-600">${item.newWhole.toFixed(2)}</TableCell>
              <TableCell className="text-right text-blue-600">${item.newCOGS.toFixed(2)}</TableCell>
              <TableCell className="text-right">${item.lnCost.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
