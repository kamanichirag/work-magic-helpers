
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import InventoryDetailsComponent from "@/components/inventory/InventoryDetails";

export default function InventoryDetailsPage() {
  const { id } = useParams();
  
  return (
    <>
      <Helmet>
        <title>Inventory Details | F-1 INC CRM</title>
      </Helmet>
      <div className="container py-6">
        <InventoryDetailsComponent />
      </div>
    </>
  );
}
