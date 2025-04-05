
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InventoryItem } from "@/types/inventory";

interface ProductInfoCardProps {
  item: InventoryItem;
}

export default function ProductInfoCard({ item }: ProductInfoCardProps) {
  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle className="text-2xl">{item.productName}</CardTitle>
        <CardDescription className="flex items-center">
          <span className="flex items-center text-muted-foreground">
            ID: {item.id}
          </span>
          {item.forClinicalTrial && (
            <Badge className="ml-4" variant="secondary">Clinical Trial</Badge>
          )}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
          <ProductDetails item={item} />
          <SupplierAndStorage item={item} />
        </div>
      </CardContent>
    </Card>
  );
}

function ProductDetails({ item }: { item: InventoryItem }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-sm text-muted-foreground mb-1">Product Details</h3>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="text-sm text-muted-foreground">NDC# / MA#</div>
            <div>{item.ndcNumber}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Lot# / Batch#</div>
            <div>{item.lotNumber}</div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold text-sm text-muted-foreground mb-1">Manufacturing</h3>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="text-sm text-muted-foreground">Manufacturer</div>
            <div>{item.manufacturer}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Country of Origin</div>
            <div>{item.countryOfOrigin}</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-sm text-muted-foreground mb-1">Dimensions</h3>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <div className="text-sm text-muted-foreground">Length</div>
            <div>{item.dimensionsCm.length} cm</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Width</div>
            <div>{item.dimensionsCm.width} cm</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Height</div>
            <div>{item.dimensionsCm.height} cm</div>
          </div>
        </div>
      </div>
      
      {(item.kitRange || item.seqRange) && (
        <div>
          <h3 className="font-semibold text-sm text-muted-foreground mb-1">Range Information</h3>
          <div className="grid grid-cols-2 gap-2">
            {item.kitRange && (
              <div>
                <div className="text-sm text-muted-foreground">KIT Range</div>
                <div>{item.kitRange}</div>
              </div>
            )}
            {item.seqRange && (
              <div>
                <div className="text-sm text-muted-foreground">SEQ Range</div>
                <div>{item.seqRange}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function SupplierAndStorage({ item }: { item: InventoryItem }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-sm text-muted-foreground mb-1">Supplier Information</h3>
        <div>
          <div className="text-sm text-muted-foreground">Supplier Name</div>
          <div>{item.supplierName}</div>
        </div>
        {item.supplierDetails && (
          <div className="mt-2">
            <div className="text-sm text-muted-foreground">Supplier Details</div>
            <div>{item.supplierDetails}</div>
          </div>
        )}
      </div>
      
      <div>
        <h3 className="font-semibold text-sm text-muted-foreground mb-1">Inventory</h3>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <div className="text-sm text-muted-foreground">Quantity</div>
            <div>{item.quantity}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Weight</div>
            <div>{item.weightGrams} gms</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Supply</div>
            <div>{item.supply}</div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold text-sm text-muted-foreground mb-1">Storage</h3>
        <div>
          <div className="text-sm text-muted-foreground">Location</div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1 text-muted-foreground" /> 
            {item.storageLocation}
          </div>
        </div>
      </div>
      
      {item.remarks && (
        <div>
          <h3 className="font-semibold text-sm text-muted-foreground mb-1">Remarks</h3>
          <div className="text-sm border p-2 rounded-md bg-muted/50">
            {item.remarks}
          </div>
        </div>
      )}
    </div>
  );
}

// Need to import these icons at the top
import { MapPin } from "lucide-react";
