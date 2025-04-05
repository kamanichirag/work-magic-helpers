
export interface InventoryItem {
  id: string;
  productName: string;
  supplierName: string;
  supplierDetails?: string;
  ndcNumber: string;
  manufacturer: string;
  countryOfOrigin: string;
  lotNumber: string;
  storageLocation: string;
  weightGrams: number;
  quantity: number;
  dimensionsCm: {
    length: number;
    width: number;
    height: number;
  };
  forClinicalTrial: boolean;
  supply: string;
  kitRange?: string;
  seqRange?: string;
  remarks?: string;
  createdBy: string;
  createdDate: string;
  approvedBy?: string;
  approvedDate?: string;
}

export type InventoryFilter = {
  search: string;
  supplier?: string;
  manufacturer?: string;
  location?: string;
  clinicalTrial?: boolean;
}
