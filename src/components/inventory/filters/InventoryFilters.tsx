
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { InventoryFilter } from "@/types/inventory";
import { suppliers, manufacturers, locations } from "@/data/inventoryData";

interface InventoryFiltersProps {
  filter: InventoryFilter;
  setFilter: (filter: InventoryFilter) => void;
}

export function InventoryFilters({ filter, setFilter }: InventoryFiltersProps) {
  return (
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
          
          <Select onValueChange={(value) => setFilter({ ...filter, supplier: value === "all" ? undefined : value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select Supplier" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Suppliers</SelectItem>
              {suppliers.map((supplier) => (
                <SelectItem key={supplier} value={supplier}>{supplier}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select onValueChange={(value) => setFilter({ ...filter, manufacturer: value === "all" ? undefined : value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select Manufacturer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Manufacturers</SelectItem>
              {manufacturers.map((manufacturer) => (
                <SelectItem key={manufacturer} value={manufacturer}>{manufacturer}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select onValueChange={(value) => setFilter({ ...filter, location: value === "all" ? undefined : value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
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
  );
}
