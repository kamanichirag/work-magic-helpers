
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Customer } from "@/types/customer";
import { CompanyDetailsTab } from "./CompanyDetailsTab";
import { ContactDetailsTab } from "./ContactDetailsTab";
import { BankDetailsTab } from "./BankDetailsTab";
import { Badge } from "@/components/ui/badge";
import { Circle, CircleDot } from "lucide-react";

interface CustomerDetailsTabsProps {
  customer: Customer;
  paymentStatus?: "paid" | "pending" | "overdue";
}

export const CustomerDetailsTabs = ({ customer, paymentStatus = "pending" }: CustomerDetailsTabsProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Customer Information</h2>
        <Badge 
          variant={paymentStatus === "paid" ? "default" : paymentStatus === "overdue" ? "destructive" : "secondary"}
          className="px-2 py-1"
        >
          {paymentStatus === "paid" ? "Paid" : paymentStatus === "overdue" ? "Overdue" : "Payment Pending"}
        </Badge>
      </div>
      
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
    </div>
  );
};
