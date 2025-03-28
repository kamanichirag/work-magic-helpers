
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { PurchaseOrder, PurchaseOrderItem } from "@/types/customer";

interface PurchaseOrdersListProps {
  purchaseOrders: PurchaseOrder[];
}

export function PurchaseOrdersList({ purchaseOrders }: PurchaseOrdersListProps) {
  const [selectedOrder, setSelectedOrder] = useState<PurchaseOrder | null>(null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Purchase Order History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>P.O.#</TableHead>
              <TableHead>Vendor</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {purchaseOrders && purchaseOrders.length > 0 ? (
              purchaseOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.poNumber}</TableCell>
                  <TableCell>{order.vendor}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedOrder(order)}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>Purchase Order #{order.poNumber}</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <p><span className="font-medium">Date:</span> {order.date}</p>
                            <p><span className="font-medium">Vendor:</span> {order.vendor}</p>
                            <p><span className="font-medium">Ship To:</span> {order.shipTo}</p>
                            <p><span className="font-medium">Payment Terms:</span> {order.paymentTerms}</p>
                          </div>
                          <div>
                            <p><span className="font-medium">Incoterms:</span> {order.incoterms}</p>
                            <p><span className="font-medium">Ship Date:</span> {order.shipDate}</p>
                            <p><span className="font-medium">Ship Via:</span> {order.shipVia}</p>
                            <p><span className="font-medium">Note:</span> {order.note}</p>
                          </div>
                        </div>
                        
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Item</TableHead>
                              <TableHead>Description</TableHead>
                              <TableHead>Quantity</TableHead>
                              <TableHead>U/M</TableHead>
                              <TableHead>Rate</TableHead>
                              <TableHead>Amount</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {order.items.map((item) => (
                              <TableRow key={item.id}>
                                <TableCell>{item.item}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{item.unitOfMeasure}</TableCell>
                                <TableCell>${item.rate.toFixed(2)}</TableCell>
                                <TableCell>${item.amount.toFixed(2)}</TableCell>
                              </TableRow>
                            ))}
                            <TableRow>
                              <TableCell colSpan={5} className="text-right font-bold">
                                Total:
                              </TableCell>
                              <TableCell className="font-bold">
                                ${order.total.toFixed(2)}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6">
                  No purchase orders found for this customer
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
