
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PurchaseOrderHeader } from "./PurchaseOrderHeader";
import { PurchaseOrderItems } from "./PurchaseOrderItems";
import { PurchaseOrderSummary } from "./PurchaseOrderSummary";
import { PurchaseOrderHistory } from "./PurchaseOrderHistory";
import { NotFoundCard } from "@/components/inventory/details/NotFoundCard";
import { LoadingState } from "@/components/inventory/details/LoadingState";
import { PurchaseOrderInfo } from "@/types/purchase-order";

// Mock data - in a real app, this would come from an API call
const mockPurchaseOrder: PurchaseOrderInfo = {
  id: "PO12345",
  createdOn: "2025-03-27",
  invDueDate: "2025-03-27",
  vendorCode: "A01",
  vendorInvDate: "2025-03-27",
  vendorInvNumber: "INV789",
  originator: "John Smith",
  notes: "",
  vendorInvTotal: 350.00,
  totalCaseCount: 10,
  poTotal: 350.00,
  deposit: 0.00,
  depositCredit: 0.00,
  specialOrder: false,
  pickUp: false,
  giftWrap: false,
  items: [
    { 
      id: "10505", 
      description: "MARLBORO RED BOX 100", 
      qty: 2, 
      cases: "C",
      lastCost: 103.72,
      retail: 10.99,
      adj: 0,
      plus: 0,
      reg: 0,
      total: 10.99,
      wholesale: 7.50,
      newCost: 103.72,
      newPrice: 10.99,
      newWhole: 7.50,
      newCOGS: 7.50,
      lnCost: 103.72
    },
    { 
      id: "13364", 
      description: "MARLBORO GOLD BOA", 
      qty: 1, 
      cases: "C",
      lastCost: 103.72,
      retail: 10.99,
      adj: 0,
      plus: 0,
      reg: 0,
      total: 10.99,
      wholesale: 7.50,
      newCost: 103.72,
      newPrice: 10.99,
      newWhole: 7.50,
      newCOGS: 7.50,
      lnCost: 103.72
    },
    { 
      id: "10378", 
      description: "MARLBORO GOLD BOX 100", 
      qty: 2, 
      cases: "C",
      lastCost: 103.72,
      retail: 10.99,
      adj: 0,
      plus: 0,
      reg: 0,
      total: 10.99,
      wholesale: 7.50,
      newCost: 103.72,
      newPrice: 10.99,
      newWhole: 7.50,
      newCOGS: 7.50,
      lnCost: 103.72
    },
    { 
      id: "10736", 
      description: "MARLBORO MENTHOL BOX", 
      qty: 2, 
      cases: "C",
      lastCost: 103.72,
      retail: 10.99,
      adj: 0,
      plus: 0,
      reg: 0,
      total: 10.99,
      wholesale: 7.50,
      newCost: 103.72,
      newPrice: 10.99,
      newWhole: 7.50,
      newCOGS: 7.50,
      lnCost: 103.72
    },
  ],
  itemDetails: {
    id: "25726",
    description: "MARLBORO RED BOX 100",
    vendor: "Phillip Morris",
    size: "20 CT/PK",
    code: "10505",
    onPO: 2,
    onOO: 0,
    onHand: 10,
    onRet: 0,
    units: 1,
    pack: 10,
    carton: 12,
    costUnit: 0,
    retailGP: 22,
    ageCost: 10.37,
    moCost: 10.42,
    inventoryHistory: [
      { id: 1, date: "Mar 24 2025", status: "O-P", qty: 2, retail: 21.98, wholesale: 15.00 },
      { id: 2, date: "Mar 17 2025", status: "O-P", qty: 1, retail: 10.99, wholesale: 7.50 },
      { id: 3, date: "Mar 03 2025", status: "O-P", qty: 2, retail: 21.98, wholesale: 15.00 },
      { id: 4, date: "Feb 24 2025", status: "O-P", qty: 1, retail: 10.99, wholesale: 7.50 },
      { id: 5, date: "Feb 10 2025", status: "O-P", qty: 2, retail: 21.98, wholesale: 15.00 },
      { id: 6, date: "Feb 03 2025", status: "O-P", qty: 1, retail: 10.99, wholesale: 7.50 },
      { id: 7, date: "Jan 20 2025", status: "O-P", qty: 2, retail: 21.98, wholesale: 15.00 }
    ],
    monthlyHistory: [
      { id: 1, month: "Mar 01 2025", qt: 5, retail: 54.95, wholesale: 37.50 },
      { id: 2, month: "Feb 01 2025", qt: 3, retail: 32.97, wholesale: 22.50 },
      { id: 3, month: "Jan 01 2025", qt: 4, retail: 43.96, wholesale: 30.00 },
      { id: 4, month: "Dec 01 2024", qt: 6, retail: 65.94, wholesale: 45.00 },
      { id: 5, month: "Nov 01 2024", qt: 3, retail: 32.97, wholesale: 22.50 },
      { id: 6, month: "Oct 01 2024", qt: 5, retail: 54.95, wholesale: 37.50 }
    ]
  }
};

interface PurchaseOrderDetailsViewProps {
  orderId?: string;
}

export function PurchaseOrderDetailsView({ orderId }: PurchaseOrderDetailsViewProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [purchaseOrder, setPurchaseOrder] = useState<PurchaseOrderInfo | null>(mockPurchaseOrder);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(mockPurchaseOrder?.itemDetails?.id || null);
  
  if (isLoading) {
    return <LoadingState />;
  }
  
  if (!purchaseOrder) {
    return <NotFoundCard />;
  }

  const handleItemSelect = (itemId: string) => {
    setSelectedItemId(itemId);
    // In a real app, you would fetch item details here
  };

  return (
    <div className="space-y-6">
      <PurchaseOrderHeader purchaseOrder={purchaseOrder} />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-0">
              <PurchaseOrderItems 
                items={purchaseOrder.items} 
                onSelectItem={handleItemSelect}
                selectedItemId={selectedItemId}
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-0">
              <PurchaseOrderHistory 
                inventoryHistory={purchaseOrder.itemDetails?.inventoryHistory || []}
                monthlyHistory={purchaseOrder.itemDetails?.monthlyHistory || []}
              />
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <PurchaseOrderSummary purchaseOrder={purchaseOrder} />
        </div>
      </div>
    </div>
  );
}
