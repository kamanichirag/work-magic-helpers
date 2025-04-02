
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Vendor } from "@/types/vendor";
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
import { Plus, Trash2, Eye, Search, Mail, Filter } from "lucide-react";
import { toast } from "sonner";

// Mock data - in a real app this would come from an API
export const initialVendors: Vendor[] = [
  {
    id: "1",
    vendorName: "ABC Supplies Co.",
    companyOrganization: "ABC Corporation",
    address: "123 Vendor Street, Suppliersville, VS 12345",
    servicesOffered: "Office supplies, furniture, and equipment",
    contactPerson: "John Smith",
    contactNumber: "555-123-4567",
    emailId: "john.smith@abcsupplies.com",
    qaExecutiveName: "Sarah Johnson",
    qaExecutiveContact: "555-987-6543",
    contactDetails: {
      purchase: { name: "Mike Purchase", email: "mike@abcsupplies.com", phone: "555-111-2222" },
      finance: { name: "Linda Finance", email: "linda@abcsupplies.com", phone: "555-333-4444" },
      quality: { name: "Sarah Quality", email: "sarah@abcsupplies.com", phone: "555-555-6666" },
      management: { name: "Bob Management", email: "bob@abcsupplies.com", phone: "555-777-8888" }
    },
    bankDetails: {
      bankName: "First National Bank",
      address: "456 Banking Ave, Finance City, FC 56789",
      contactNumber: "555-321-7890",
      accountHolderName: "ABC Supplies Co.",
      accountNumber: "1234567890",
      swiftCode: "FNBAUS12",
      iban: "US12345678901234567890",
      routingNumber: "098765432"
    }
  },
  {
    id: "2",
    vendorName: "XYZ Manufacturing",
    companyOrganization: "XYZ Industries Ltd",
    address: "789 Factory Lane, Industrial Park, IP 67890",
    servicesOffered: "Manufacturing, assembly, and prototyping",
    contactPerson: "Jane Doe",
    contactNumber: "555-987-1234",
    emailId: "jane.doe@xyzmanufacturing.com",
    qaExecutiveName: "Tom Jackson",
    qaExecutiveContact: "555-456-7890",
    contactDetails: {
      purchase: { name: "Alice Purchase", email: "alice@xyzmanufacturing.com", phone: "555-222-3333" },
      finance: { name: "Gary Finance", email: "gary@xyzmanufacturing.com", phone: "555-444-5555" },
      quality: { name: "Tom Quality", email: "tom@xyzmanufacturing.com", phone: "555-666-7777" },
      management: { name: "Mary Management", email: "mary@xyzmanufacturing.com", phone: "555-888-9999" }
    },
    bankDetails: {
      bankName: "Global Banking Corp",
      address: "321 Money Street, Bankville, BV 34567",
      contactNumber: "555-654-3210",
      accountHolderName: "XYZ Manufacturing",
      accountNumber: "0987654321",
      swiftCode: "GBCINT34",
      iban: "INT87654321098765432109",
      routingNumber: "123456789"
    }
  }
];

const VendorsList = () => {
  const [vendors, setVendors] = useState<Vendor[]>(initialVendors);
  const [vendorToDelete, setVendorToDelete] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  const handleDelete = (id: string) => {
    setVendors(vendors.filter(vendor => vendor.id !== id));
    toast.success("Vendor deleted successfully");
    setVendorToDelete(null);
  };
  
  const handleEmail = (email: string) => {
    window.open(`mailto:${email}`);
    toast.success("Email client opened");
  };

  const filteredVendors = searchTerm 
    ? vendors.filter(vendor => 
        vendor.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.emailId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.companyOrganization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.servicesOffered.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : vendors;

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      toast.info("Please enter a search term");
      return;
    }
    toast.success(`Searching for: ${searchTerm}`);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    toast.info("Search cleared");
  };
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Vendors</h1>
        <Button 
          onClick={() => navigate("/vendors/new")}
        >
          <Plus className="mr-2 h-4 w-4" /> Create New Vendor
        </Button>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Search Vendors</h2>
        <div className="flex gap-2 flex-col sm:flex-row">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search by name, email, contact person, company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          <div className="flex gap-2">
            <Button onClick={handleSearch} className="w-full sm:w-auto">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
            {searchTerm && (
              <Button 
                variant="outline" 
                onClick={handleClearSearch}
                className="w-full sm:w-auto"
              >
                Clear
              </Button>
            )}
          </div>
        </div>
        {searchTerm && (
          <div className="mt-2 text-sm text-muted-foreground">
            Found {filteredVendors.length} {filteredVendors.length === 1 ? 'vendor' : 'vendors'} matching "{searchTerm}"
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vendor Name</TableHead>
              <TableHead>Contact Person</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="w-[150px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVendors.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6">
                  {searchTerm ? "No vendors found matching your search." : "No vendors found. Click on \"Create New Vendor\" to add one."}
                </TableCell>
              </TableRow>
            ) : (
              filteredVendors.map((vendor) => (
                <TableRow key={vendor.id}>
                  <TableCell className="font-medium">{vendor.vendorName}</TableCell>
                  <TableCell>{vendor.contactPerson}</TableCell>
                  <TableCell>{vendor.emailId}</TableCell>
                  <TableCell>{vendor.contactNumber}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => navigate(`/vendors/${vendor.id}`)}
                        title="View Details"
                      >
                        <Eye className="h-4 w-4 text-blue-500" />
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleEmail(vendor.emailId)}
                        title="Send Email"
                      >
                        <Mail className="h-4 w-4 text-green-500" />
                      </Button>
                      
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => setVendorToDelete(vendor.id)}
                            title="Delete Vendor"
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
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
                              className="bg-red-500 hover:bg-red-600"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default VendorsList;
