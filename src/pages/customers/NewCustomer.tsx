
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { CustomerForm } from "@/components/customers/CustomerForm";
import { Customer } from "@/types/customer";

const NewCustomer = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (data: Customer) => {
    // In a real app, this would be an API call to create the customer
    console.log("Creating new customer:", data);
    toast.success("Customer created successfully");
    navigate("/customers");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Create New Customer</h1>
        <button 
          onClick={() => navigate("/customers")}
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        >
          Cancel
        </button>
      </div>
      
      <CustomerForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewCustomer;
