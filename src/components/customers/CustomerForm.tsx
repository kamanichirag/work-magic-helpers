
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Customer } from "@/types/customer";
import { CompanyInfoTab } from "./CompanyInfoTab";
import { ContactsTab } from "./ContactsTab";
import { BankInfoTab } from "./BankInfoTab";

interface CustomerFormProps {
  initialData?: Customer;
  onSubmit: (data: Customer) => void;
  isEditing?: boolean;
}

export const CustomerForm = ({ initialData, onSubmit, isEditing = false }: CustomerFormProps) => {
  const [formData, setFormData] = useState<Customer>(
    initialData || {
      id: crypto.randomUUID(),
      companyName: "",
      billToAddress: "",
      shipToAddress: "",
      businessRegistrationNumber: "",
      typeOfBusiness: "",
      taxId: "",
      isSubsidiary: false,
      parentCompany: "",
      businessActivities: "",
      memberName: "",
      wholesaleDrugLicense: "",
      otherLicenses: "",
      contactDetails: {
        purchase: { name: "", email: "", phone: "" },
        finance: { name: "", email: "", phone: "" },
        quality: { name: "", email: "", phone: "" },
        management: { name: "", email: "", phone: "" }
      },
      bankDetails: {
        bankName: "",
        address: "",
        contactNumber: "",
        accountHolderName: "",
        accountNumber: "",
        swiftCode: "",
        iban: "",
        routingNumber: ""
      }
    }
  );

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => {
      // Handle nested fields
      if (field.includes(".")) {
        const [section, subSection, property] = field.split(".");
        
        if (section && subSection && property) {
          if (section in prev) {
            const sectionObj = prev[section as keyof Customer];
            if (sectionObj && typeof sectionObj === 'object') {
              // Create a copy of the section object
              const updatedSection = { ...sectionObj as object };
              
              if (subSection in updatedSection) {
                const subSectionObj = updatedSection[subSection as keyof typeof updatedSection];
                if (subSectionObj && typeof subSectionObj === 'object') {
                  // Create a copy of the subsection object
                  const updatedSubSection = { ...subSectionObj as object };
                  
                  // Update the property
                  if (property in updatedSubSection) {
                    // Use type assertion to treat updatedSubSection as a record with string keys
                    (updatedSubSection as Record<string, any>)[property] = value;
                    
                    // Update the section with the new subsection
                    // Use type assertion to treat updatedSection as a record with string keys
                    (updatedSection as Record<string, any>)[subSection] = updatedSubSection;
                    
                    // Return the updated state
                    return {
                      ...prev,
                      [section]: updatedSection
                    };
                  }
                }
              }
            }
          }
          return prev;
        }
      }
      
      // Handle top-level fields
      return {
        ...prev,
        [field]: value
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form id="customer-form" onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="company">
        <TabsList className="mb-6">
          <TabsTrigger value="company">Company Details</TabsTrigger>
          <TabsTrigger value="contact">Contact Details</TabsTrigger>
          <TabsTrigger value="bank">Bank Details</TabsTrigger>
        </TabsList>

        <TabsContent value="company">
          <CompanyInfoTab formData={formData} handleChange={handleChange} />
        </TabsContent>

        <TabsContent value="contact">
          <ContactsTab formData={formData} handleChange={handleChange} />
        </TabsContent>

        <TabsContent value="bank">
          <BankInfoTab formData={formData} handleChange={handleChange} />
        </TabsContent>
      </Tabs>

      {!isEditing && (
        <div className="flex justify-end gap-2">
          <Button type="submit">Create Customer</Button>
        </div>
      )}
    </form>
  );
};
