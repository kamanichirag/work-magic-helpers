
import { InventoryItem, InventoryFilter } from "@/types/inventory";

export function filterInventoryItems(items: InventoryItem[], filter: InventoryFilter): InventoryItem[] {
  return items.filter((item) => {
    const matchesSearch = !filter.search || 
      item.productName.toLowerCase().includes(filter.search.toLowerCase()) ||
      item.ndcNumber.toLowerCase().includes(filter.search.toLowerCase()) ||
      item.lotNumber.toLowerCase().includes(filter.search.toLowerCase());
      
    const matchesSupplier = !filter.supplier || item.supplierName === filter.supplier;
    const matchesManufacturer = !filter.manufacturer || item.manufacturer === filter.manufacturer;
    const matchesLocation = !filter.location || item.storageLocation.includes(filter.location);
    const matchesClinicalTrial = filter.clinicalTrial === undefined || item.forClinicalTrial === filter.clinicalTrial;
    
    return matchesSearch && matchesSupplier && matchesManufacturer && matchesLocation && matchesClinicalTrial;
  });
}
