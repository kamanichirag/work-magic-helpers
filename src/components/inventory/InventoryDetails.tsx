
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { InventoryItem } from "@/types/inventory";
import { inventoryItems } from "@/data/inventoryData";
import { ArrowLeft, Edit, Trash2, Package, MapPin, User, Calendar } from "lucide-react";

export default function InventoryDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState<InventoryItem | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be an API call
    const foundItem = inventoryItems.find(item => item.id === id);
    setItem(foundItem);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-muted-foreground">Loading inventory details...</p>
      </div>
    );
  }

  if (!item) {
    return (
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Item Not Found</CardTitle>
          <CardDescription>
            The inventory item you are looking for cannot be found.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="outline" onClick={() => navigate("/inventory")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Inventory
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => navigate("/inventory")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Inventory
        </Button>
        <div className="space-x-2">
          <Button variant="outline" onClick={() => navigate(`/inventory/${id}/edit`)}>
            <Edit className="mr-2 h-4 w-4" /> Edit
          </Button>
          <Button variant="destructive" onClick={() => {}}>
            <Trash2 className="mr-2 h-4 w-4" /> Delete
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Approval Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm text-muted-foreground">Created By</h3>
              <div className="flex items-center mt-1">
                <User className="h-4 w-4 mr-1 text-muted-foreground" />
                <span>{item.createdBy}</span>
              </div>
              <div className="flex items-center mt-1">
                <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{item.createdDate}</span>
              </div>
            </div>
            
            <Separator />
            
            {item.approvedBy ? (
              <div>
                <h3 className="text-sm text-muted-foreground">Approved By</h3>
                <div className="flex items-center mt-1">
                  <User className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span>{item.approvedBy}</span>
                </div>
                {item.approvedDate && (
                  <div className="flex items-center mt-1">
                    <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{item.approvedDate}</span>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <h3 className="text-sm text-muted-foreground">Approval Status</h3>
                <Badge variant="outline" className="mt-1">Pending Approval</Badge>
                <div className="mt-4">
                  <Button className="w-full" onClick={() => {}}>
                    Approve Item
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
