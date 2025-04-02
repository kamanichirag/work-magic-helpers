
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { Vendor } from "@/types/vendor";
import { VendorSearch } from "@/components/vendors/VendorSearch";
import { VendorsTable } from "@/components/vendors/VendorsTable";
import { initialVendors, filterVendors } from "@/utils/vendorUtils";

const VendorsList = () => {
  const [vendors, setVendors] = useState<Vendor[]>(initialVendors);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  const handleDelete = (id: string) => {
    setVendors(vendors.filter(vendor => vendor.id !== id));
    toast.success("Vendor deleted successfully");
  };

  const filteredVendors = filterVendors(vendors, searchTerm);
  
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
      
      <VendorSearch 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        resultsCount={filteredVendors.length}
      />
      
      <VendorsTable 
        vendors={filteredVendors} 
        onDelete={handleDelete}
      />
    </div>
  );
};

export default VendorsList;
