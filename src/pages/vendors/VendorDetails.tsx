
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft } from "lucide-react";
import { Vendor } from "@/types/vendor";
import { toast } from "sonner";

// In a real app, this would come from an API
import { initialVendors } from "./VendorsList";

// Mock order history data
const mockOrders = [
  {
    id: "ORD-001",
    date: "2023-05-15",
    items: "Office Supplies Bundle",
    amount: "$1,250.00",
    status: "Completed"
  },
  {
    id: "ORD-002",
    date: "2023-06-22",
    items: "Furniture Set",
    amount: "$3,750.00",
    status: "Completed"
  },
  {
    id: "ORD-003",
    date: "2023-08-10",
    items: "Computer Equipment",
    amount: "$5,200.00",
    status: "In Progress"
  },
  {
    id: "ORD-004",
    date: "2023-09-30",
    items: "Office Renovation Materials",
    amount: "$12,800.00",
    status: "Pending"
  }
];

const VendorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [orders, setOrders] = useState(mockOrders);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundVendor = initialVendors.find(v => v.id === id);
    if (foundVendor) {
      setVendor(foundVendor);
    } else {
      toast.error("Vendor not found");
      navigate("/vendors");
    }
  }, [id, navigate]);

  if (!vendor) {
    return <div className="container mx-auto py-8 px-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-6">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => navigate("/vendors")}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold">{vendor.vendorName}</h1>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Vendor Details Section */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Vendor Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Company/Organization</p>
                <p className="font-medium">{vendor.companyOrganization || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-medium">{vendor.address || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Services Offered</p>
                <p className="font-medium">{vendor.servicesOffered || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Contact Person</p>
                <p className="font-medium">{vendor.contactPerson || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Contact Number</p>
                <p className="font-medium">{vendor.contactNumber || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email ID</p>
                <p className="font-medium">{vendor.emailId || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">QA Executive Contact Person</p>
                <p className="font-medium">{vendor.qaExecutiveName || "N/A"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">QA Executive Contact Details</p>
                <p className="font-medium">{vendor.qaExecutiveContact || "N/A"}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Section - Only show if assessment data exists */}
        {vendor.assessment && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Assessment Information</h2>
              {/* Here we would display assessment data - simplified for now */}
              <p>Assessment information is available for this vendor.</p>
            </CardContent>
          </Card>
        )}

        {/* Order History Section */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Order History</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-6">
                      No orders found for this vendor.
                    </TableCell>
                  </TableRow>
                ) : (
                  orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell>{order.amount}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VendorDetails;
