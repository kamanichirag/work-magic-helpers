
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { PurchaseOrderInfo } from "@/types/purchase-order";

interface PurchaseOrderSummaryProps {
  purchaseOrder: PurchaseOrderInfo;
}

export function PurchaseOrderSummary({ purchaseOrder }: PurchaseOrderSummaryProps) {
  const { itemDetails } = purchaseOrder;
  
  return (
    <>
      <Card>
        <CardHeader className="pb-3 pt-4">
          <CardTitle className="text-md">Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="totalCaseCount">Total Cases/Units</Label>
              <Input 
                id="totalCaseCount" 
                value={purchaseOrder.totalCaseCount} 
                readOnly
                className="text-right" 
              />
            </div>
            <div>
              <Label htmlFor="poTotal">PO Total</Label>
              <Input 
                id="poTotal" 
                value={`$${purchaseOrder.poTotal.toFixed(2)}`} 
                readOnly
                className="text-right" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="deposit">Deposit</Label>
              <Input 
                id="deposit" 
                value={`$${purchaseOrder.deposit.toFixed(2)}`} 
                readOnly
                className="text-right" 
              />
            </div>
            <div>
              <Label htmlFor="depositCredit">Deposit Credit</Label>
              <Input 
                id="depositCredit" 
                value={`$${purchaseOrder.depositCredit.toFixed(2)}`} 
                readOnly
                className="text-right" 
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between space-x-4 pt-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="specialOrder" checked={purchaseOrder.specialOrder} disabled />
              <Label htmlFor="specialOrder" className="text-sm">Special Order</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="pickUp" checked={purchaseOrder.pickUp} disabled />
              <Label htmlFor="pickUp" className="text-sm">Pick Up</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="giftWrap" checked={purchaseOrder.giftWrap} disabled />
              <Label htmlFor="giftWrap" className="text-sm">Gift Wrap</Label>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {itemDetails && (
        <Card>
          <CardHeader className="pb-3 pt-4">
            <CardTitle className="text-md">
              Item Details <Badge variant="outline">{itemDetails.id}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="description">Description</Label>
              <Input id="description" value={itemDetails.description} readOnly />
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="vendor">Vendor</Label>
                <Input id="vendor" value={itemDetails.vendor} readOnly />
              </div>
              <div>
                <Label htmlFor="size">Size</Label>
                <Input id="size" value={itemDetails.size} readOnly />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="code">Code</Label>
                <Input id="code" value={itemDetails.code} readOnly />
              </div>
              <div>
                <Label htmlFor="onHand">On Hand</Label>
                <Input id="onHand" value={itemDetails.onHand} readOnly className="bg-green-100" />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div>
                <Label htmlFor="onPO">On PO</Label>
                <Input id="onPO" value={itemDetails.onPO} readOnly className="bg-green-100" />
              </div>
              <div>
                <Label htmlFor="onOO">On OO</Label>
                <Input id="onOO" value={itemDetails.onOO} readOnly className="bg-green-100" />
              </div>
              <div>
                <Label htmlFor="onRet">On Ret</Label>
                <Input id="onRet" value={itemDetails.onRet} readOnly className="bg-green-100" />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div>
                <Label htmlFor="units">Units</Label>
                <Input id="units" value={itemDetails.units} readOnly className="bg-green-100" />
              </div>
              <div>
                <Label htmlFor="pack">Pack</Label>
                <Input id="pack" value={itemDetails.pack} readOnly className="bg-green-100" />
              </div>
              <div>
                <Label htmlFor="carton">Carton</Label>
                <Input id="carton" value={itemDetails.carton} readOnly className="bg-green-100" />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div>
                <Label htmlFor="costUnit">Cost Unit</Label>
                <Input id="costUnit" value={itemDetails.costUnit === 0 ? "None" : itemDetails.costUnit} readOnly />
              </div>
              <div>
                <Label htmlFor="retailGP">Retail GP %</Label>
                <Input id="retailGP" value={`${itemDetails.retailGP}%`} readOnly className="bg-green-100" />
              </div>
              <div>
                <Label htmlFor="ageCost">Age Cost</Label>
                <Input id="ageCost" value={`$${itemDetails.ageCost.toFixed(2)}`} readOnly className="bg-green-100" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="moCost">Mo Cost</Label>
              <Input id="moCost" value={`$${itemDetails.moCost.toFixed(2)}`} readOnly className="bg-green-100" />
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
