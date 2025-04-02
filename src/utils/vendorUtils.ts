
import { Vendor } from "@/types/vendor";

export const filterVendors = (vendors: Vendor[], searchTerm: string): Vendor[] => {
  if (!searchTerm) return vendors;
  
  const normalizedTerm = searchTerm.toLowerCase();
  
  return vendors.filter(vendor => 
    vendor.vendorName.toLowerCase().includes(normalizedTerm) ||
    vendor.emailId.toLowerCase().includes(normalizedTerm) ||
    vendor.contactPerson.toLowerCase().includes(normalizedTerm) ||
    vendor.companyOrganization.toLowerCase().includes(normalizedTerm) ||
    vendor.servicesOffered.toLowerCase().includes(normalizedTerm)
  );
};

// Export the mock data to be used in the component
export const initialVendors: Vendor[] = [
  {
    id: "1",
    vendorName: "ABC Supplies Co.",
    companyOrganization: "ABC Corporation",
    address: "123 Vendor Street, Suppliersville, VS 12345",
    servicesOffered: "Office supplies, furniture, and equipment",
    contactPerson: "John Smith",
    contactNumber: "555-123-4567",
    emailId: "john.smith@abcsupplies.com",
    qaExecutiveName: "Sarah Johnson",
    qaExecutiveContact: "555-987-6543",
    contactDetails: {
      purchase: { name: "Mike Purchase", email: "mike@abcsupplies.com", phone: "555-111-2222" },
      finance: { name: "Linda Finance", email: "linda@abcsupplies.com", phone: "555-333-4444" },
      quality: { name: "Sarah Quality", email: "sarah@abcsupplies.com", phone: "555-555-6666" },
      management: { name: "Bob Management", email: "bob@abcsupplies.com", phone: "555-777-8888" }
    },
    bankDetails: {
      bankName: "First National Bank",
      address: "456 Banking Ave, Finance City, FC 56789",
      contactNumber: "555-321-7890",
      accountHolderName: "ABC Supplies Co.",
      accountNumber: "1234567890",
      swiftCode: "FNBAUS12",
      iban: "US12345678901234567890",
      routingNumber: "098765432"
    }
  },
  {
    id: "2",
    vendorName: "XYZ Manufacturing",
    companyOrganization: "XYZ Industries Ltd",
    address: "789 Factory Lane, Industrial Park, IP 67890",
    servicesOffered: "Manufacturing, assembly, and prototyping",
    contactPerson: "Jane Doe",
    contactNumber: "555-987-1234",
    emailId: "jane.doe@xyzmanufacturing.com",
    qaExecutiveName: "Tom Jackson",
    qaExecutiveContact: "555-456-7890",
    contactDetails: {
      purchase: { name: "Alice Purchase", email: "alice@xyzmanufacturing.com", phone: "555-222-3333" },
      finance: { name: "Gary Finance", email: "gary@xyzmanufacturing.com", phone: "555-444-5555" },
      quality: { name: "Tom Quality", email: "tom@xyzmanufacturing.com", phone: "555-666-7777" },
      management: { name: "Mary Management", email: "mary@xyzmanufacturing.com", phone: "555-888-9999" }
    },
    bankDetails: {
      bankName: "Global Banking Corp",
      address: "321 Money Street, Bankville, BV 34567",
      contactNumber: "555-654-3210",
      accountHolderName: "XYZ Manufacturing",
      accountNumber: "0987654321",
      swiftCode: "GBCINT34",
      iban: "INT87654321098765432109",
      routingNumber: "123456789"
    }
  }
];
