
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

// Mock vendor data for initial display
const mockVendors = [
  { id: "1", name: "ABC Suppliers", contact: "John Doe", email: "john@abcsuppliers.com", phone: "555-1234" },
  { id: "2", name: "XYZ Corporation", contact: "Jane Smith", email: "jane@xyzcorp.com", phone: "555-5678" },
  { id: "3", name: "Global Logistics", contact: "Mike Johnson", email: "mike@globallogistics.com", phone: "555-9012" },
];

const VendorsList = () => {
  const navigate = useNavigate();
  const [vendors, setVendors] = useState(mockVendors);

  const handleDelete = (id: string) => {
    setVendors(vendors.filter(vendor => vendor.id !== id));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Vendors</h1>
        <div className="flex gap-2">
          <Button 
            onClick={() => navigate("/vendors/new")} 
            className="gap-2"
          >
            <Plus size={18} />
            Create New Vendor
          </Button>
        </div>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Vendors Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vendor Name</TableHead>
                <TableHead>Contact Person</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vendors.length > 0 ? (
                vendors.map((vendor) => (
                  <TableRow key={vendor.id}>
                    <TableCell className="font-medium">{vendor.name}</TableCell>
                    <TableCell>{vendor.contact}</TableCell>
                    <TableCell>{vendor.email}</TableCell>
                    <TableCell>{vendor.phone}</TableCell>
                    <TableCell className="text-right">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="sm">
                            <Trash2 size={16} />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete the vendor
                              and all associated data.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction 
                              onClick={() => handleDelete(vendor.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6">
                    No vendors found. Create your first vendor to get started.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorsList;
