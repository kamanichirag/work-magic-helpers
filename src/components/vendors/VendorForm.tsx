
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Vendor } from "@/types/vendor";
import { CompanyInfoTab } from "./CompanyInfoTab";
import { ContactsTab } from "./ContactsTab";
import { BankInfoTab } from "./BankInfoTab";
import { VendorAssessmentTab } from "./VendorAssessmentTab";

interface VendorFormProps {
  initialData?: Vendor;
  onSubmit: (data: Vendor) => void;
  isEditing?: boolean;
}

export const VendorForm = ({ initialData, onSubmit, isEditing = false }: VendorFormProps) => {
  const [formData, setFormData] = useState<Vendor>(
    initialData || {
      id: crypto.randomUUID(),
      vendorName: "",
      companyOrganization: "",
      address: "",
      servicesOffered: "",
      contactPerson: "",
      contactNumber: "",
      emailId: "",
      qaExecutiveName: "",
      qaExecutiveContact: "",
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
      },
      assessment: {
        department: {
          businessStructure: { response: "", remarks: "" },
          organizationalChart: { response: "", remarks: "" },
          trainingRecords: { response: "", remarks: "" },
          personnelCurricula: { response: "", remarks: "" },
          trainingProgram: { response: "", remarks: "" },
          externalContractors: { response: "", remarks: "" },
          qualityManagement: { response: "", remarks: "" },
          facilityApproved: { response: "", remarks: "" },
          certifications: { response: "", remarks: "" },
        },
        facility: {
          security: { response: "", remarks: "" },
          separateAreas: { response: "", remarks: "" },
          computerApplications: { response: "", remarks: "" },
          temperatureMonitored: { response: "", remarks: "" },
          fireAlarm: { response: "", remarks: "" },
          pestControl: { response: "", remarks: "" },
          cleaningProcedure: { response: "", remarks: "" },
        },
        labeling: {
          overLabelling: { response: "", remarks: "" },
          inHousePrinting: { response: "", remarks: "" },
        },
        comparatorSourcing: {
          sourceProducts: { response: "", remarks: "" },
          providePedigree: { response: "", remarks: "" },
          provideCoA: { response: "", remarks: "" },
        },
        recordsAndReports: {
          documentationControl: { response: "", remarks: "" },
          archivalProcedures: { response: "", remarks: "" },
        }
      }
    }
  );

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => {
      // Handle nested fields
      if (field.includes(".")) {
        const parts = field.split(".");
        
        if (parts.length === 3) {
          const [section, subSection, property] = parts;
          
          return {
            ...prev,
            [section]: {
              ...prev[section as keyof Vendor] as object,
              [subSection]: {
                ...(prev[section as keyof Vendor] as any)[subSection],
                [property]: value
              }
            }
          };
        } else if (parts.length === 4) {
          const [section, category, field, property] = parts;
          
          return {
            ...prev,
            [section]: {
              ...prev[section as keyof Vendor] as object,
              [category]: {
                ...(prev[section as keyof Vendor] as any)[category],
                [field]: {
                  ...(prev[section as keyof Vendor] as any)[category][field],
                  [property]: value
                }
              }
            }
          };
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
    <form id="vendor-form" onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="company">
        <TabsList className="mb-6">
          <TabsTrigger value="company">Company Details</TabsTrigger>
          <TabsTrigger value="contact">Contact Details</TabsTrigger>
          <TabsTrigger value="bank">Bank Details</TabsTrigger>
          <TabsTrigger value="assessment">Assessment</TabsTrigger>
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

        <TabsContent value="assessment">
          <VendorAssessmentTab formData={formData} handleChange={handleChange} />
        </TabsContent>
      </Tabs>

      {!isEditing && (
        <div className="flex justify-end gap-2">
          <Button type="submit">Create Vendor</Button>
        </div>
      )}
    </form>
  );
};
