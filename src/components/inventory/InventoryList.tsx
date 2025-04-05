
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Plus, Filter } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { InventoryItem, InventoryFilter } from "@/types/inventory";
import { inventoryItems, suppliers, manufacturers, locations } from "@/data/inventoryData";
import { useNavigate } from "react-router-dom";

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

  const filteredItems = items.filter((item) => {
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

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <Button onClick={() => navigate("/inventory/new")}>
          <Plus className="mr-2 h-4 w-4" /> Add New Item
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Inventory Filters</CardTitle>
          <CardDescription>Filter inventory based on various criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search by product, NDC, or lot #"
                className="pl-8"
                value={filter.search}
                onChange={(e) => setFilter({ ...filter, search: e.target.value })}
              />
            </div>
            
            <Select onValueChange={(value) => setFilter({ ...filter, supplier: value || undefined })}>
              <SelectTrigger>
                <SelectValue placeholder="Select Supplier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Suppliers</SelectItem>
                {suppliers.map((supplier) => (
                  <SelectItem key={supplier} value={supplier}>{supplier}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select onValueChange={(value) => setFilter({ ...filter, manufacturer: value || undefined })}>
              <SelectTrigger>
                <SelectValue placeholder="Select Manufacturer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Manufacturers</SelectItem>
                {manufacturers.map((manufacturer) => (
                  <SelectItem key={manufacturer} value={manufacturer}>{manufacturer}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select onValueChange={(value) => setFilter({ ...filter, location: value || undefined })}>
              <SelectTrigger>
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Locations</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="clinicalTrial"
                checked={filter.clinicalTrial} 
                onCheckedChange={(checked) => 
                  setFilter({ ...filter, clinicalTrial: checked === true ? true : undefined })
                }
              />
              <label htmlFor="clinicalTrial" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Clinical Trial Only
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Inventory Items</CardTitle>
          <CardDescription>
            Showing {filteredItems.length} of {items.length} items
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Name</TableHead>
                  <TableHead>NDC#/MA#</TableHead>
                  <TableHead>Lot#/Batch#</TableHead>
                  <TableHead>Supplier</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Clinical Trial</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <TableRow key={item.id} className="hover:bg-slate-50">
                      <TableCell className="font-medium">{item.productName}</TableCell>
                      <TableCell>{item.ndcNumber}</TableCell>
                      <TableCell>{item.lotNumber}</TableCell>
                      <TableCell>{item.supplierName}</TableCell>
                      <TableCell>{item.storageLocation}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>
                        {item.forClinicalTrial ? (
                          <Badge variant="secondary">Yes</Badge>
                        ) : (
                          <Badge variant="outline">No</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => navigate(`/inventory/${item.id}`)}
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      No results found. Try adjusting your search criteria.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
