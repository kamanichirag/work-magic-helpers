
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

export const ContactForm = ({ label, nameId, emailId, phoneId, data, onChange }: ContactFormProps) => (
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
