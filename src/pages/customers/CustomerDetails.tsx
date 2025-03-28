
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { CustomerForm } from "@/components/customers/CustomerForm";
import { customerData } from "@/data/customerData";
import { Customer, PurchaseOrder } from "@/types/customer";
import { PurchaseOrdersList } from "@/components/customers/PurchaseOrdersList";

// Sample purchase order data for demonstration
const samplePurchaseOrders: PurchaseOrder[] = [
  {
    id: "po1",
    date: "2023-09-15",
    poNumber: "PO-2023-001",
    vendor: "Medical Supplies Inc.",
    shipTo: "F-1 INC Warehouse",
    paymentTerms: "Net 30",
    incoterms: "FOB",
    shipDate: "2023-09-20",
    shipVia: "FedEx",
    note: "Expedited shipping requested",
    items: [
      {
        id: "item1",
        item: "MED-001",
        description: "Surgical Masks",
        quantity: 1000,
        unitOfMeasure: "Box",
        rate: 25.00,
        amount: 25000.00
      },
      {
        id: "item2",
        item: "MED-002",
        description: "Disposable Gloves",
        quantity: 500,
        unitOfMeasure: "Box",
        rate: 15.00,
        amount: 7500.00
      }
    ],
    total: 32500.00
  },
  {
    id: "po2",
    date: "2023-10-05",
    poNumber: "PO-2023-002",
    vendor: "Pharmaceutical Solutions",
    shipTo: "F-1 INC Main Office",
    paymentTerms: "Net 45",
    incoterms: "CIF",
    shipDate: "2023-10-15",
    shipVia: "UPS",
    note: "Temperature controlled shipping required",
    items: [
      {
        id: "item3",
        item: "PHARM-001",
        description: "Antibiotic Medication",
        quantity: 200,
        unitOfMeasure: "Bottle",
        rate: 120.00,
        amount: 24000.00
      }
    ],
    total: 24000.00
  }
];

const CustomerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const foundCustomer = customerData.find(c => c.id === id);
    if (foundCustomer) {
      // Add sample purchase orders to the customer data
      setCustomer({
        ...foundCustomer,
        purchaseOrders: samplePurchaseOrders
      });
    } else {
      toast.error("Customer not found");
      navigate("/customers");
    }
  }, [id, navigate]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedCustomer: Customer) => {
    setCustomer({
      ...updatedCustomer,
      purchaseOrders: customer?.purchaseOrders || []
    });
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
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div>
              <Tabs defaultValue="company">
                <TabsList className="mb-6">
                  <TabsTrigger value="company">Company</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                  <TabsTrigger value="bank">Bank</TabsTrigger>
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
                </TabsContent>

                <TabsContent value="contact">
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Purchase</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p><span className="font-medium">Name:</span> {customer.contactDetails.purchase.name}</p>
                            <p><span className="font-medium">Email:</span> {customer.contactDetails.purchase.email}</p>
                            <p><span className="font-medium">Phone:</span> {customer.contactDetails.purchase.phone}</p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Finance</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p><span className="font-medium">Name:</span> {customer.contactDetails.finance.name}</p>
                            <p><span className="font-medium">Email:</span> {customer.contactDetails.finance.email}</p>
                            <p><span className="font-medium">Phone:</span> {customer.contactDetails.finance.phone}</p>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Quality</CardTitle>
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
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <PurchaseOrdersList purchaseOrders={customer.purchaseOrders || []} />
            </div>
          </div>
        </>
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
