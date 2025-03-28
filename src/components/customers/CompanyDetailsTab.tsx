
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Customer } from "@/types/customer";

interface CompanyDetailsTabProps {
  customer: Customer;
}

export const CompanyDetailsTab = ({ customer }: CompanyDetailsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Details</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-gray-500">Company Name</h3>
          <p>{customer.companyName}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-500">Business Registration</h3>
          <p>{customer.businessRegistrationNumber}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-500">Type of Business</h3>
          <p>{customer.typeOfBusiness}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-500">Tax ID/VAT</h3>
          <p>{customer.taxId}</p>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-semibold text-gray-500">Bill To Address</h3>
          <p>{customer.billToAddress}</p>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-semibold text-gray-500">Ship To Address</h3>
          <p>{customer.shipToAddress}</p>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-semibold text-gray-500">Subsidiary Information</h3>
          <p>{customer.isSubsidiary ? "Yes" : "No"}</p>
          {customer.isSubsidiary && (
            <p>{customer.parentCompany}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
