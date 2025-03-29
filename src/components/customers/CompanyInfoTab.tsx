
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Customer } from "@/types/customer";

interface CompanyInfoTabProps {
  formData: Customer;
  handleChange: (field: string, value: any) => void;
}

export const CompanyInfoTab = ({ formData, handleChange }: CompanyInfoTabProps) => {
  return (
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
  );
};
