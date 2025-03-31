
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { VendorForm } from "@/components/vendors/VendorForm";
import { VendorAssessmentTab } from "@/components/vendors/VendorAssessmentTab";
import { Vendor } from "@/types/vendor";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NewVendor = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("basic");
  const [formData, setFormData] = useState<Vendor>({
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
    }
  });
  
  const handleChange = (field: string, value: any) => {
    setFormData((prev) => {
      // Handle nested fields using a reducer approach
      const keys = field.split('.');
      if (keys.length === 1) {
        // Simple top-level field
        return { ...prev, [field]: value };
      } else {
        // Nested field
        // Create a copy of the state
        const newState = { ...prev };
        // Navigate to the right place in the object
        let current: any = newState;
        for (let i = 0; i < keys.length - 1; i++) {
          if (!current[keys[i]]) {
            current[keys[i]] = {};
          }
          current = current[keys[i]];
        }
        // Set the value
        current[keys[keys.length - 1]] = value;
        return newState;
      }
    });
  };

  const handleSubmit = () => {
    // In a real app, this would be an API call to create the vendor
    console.log("Creating new vendor:", formData);
    toast.success("Vendor created successfully");
    navigate("/vendors");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Create New Vendor</h1>
        <Button 
          variant="outline"
          onClick={() => navigate("/vendors")}
        >
          Cancel
        </Button>
      </div>
      
      <Card className="mb-6">
        <Tabs 
          defaultValue="basic" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="basic">Basic Information</TabsTrigger>
            <TabsTrigger value="assessment">Assessment</TabsTrigger>
          </TabsList>
          <TabsContent value="basic" className="p-6">
            <VendorForm 
              initialData={formData} 
              onSubmit={() => setActiveTab("assessment")} 
              isEditing={true}
              handleChange={handleChange}
            />
            <div className="flex justify-end mt-6">
              <Button onClick={() => setActiveTab("assessment")}>
                Next: Assessment
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="assessment" className="p-6">
            <VendorAssessmentTab 
              formData={formData}
              handleChange={handleChange}
            />
            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={() => setActiveTab("basic")}>
                Back
              </Button>
              <Button onClick={handleSubmit}>
                Create Vendor
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default NewVendor;
