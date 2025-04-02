
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { toast } from "sonner";

interface VendorSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  resultsCount?: number;
}

export const VendorSearch = ({ 
  searchTerm, 
  setSearchTerm,
  resultsCount
}: VendorSearchProps) => {
  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      toast.info("Please enter a search term");
      return;
    }
    toast.success(`Searching for: ${searchTerm}`);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    toast.info("Search cleared");
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">Search Vendors</h2>
      <div className="flex gap-2 flex-col sm:flex-row">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search by name, email, contact person, company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSearch} className="w-full sm:w-auto">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
          {searchTerm && (
            <Button 
              variant="outline" 
              onClick={handleClearSearch}
              className="w-full sm:w-auto"
            >
              Clear
            </Button>
          )}
        </div>
      </div>
      {searchTerm && resultsCount !== undefined && (
        <div className="mt-2 text-sm text-muted-foreground">
          Found {resultsCount} {resultsCount === 1 ? 'vendor' : 'vendors'} matching "{searchTerm}"
        </div>
      )}
    </div>
  );
};
