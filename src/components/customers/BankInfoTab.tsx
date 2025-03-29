
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Customer } from "@/types/customer";

interface BankInfoTabProps {
  formData: Customer;
  handleChange: (field: string, value: any) => void;
}

export const BankInfoTab = ({ formData, handleChange }: BankInfoTabProps) => {
  return (
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
  );
};
