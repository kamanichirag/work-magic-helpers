
import { ContactForm } from "./ContactForm";
import { Customer } from "@/types/customer";

interface ContactsTabProps {
  formData: Customer;
  handleChange: (field: string, value: any) => void;
}

export const ContactsTab = ({ formData, handleChange }: ContactsTabProps) => {
  return (
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
  );
};
