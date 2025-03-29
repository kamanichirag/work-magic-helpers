
export interface Customer {
  id: string;
  companyName: string;
  billToAddress: string;
  shipToAddress: string;
  businessRegistrationNumber: string;
  typeOfBusiness: string;
  taxId: string;
  isSubsidiary: boolean;
  parentCompany: string;
  businessActivities: string;
  memberName: string;
  wholesaleDrugLicense: string;
  otherLicenses: string;
  contactDetails: {
    purchase: ContactPerson;
    finance: ContactPerson;
    quality: ContactPerson;
    management: ContactPerson;
  };
  bankDetails: {
    bankName: string;
    address: string;
    contactNumber: string;
    accountHolderName: string;
    accountNumber: string;
    swiftCode: string;
    iban: string;
    routingNumber: string;
  };
  purchaseOrders?: PurchaseOrder[];
}

export interface ContactPerson {
  name: string;
  email: string;
  phone: string;
}

export interface PurchaseOrder {
  id: string;
  date: string;
  poNumber: string;
  vendor: string;
  shipTo: string;
  paymentTerms: string;
  incoterms: string;
  shipDate: string;
  shipVia: string;
  note: string;
  status: "active" | "closed";
  paymentStatus?: "paid" | "pending" | "overdue";
  items: PurchaseOrderItem[];
  total: number;
}

export interface PurchaseOrderItem {
  id: string;
  item: string;
  description: string;
  quantity: number;
  unitOfMeasure: string;
  rate: number;
  amount: number;
}
