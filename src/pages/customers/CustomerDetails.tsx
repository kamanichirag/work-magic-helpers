import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CustomerForm } from "@/components/customers/CustomerForm";
import { customerData } from "@/data/customerData";
import { Customer, PurchaseOrder } from "@/types/customer";
import { PurchaseOrdersList } from "@/components/customers/PurchaseOrdersList";
import { CustomerDetailsTabs } from "@/components/customers/CustomerDetailsTabs";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2, Plus, Import } from "lucide-react";

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
    status: "active",
    paymentStatus: "pending",
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
    status: "closed",
    paymentStatus: "paid",
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
    const foundCustomer = customerData.find(c => c.id === id);
    if (foundCustomer) {
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
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    toast.success("Customer deleted successfully");
    navigate("/customers");
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
        <div className="flex space-x-2">
          <Button size="sm" className="flex items-center">
            <Import className="mr-1" size={16} />
            Import PO
          </Button>
          <Button size="sm" className="flex items-center">
            <Plus className="mr-1" size={16} />
            Create PO
          </Button>
          {!isEditing ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2 className="mr-1" size={16} />
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Customer</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete this customer? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
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
          <div className="grid grid-cols-1 gap-6 mb-8">
            <CustomerDetailsTabs 
              customer={customer} 
              paymentStatus="pending" 
              onEdit={handleEdit}
            />
            <PurchaseOrdersList purchaseOrders={customer.purchaseOrders || []} />
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
