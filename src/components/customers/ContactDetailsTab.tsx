
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Customer } from "@/types/customer";

interface ContactCardProps {
  title: string;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
}

const ContactCard = ({ title, contact }: ContactCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p><span className="font-medium">Name:</span> {contact.name}</p>
      <p><span className="font-medium">Email:</span> {contact.email}</p>
      <p><span className="font-medium">Phone:</span> {contact.phone}</p>
    </CardContent>
  </Card>
);

interface ContactDetailsTabProps {
  customer: Customer;
}

export const ContactDetailsTab = ({ customer }: ContactDetailsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContactCard title="Purchase" contact={customer.contactDetails.purchase} />
          <ContactCard title="Finance" contact={customer.contactDetails.finance} />
          <ContactCard title="Quality" contact={customer.contactDetails.quality} />
          <ContactCard title="Management" contact={customer.contactDetails.management} />
        </div>
      </CardContent>
    </Card>
  );
};
