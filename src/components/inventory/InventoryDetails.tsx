
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InventoryItem } from "@/types/inventory";
import { inventoryItems } from "@/data/inventoryData";

// Import our new components
import ProductInfoCard from "./details/ProductInfoCard";
import ApprovalCard from "./details/ApprovalCard";
import ActionButtons from "./details/ActionButtons";
import NotFoundCard from "./details/NotFoundCard";
import LoadingState from "./details/LoadingState";

export default function InventoryDetails() {
  const { id } = useParams();
  const [item, setItem] = useState<InventoryItem | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be an API call
    const foundItem = inventoryItems.find(item => item.id === id);
    setItem(foundItem);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <LoadingState />;
  }

  if (!item) {
    return <NotFoundCard />;
  }

  return (
    <div className="space-y-6">
      <ActionButtons 
        itemId={item.id} 
        onDelete={() => {}} 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProductInfoCard item={item} />
        <ApprovalCard item={item} onApprove={() => {}} />
      </div>
    </div>
  );
}
