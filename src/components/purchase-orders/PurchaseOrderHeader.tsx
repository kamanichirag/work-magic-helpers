
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PurchaseOrderInfo } from "@/types/purchase-order";

interface PurchaseOrderHeaderProps {
  purchaseOrder: PurchaseOrderInfo;
}

export function PurchaseOrderHeader({ purchaseOrder }: PurchaseOrderHeaderProps) {
  return (
    <Card className="bg-muted/20">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">
            Purchase Order <Badge>{purchaseOrder.id}</Badge>
          </h1>
          <Badge variant="outline" className="text-sm bg-green-100">
            BORROW HEAVEN GIFTS
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="createdOn">Created On</Label>
                <Input id="createdOn" value={purchaseOrder.createdOn} readOnly />
              </div>
              <div>
                <Label htmlFor="invDueDate">Inv Due Date</Label>
                <Input id="invDueDate" value={purchaseOrder.invDueDate} readOnly />
              </div>
            </div>
            <div>
              <Label htmlFor="vendorInvNumber">Vendor Inv Number</Label>
              <Input id="vendorInvNumber" value={purchaseOrder.vendorInvNumber} readOnly />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="vendorCode">Vendor Code</Label>
                <Input id="vendorCode" value={purchaseOrder.vendorCode} readOnly />
              </div>
              <div>
                <Label htmlFor="vendorInvDate">Vendor Inv Date</Label>
                <Input id="vendorInvDate" value={purchaseOrder.vendorInvDate} readOnly />
              </div>
            </div>
            <div>
              <Label htmlFor="originator">Originator</Label>
              <Input id="originator" value={purchaseOrder.originator} readOnly />
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Input id="notes" value={purchaseOrder.notes} readOnly />
            </div>
            <div>
              <Label htmlFor="vendorInvTotal">Vendor Inv Total</Label>
              <Input 
                id="vendorInvTotal" 
                value={`$${purchaseOrder.vendorInvTotal.toFixed(2)}`} 
                readOnly
                className="font-semibold text-right" 
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
