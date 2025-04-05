
import { Helmet } from "react-helmet-async";
import InventoryListComponent from "@/components/inventory/InventoryList";

export default function InventoryListPage() {
  return (
    <>
      <Helmet>
        <title>Inventory Management | F-1 INC CRM</title>
      </Helmet>
      <div className="container py-6">
        <InventoryListComponent />
      </div>
    </>
  );
}
