
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Customer } from "@/types/customer";

interface BankDetailsTabProps {
  customer: Customer;
}

export const BankDetailsTab = ({ customer }: BankDetailsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bank Details</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-gray-500">Bank Name</h3>
          <p>{customer.bankDetails.bankName}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-500">Account Holder</h3>
          <p>{customer.bankDetails.accountHolderName}</p>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-semibold text-gray-500">Bank Address</h3>
          <p>{customer.bankDetails.address}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-500">Contact Number</h3>
          <p>{customer.bankDetails.contactNumber}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-500">Account Number</h3>
          <p>{customer.bankDetails.accountNumber}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-500">Swift Code</h3>
          <p>{customer.bankDetails.swiftCode}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-500">IBAN</h3>
          <p>{customer.bankDetails.iban}</p>
        </div>
      </CardContent>
    </Card>
  );
};
