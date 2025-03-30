
export interface Vendor {
  id: string;
  vendorName: string;
  companyOrganization: string;
  address: string;
  servicesOffered: string;
  contactPerson: string;
  contactNumber: string;
  emailId: string;
  qaExecutiveName: string;
  qaExecutiveContact: string;
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
}

export interface ContactPerson {
  name: string;
  email: string;
  phone: string;
}
