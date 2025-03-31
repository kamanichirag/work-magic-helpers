
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Vendor } from "@/types/vendor";

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
      }
    }
  );

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form id="vendor-form" onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardContent className="grid gap-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="vendorName">Name of Vendor</Label>
              <Input 
                id="vendorName" 
                required
                value={formData.vendorName} 
                onChange={(e) => handleChange("vendorName", e.target.value)} 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="companyOrganization">Company/Organization</Label>
              <Input 
                id="companyOrganization" 
                value={formData.companyOrganization} 
                onChange={(e) => handleChange("companyOrganization", e.target.value)} 
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Textarea 
              id="address" 
              rows={3}
              value={formData.address} 
              onChange={(e) => handleChange("address", e.target.value)} 
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="servicesOffered">Services Offered / To Be Rendered</Label>
            <Textarea 
              id="servicesOffered" 
              rows={3}
              value={formData.servicesOffered} 
              onChange={(e) => handleChange("servicesOffered", e.target.value)} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="contactPerson">Contact Person</Label>
              <Input 
                id="contactPerson" 
                value={formData.contactPerson} 
                onChange={(e) => handleChange("contactPerson", e.target.value)} 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contactNumber">Contact No.</Label>
              <Input 
                id="contactNumber" 
                value={formData.contactNumber} 
                onChange={(e) => handleChange("contactNumber", e.target.value)} 
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="emailId">Email ID</Label>
            <Input 
              id="emailId" 
              type="email"
              value={formData.emailId} 
              onChange={(e) => handleChange("emailId", e.target.value)} 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="qaExecutiveName">Quality Assurance Executive Contact Person</Label>
              <Input 
                id="qaExecutiveName" 
                value={formData.qaExecutiveName} 
                onChange={(e) => handleChange("qaExecutiveName", e.target.value)} 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="qaExecutiveContact">Quality Assurance Executive Contact Details</Label>
              <Input 
                id="qaExecutiveContact" 
                value={formData.qaExecutiveContact} 
                onChange={(e) => handleChange("qaExecutiveContact", e.target.value)} 
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {!isEditing && (
        <div className="flex justify-end gap-2">
          <Button type="submit">Create Vendor</Button>
        </div>
      )}
    </form>
  );
};
