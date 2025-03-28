
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { CustomerForm } from "@/components/customers/CustomerForm";
import { customerData } from "@/data/customerData";
import { Customer } from "@/types/customer";

const CustomerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const foundCustomer = customerData.find(c => c.id === id);
    if (foundCustomer) {
      setCustomer(foundCustomer);
    } else {
      toast.error("Customer not found");
      navigate("/customers");
    }
  }, [id, navigate]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedCustomer: Customer) => {
    setCustomer(updatedCustomer);
    setIsEditing(false);
    toast.success("Customer details updated successfully");
    // In a real app, this would make an API call to update the customer
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (!customer) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">Loading customer details...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">{customer.companyName}</h1>
          <p className="text-gray-600">{customer.businessRegistrationNumber}</p>
        </div>
        <div className="flex gap-2">
          {!isEditing ? (
            <Button onClick={handleEdit}>Edit Customer</Button>
          ) : (
            <Button onClick={handleCancel} variant="outline">Cancel</Button>
          )}
          <Button onClick={() => navigate("/customers")} variant="outline">
            Back to Customers
          </Button>
        </div>
      </div>

      {isEditing ? (
        <CustomerForm initialData={customer} onSubmit={handleSave} isEditing />
      ) : (
        <Tabs defaultValue="company">
          <TabsList className="mb-6">
            <TabsTrigger value="company">Company Details</TabsTrigger>
            <TabsTrigger value="contact">Contact Details</TabsTrigger>
            <TabsTrigger value="bank">Bank Details</TabsTrigger>
          </TabsList>

          <TabsContent value="company">
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
                  <h3 className="font-semibold text-gray-500">Business Registration Number</h3>
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
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-gray-500">Business Activities</h3>
                  <p>{customer.businessActivities}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-500">Member Name</h3>
                  <p>{customer.memberName}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-gray-500">Wholesale Drug Authorization Licence</h3>
                  <p>{customer.wholesaleDrugLicense || "N/A"}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-gray-500">Other Regulatory Licenses</h3>
                  <p>{customer.otherLicenses || "N/A"}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Purchase Department</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p><span className="font-medium">Name:</span> {customer.contactDetails.purchase.name}</p>
                      <p><span className="font-medium">Email:</span> {customer.contactDetails.purchase.email}</p>
                      <p><span className="font-medium">Phone:</span> {customer.contactDetails.purchase.phone}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Finance Department</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p><span className="font-medium">Name:</span> {customer.contactDetails.finance.name}</p>
                      <p><span className="font-medium">Email:</span> {customer.contactDetails.finance.email}</p>
                      <p><span className="font-medium">Phone:</span> {customer.contactDetails.finance.phone}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Quality Department</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p><span className="font-medium">Name:</span> {customer.contactDetails.quality.name}</p>
                      <p><span className="font-medium">Email:</span> {customer.contactDetails.quality.email}</p>
                      <p><span className="font-medium">Phone:</span> {customer.contactDetails.quality.phone}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p><span className="font-medium">Name:</span> {customer.contactDetails.management.name}</p>
                      <p><span className="font-medium">Email:</span> {customer.contactDetails.management.email}</p>
                      <p><span className="font-medium">Phone:</span> {customer.contactDetails.management.phone}</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bank">
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
                  <h3 className="font-semibold text-gray-500">Account Holder Name</h3>
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
                <div>
                  <h3 className="font-semibold text-gray-500">Routing Number</h3>
                  <p>{customer.bankDetails.routingNumber}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
      
      {isEditing && (
        <div className="flex justify-end gap-2 mt-6">
          <Button onClick={handleCancel} variant="outline">Cancel</Button>
          <Button form="customer-form" type="submit">Save Changes</Button>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
