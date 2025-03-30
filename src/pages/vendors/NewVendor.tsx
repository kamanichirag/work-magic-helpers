
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { VendorForm } from "@/components/vendors/VendorForm";
import { Vendor } from "@/types/vendor";
import { Button } from "@/components/ui/button";

const NewVendor = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (data: Vendor) => {
    // In a real app, this would be an API call to create the vendor
    console.log("Creating new vendor:", data);
    toast.success("Vendor created successfully");
    navigate("/vendors");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Create New Vendor</h1>
        <Button 
          variant="outline"
          onClick={() => navigate("/vendors")}
        >
          Cancel
        </Button>
      </div>
      
      <VendorForm onSubmit={handleSubmit} />

      <style jsx global>{`
        .writing-vertical {
          writing-mode: vertical-lr;
          transform: rotate(180deg);
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default NewVendor;
