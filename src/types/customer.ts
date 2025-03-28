
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
}

export interface ContactPerson {
  name: string;
  email: string;
  phone: string;
}
