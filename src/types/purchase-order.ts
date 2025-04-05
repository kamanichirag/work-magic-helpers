
export interface PurchaseOrderItem {
  id: string;
  description: string;
  qty: number;
  cases: string;
  lastCost: number;
  retail: number;
  adj: number;
  plus: number;
  reg: number;
  total: number;
  wholesale: number;
  newCost: number;
  newPrice: number;
  newWhole: number;
  newCOGS: number;
  lnCost: number;
}

export interface InventoryHistoryItem {
  id: number;
  date: string;
  status: string;
  qty: number;
  retail: number;
  wholesale: number;
}

export interface MonthlyHistoryItem {
  id: number;
  month: string;
  qt: number;
  retail: number;
  wholesale: number;
}

export interface ItemDetails {
  id: string;
  description: string;
  vendor: string;
  size: string;
  code: string;
  onPO: number;
  onOO: number;
  onHand: number;
  onRet: number;
  units: number;
  pack: number;
  carton: number;
  costUnit: number;
  retailGP: number;
  ageCost: number;
  moCost: number;
  inventoryHistory: InventoryHistoryItem[];
  monthlyHistory: MonthlyHistoryItem[];
}

export interface PurchaseOrderInfo {
  id: string;
  createdOn: string;
  invDueDate: string;
  vendorCode: string;
  vendorInvDate: string;
  vendorInvNumber: string;
  originator: string;
  notes: string;
  vendorInvTotal: number;
  totalCaseCount: number;
  poTotal: number;
  deposit: number;
  depositCredit: number;
  specialOrder: boolean;
  pickUp: boolean;
  giftWrap: boolean;
  items: PurchaseOrderItem[];
  itemDetails: ItemDetails;
}
