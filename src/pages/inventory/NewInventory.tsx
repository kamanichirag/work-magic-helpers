
import { Helmet } from "react-helmet";
import NewInventoryForm from "@/components/inventory/NewInventoryForm";

export default function NewInventoryPage() {
  return (
    <>
      <Helmet>
        <title>Add Inventory Item | F-1 INC CRM</title>
      </Helmet>
      <div className="container py-6">
        <NewInventoryForm />
      </div>
    </>
  );
}
