
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Customer } from "@/types/customer";
import { CompanyDetailsTab } from "./CompanyDetailsTab";
import { ContactDetailsTab } from "./ContactDetailsTab";
import { BankDetailsTab } from "./BankDetailsTab";

interface CustomerDetailsTabsProps {
  customer: Customer;
}

export const CustomerDetailsTabs = ({ customer }: CustomerDetailsTabsProps) => {
  return (
    <Tabs defaultValue="company">
      <TabsList className="mb-6">
        <TabsTrigger value="company">Company</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
        <TabsTrigger value="bank">Bank</TabsTrigger>
      </TabsList>

      <TabsContent value="company">
        <CompanyDetailsTab customer={customer} />
      </TabsContent>

      <TabsContent value="contact">
        <ContactDetailsTab customer={customer} />
      </TabsContent>

      <TabsContent value="bank">
        <BankDetailsTab customer={customer} />
      </TabsContent>
    </Tabs>
  );
};
