
import React, { useState } from "react";
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetFooter
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PackageOpen, Package, Info } from "lucide-react";

// Define the type for location data
type BinStatus = {
  id: string;
  isFull: boolean;
  contents?: string;
};

type LocationData = {
  racks: {
    id: string;
    name: string;
    shelves: {
      id: string;
      name: string;
      bins: BinStatus[];
    }[];
  }[];
};

// This would come from your backend in a real application
const MOCK_LOCATION_DATA: LocationData = {
  racks: Array.from({ length: 3 }, (_, rackIndex) => ({
    id: `rack-${rackIndex + 1}`,
    name: `Rack ${rackIndex + 1}`,
    shelves: Array.from({ length: 10 }, (_, shelfIndex) => ({
      id: `shelf-${rackIndex + 1}-${shelfIndex + 1}`,
      name: `Shelf ${shelfIndex + 1}`,
      bins: Array.from({ length: 10 }, (_, binIndex) => ({
        id: `bin-${rackIndex + 1}-${shelfIndex + 1}-${binIndex + 1}`,
        isFull: Math.random() > 0.6, // Random full/empty status for demo
        contents: Math.random() > 0.6 ? "Product XYZ" : undefined
      }))
    }))
  }))
};

interface LocationSelectorProps {
  onLocationSelect: (location: string) => void;
  selectedLocation?: string;
}

export function LocationSelector({ onLocationSelect, selectedLocation }: LocationSelectorProps) {
  const [selectedRack, setSelectedRack] = useState<string | null>(null);
  const [selectedShelf, setSelectedShelf] = useState<string | null>(null);
  const [selectedBin, setSelectedBin] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectLocation = () => {
    if (selectedRack && selectedShelf && selectedBin) {
      const locationString = `Rack ${selectedRack}, Shelf ${selectedShelf}, Bin ${selectedBin}`;
      onLocationSelect(locationString);
      setIsOpen(false);
    }
  };

  const handleRackSelect = (rackId: string) => {
    setSelectedRack(rackId.replace('rack-', ''));
    setSelectedShelf(null);
    setSelectedBin(null);
  };

  const handleShelfSelect = (shelfId: string) => {
    setSelectedShelf(shelfId.split('-')[2]);
    setSelectedBin(null);
  };

  const handleBinSelect = (binId: string, isFull: boolean) => {
    if (!isFull) {
      setSelectedBin(binId.split('-')[3]);
    }
  };

  const getLocationString = () => {
    if (!selectedLocation && (!selectedRack || !selectedShelf || !selectedBin)) {
      return "Select Location";
    }

    if (selectedLocation) {
      return selectedLocation;
    }

    return `Rack ${selectedRack}, Shelf ${selectedShelf}, Bin ${selectedBin}`;
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <PackageOpen className="mr-2 h-4 w-4" />
          {getLocationString()}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90%] sm:w-[600px] md:w-[80%] lg:max-w-[900px]" side="right">
        <SheetHeader>
          <SheetTitle>Select Inventory Location</SheetTitle>
          <SheetDescription>
            Choose a rack, shelf, and bin for inventory placement. 
            <span className="flex items-center mt-1">
              <span className="inline-block w-4 h-4 bg-black mr-2 rounded"></span> 
              Full
              <span className="inline-block w-4 h-4 bg-[#1EAEDB] mr-2 ml-4 rounded"></span> 
              Available
            </span>
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {MOCK_LOCATION_DATA.racks.map((rack) => (
              <Button
                key={rack.id}
                variant={selectedRack === rack.id.replace('rack-', '') ? "default" : "outline"}
                onClick={() => handleRackSelect(rack.id)}
                className="h-auto py-4"
              >
                {rack.name}
              </Button>
            ))}
          </div>

          {selectedRack && (
            <div className="mt-6">
              <h3 className="font-medium mb-2">Select Shelf:</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {MOCK_LOCATION_DATA.racks
                  .find(r => r.id === `rack-${selectedRack}`)
                  ?.shelves.map((shelf) => (
                    <Button
                      key={shelf.id}
                      variant={selectedShelf === shelf.id.split('-')[2] ? "default" : "outline"}
                      onClick={() => handleShelfSelect(shelf.id)}
                      size="sm"
                      className="h-auto py-2"
                    >
                      {shelf.name}
                    </Button>
                  ))}
              </div>
            </div>
          )}

          {selectedRack && selectedShelf && (
            <div className="mt-6">
              <h3 className="font-medium mb-2">Select Bin:</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {MOCK_LOCATION_DATA.racks
                  .find(r => r.id === `rack-${selectedRack}`)
                  ?.shelves
                  .find(s => s.id === `shelf-${selectedRack}-${selectedShelf}`)
                  ?.bins.map((bin) => (
                    <div key={bin.id} className="relative">
                      <Button
                        variant={selectedBin === bin.id.split('-')[3] ? "default" : "outline"}
                        onClick={() => handleBinSelect(bin.id, bin.isFull)}
                        disabled={bin.isFull}
                        className={`w-full h-16 ${bin.isFull ? 'bg-black hover:bg-black/90 text-white' : 'bg-[#1EAEDB] hover:bg-[#1EAEDB]/90 text-white'}`}
                      >
                        {bin.id.split('-')[3]}
                        <Package className="ml-2 h-4 w-4" />
                      </Button>
                      
                      {bin.contents && (
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button 
                              variant="ghost" 
                              className="absolute top-0 right-0 h-6 w-6 p-0 rounded-full"
                              size="sm"
                            >
                              <Info className="h-3 w-3" />
                              <span className="sr-only">Bin info</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-60">
                            <div className="space-y-2">
                              <h4 className="font-medium">Bin Contents</h4>
                              <p className="text-sm">{bin.contents}</p>
                            </div>
                          </PopoverContent>
                        </Popover>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
        
        <SheetFooter className="flex flex-col sm:flex-row sm:justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSelectLocation}
            disabled={!selectedRack || !selectedShelf || !selectedBin}
          >
            Confirm Location
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
