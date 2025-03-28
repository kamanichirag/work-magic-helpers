
import { Customer } from "@/types/customer";

export const customerData: Customer[] = [
  {
    id: "1",
    companyName: "Acme Pharmaceuticals",
    billToAddress: "123 Corporate Drive, Suite 400, New York, NY 10001",
    shipToAddress: "456 Logistics Boulevard, Warehouse 7B, New Jersey, NJ 08854",
    businessRegistrationNumber: "AC-12345-PH",
    typeOfBusiness: "Manufacturing & Distribution",
    taxId: "TAX-987654321",
    isSubsidiary: false,
    parentCompany: "",
    businessActivities: "Production and distribution of generic pharmaceutical products for the North American market.",
    memberName: "John Smith",
    wholesaleDrugLicense: "WDL-2023-45678",
    otherLicenses: "FDA Certification #FDA-98765",
    contactDetails: {
      purchase: {
        name: "Alice Johnson",
        email: "alice.johnson@acmepharma.com",
        phone: "555-123-4567"
      },
      finance: {
        name: "Bob Williams",
        email: "bob.williams@acmepharma.com",
        phone: "555-234-5678"
      },
      quality: {
        name: "Carol Davis",
        email: "carol.davis@acmepharma.com",
        phone: "555-345-6789"
      },
      management: {
        name: "David Miller",
        email: "david.miller@acmepharma.com",
        phone: "555-456-7890"
      }
    },
    bankDetails: {
      bankName: "Global Financial Bank",
      address: "789 Banking Street, New York, NY 10005",
      contactNumber: "555-987-6543",
      accountHolderName: "Acme Pharmaceuticals Inc.",
      accountNumber: "1234567890",
      swiftCode: "GLOBFIN123",
      iban: "US123456789012345678901234",
      routingNumber: "987654321"
    }
  },
  {
    id: "2",
    companyName: "MediTech Solutions",
    billToAddress: "789 Innovation Way, San Francisco, CA 94107",
    shipToAddress: "789 Innovation Way, San Francisco, CA 94107",
    businessRegistrationNumber: "MT-67890-CA",
    typeOfBusiness: "Medical Technology",
    taxId: "TAX-123456789",
    isSubsidiary: true,
    parentCompany: "Global Health Innovations Ltd.",
    businessActivities: "Development and distribution of advanced medical devices and healthcare technology solutions.",
    memberName: "Sarah Chen",
    wholesaleDrugLicense: "WDL-2023-56789",
    otherLicenses: "Medical Device License #MDL-2345, ISO 13485 Certification",
    contactDetails: {
      purchase: {
        name: "Thomas Brown",
        email: "thomas.brown@meditech.com",
        phone: "555-567-8901"
      },
      finance: {
        name: "Emily Clark",
        email: "emily.clark@meditech.com",
        phone: "555-678-9012"
      },
      quality: {
        name: "Michael Garcia",
        email: "michael.garcia@meditech.com",
        phone: "555-789-0123"
      },
      management: {
        name: "Jennifer Lee",
        email: "jennifer.lee@meditech.com",
        phone: "555-890-1234"
      }
    },
    bankDetails: {
      bankName: "Pacific West Bank",
      address: "456 Financial District, San Francisco, CA 94104",
      contactNumber: "555-234-5678",
      accountHolderName: "MediTech Solutions Inc.",
      accountNumber: "9876543210",
      swiftCode: "PACWEST456",
      iban: "US987654321098765432109876",
      routingNumber: "123456789"
    }
  }
];
