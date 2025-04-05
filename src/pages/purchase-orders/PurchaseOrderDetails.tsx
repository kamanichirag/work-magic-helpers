
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { PurchaseOrderDetailsView } from "@/components/purchase-orders/PurchaseOrderDetailsView";

export default function PurchaseOrderDetailsPage() {
  const { id } = useParams();
  
  return (
    <>
      <Helmet>
        <title>Purchase Order Details | F-1 INC CRM</title>
      </Helmet>
      <div className="container py-4">
        <PurchaseOrderDetailsView orderId={id} />
      </div>
    </>
  );
}
