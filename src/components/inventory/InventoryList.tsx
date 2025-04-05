
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { InventoryItem, InventoryFilter } from "@/types/inventory";
import { inventoryItems } from "@/data/inventoryData";
import { useNavigate } from "react-router-dom";
import { InventoryFilters } from "./filters/InventoryFilters";
import { InventoryTable } from "./tables/InventoryTable";
import { filterInventoryItems } from "./utils/filterInventory";

export default function InventoryList() {
  const navigate = useNavigate();
  const [items] = useState<InventoryItem[]>(inventoryItems);
  const [filter, setFilter] = useState<InventoryFilter>({
    search: "",
    supplier: undefined,
    manufacturer: undefined,
    location: undefined,
    clinicalTrial: undefined
  });

  const filteredItems = filterInventoryItems(items, filter);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <Button onClick={() => navigate("/inventory/new")}>
          <Plus className="mr-2 h-4 w-4" /> Add New Item
        </Button>
      </div>

      <InventoryFilters 
        filter={filter}
        setFilter={setFilter}
      />

      <InventoryTable 
        items={items}
        filteredItems={filteredItems}
      />
    </div>
  );
}
