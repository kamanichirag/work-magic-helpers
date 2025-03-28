
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Customer } from "@/types/customer";
import { Checkbox } from "@/components/ui/checkbox";

interface ContactFormProps {
  label: string;
  nameId: string;
  emailId: string;
  phoneId: string;
  data: {
    name: string;
    email: string;
    phone: string;
  };
  onChange: (field: string, value: string) => void;
}

const ContactForm = ({ label, nameId, emailId, phoneId, data, onChange }: ContactFormProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-lg">{label}</CardTitle>
    </CardHeader>
    <CardContent className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor={nameId}>Name</Label>
        <Input 
          id={nameId} 
          value={data.name || ""} 
          onChange={(e) => onChange(nameId, e.target.value)} 
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor={emailId}>Email</Label>
        <Input 
          id={emailId} 
          type="email" 
          value={data.email || ""} 
          onChange={(e) => onChange(emailId, e.target.value)} 
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor={phoneId}>Phone</Label>
        <Input 
          id={phoneId} 
          value={data.phone || ""} 
          onChange={(e) => onChange(phoneId, e.target.value)} 
        />
      </div>
    </CardContent>
  </Card>
);

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
        return {
          ...prev,
          [section]: {
            ...prev[section as keyof Customer],
            [subSection]: {
              ...prev[section as keyof Customer][subSection],
              [property]: value
            }
          }
        };
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
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input 
                    id="companyName" 
                    required
                    value={formData.companyName} 
                    onChange={(e) => handleChange("companyName", e.target.value)} 
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="businessRegistrationNumber">Business Registration Number</Label>
                  <Input 
                    id="businessRegistrationNumber" 
                    value={formData.businessRegistrationNumber} 
                    onChange={(e) => handleChange("businessRegistrationNumber", e.target.value)} 
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="billToAddress">Bill To Address</Label>
                <Textarea 
                  id="billToAddress" 
                  rows={3}
                  value={formData.billToAddress} 
                  onChange={(e) => handleChange("billToAddress", e.target.value)} 
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="shipToAddress">Ship To Address</Label>
                <Textarea 
                  id="shipToAddress" 
                  rows={3}
                  value={formData.shipToAddress} 
                  onChange={(e) => handleChange("shipToAddress", e.target.value)} 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="typeOfBusiness">Type of Business</Label>
                  <Input 
                    id="typeOfBusiness" 
                    value={formData.typeOfBusiness} 
                    onChange={(e) => handleChange("typeOfBusiness", e.target.value)} 
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="taxId">Tax ID/VAT #/Others</Label>
                  <Input 
                    id="taxId" 
                    value={formData.taxId} 
                    onChange={(e) => handleChange("taxId", e.target.value)} 
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="isSubsidiary" 
                  checked={formData.isSubsidiary}
                  onCheckedChange={(checked) => handleChange("isSubsidiary", checked)}
                />
                <Label htmlFor="isSubsidiary">Is this business a subsidiary or operated company of another entity?</Label>
              </div>

              {formData.isSubsidiary && (
                <div className="grid gap-2">
                  <Label htmlFor="parentCompany">Parent Company</Label>
                  <Input 
                    id="parentCompany" 
                    value={formData.parentCompany} 
                    onChange={(e) => handleChange("parentCompany", e.target.value)} 
                  />
                </div>
              )}

              <div className="grid gap-2">
                <Label htmlFor="businessActivities">Business Activities</Label>
                <Textarea 
                  id="businessActivities" 
                  rows={3}
                  value={formData.businessActivities} 
                  onChange={(e) => handleChange("businessActivities", e.target.value)} 
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="memberName">Member Name</Label>
                <Input 
                  id="memberName" 
                  value={formData.memberName} 
                  onChange={(e) => handleChange("memberName", e.target.value)} 
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="wholesaleDrugLicense">Wholesale Drug Authorization License Details</Label>
                <Input 
                  id="wholesaleDrugLicense" 
                  value={formData.wholesaleDrugLicense} 
                  onChange={(e) => handleChange("wholesaleDrugLicense", e.target.value)} 
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="otherLicenses">Other Applicable Regulatory Licenses</Label>
                <Input 
                  id="otherLicenses" 
                  value={formData.otherLicenses} 
                  onChange={(e) => handleChange("otherLicenses", e.target.value)} 
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactForm 
              label="Purchase Department"
              nameId="contactDetails.purchase.name"
              emailId="contactDetails.purchase.email"
              phoneId="contactDetails.purchase.phone"
              data={formData.contactDetails.purchase}
              onChange={handleChange}
            />
            
            <ContactForm 
              label="Finance Department"
              nameId="contactDetails.finance.name"
              emailId="contactDetails.finance.email"
              phoneId="contactDetails.finance.phone"
              data={formData.contactDetails.finance}
              onChange={handleChange}
            />
            
            <ContactForm 
              label="Quality Department"
              nameId="contactDetails.quality.name"
              emailId="contactDetails.quality.email"
              phoneId="contactDetails.quality.phone"
              data={formData.contactDetails.quality}
              onChange={handleChange}
            />
            
            <ContactForm 
              label="Management"
              nameId="contactDetails.management.name"
              emailId="contactDetails.management.email"
              phoneId="contactDetails.management.phone"
              data={formData.contactDetails.management}
              onChange={handleChange}
            />
          </div>
        </TabsContent>

        <TabsContent value="bank">
          <Card>
            <CardHeader>
              <CardTitle>Bank Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="bankDetails.bankName">Bank Name</Label>
                  <Input 
                    id="bankDetails.bankName" 
                    value={formData.bankDetails.bankName} 
                    onChange={(e) => handleChange("bankDetails.bankName", e.target.value)} 
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="bankDetails.contactNumber">Contact Number</Label>
                  <Input 
                    id="bankDetails.contactNumber" 
                    value={formData.bankDetails.contactNumber} 
                    onChange={(e) => handleChange("bankDetails.contactNumber", e.target.value)} 
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="bankDetails.address">Bank Address</Label>
                <Textarea 
                  id="bankDetails.address" 
                  rows={3}
                  value={formData.bankDetails.address} 
                  onChange={(e) => handleChange("bankDetails.address", e.target.value)} 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="bankDetails.accountHolderName">Account Holder Name</Label>
                  <Input 
                    id="bankDetails.accountHolderName" 
                    value={formData.bankDetails.accountHolderName} 
                    onChange={(e) => handleChange("bankDetails.accountHolderName", e.target.value)} 
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="bankDetails.accountNumber">Account Number</Label>
                  <Input 
                    id="bankDetails.accountNumber" 
                    value={formData.bankDetails.accountNumber} 
                    onChange={(e) => handleChange("bankDetails.accountNumber", e.target.value)} 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="bankDetails.swiftCode">Swift Code</Label>
                  <Input 
                    id="bankDetails.swiftCode" 
                    value={formData.bankDetails.swiftCode} 
                    onChange={(e) => handleChange("bankDetails.swiftCode", e.target.value)} 
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="bankDetails.iban">IBAN</Label>
                  <Input 
                    id="bankDetails.iban" 
                    value={formData.bankDetails.iban} 
                    onChange={(e) => handleChange("bankDetails.iban", e.target.value)} 
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="bankDetails.routingNumber">Routing Number</Label>
                  <Input 
                    id="bankDetails.routingNumber" 
                    value={formData.bankDetails.routingNumber} 
                    onChange={(e) => handleChange("bankDetails.routingNumber", e.target.value)} 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
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
