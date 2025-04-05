
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Package } from "lucide-react";
import { InventoryItem } from "@/types/inventory";
import { suppliers, manufacturers } from "@/data/inventoryData";
import { useToast } from "@/components/ui/use-toast";

export default function NewInventoryForm() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<Omit<InventoryItem, "id">>({
    defaultValues: {
      productName: "",
      supplierName: "",
      supplierDetails: "",
      ndcNumber: "",
      manufacturer: "",
      countryOfOrigin: "",
      lotNumber: "",
      storageLocation: "",
      weightGrams: 0,
      quantity: 0,
      dimensionsCm: {
        length: 0,
        width: 0,
        height: 0,
      },
      forClinicalTrial: false,
      supply: "",
      kitRange: "",
      seqRange: "",
      remarks: "",
      createdBy: "Current User", // In a real app, this would come from auth context
      createdDate: new Date().toISOString().split('T')[0],
    },
  });

  const onSubmit = (data: Omit<InventoryItem, "id">) => {
    // In a real app, this would be an API call to create the item
    console.log("Form submitted:", data);
    
    toast({
      title: "Inventory Item Created",
      description: `${data.productName} has been added to inventory.`,
    });
    
    navigate("/inventory");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button variant="outline" className="mr-4" onClick={() => navigate("/inventory")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Inventory
        </Button>
        <h1 className="text-2xl font-bold">Add New Inventory Item</h1>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Basic Information</CardTitle>
                <CardDescription>Enter the core details of the inventory item</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="productName"
                  rules={{ required: "Product name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter product name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="ndcNumber"
                    rules={{ required: "NDC/MA number is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>NDC# / MA#</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 12345-678-90" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lotNumber"
                    rules={{ required: "Lot/Batch number is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Lot# / Batch#</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. LOT-A12345" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="manufacturer"
                  rules={{ required: "Manufacturer is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Manufacturer</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter manufacturer name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="countryOfOrigin"
                  rules={{ required: "Country of origin is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country of Origin</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. United States" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="quantity"
                    rules={{ required: "Quantity is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="0"
                            {...field}
                            onChange={e => field.onChange(parseInt(e.target.value) || 0)} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="weightGrams"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Weight (GMS)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="0"
                            {...field}
                            onChange={e => field.onChange(parseInt(e.target.value) || 0)} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Supplier & Location</CardTitle>
                <CardDescription>Enter supplier details and storage information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="supplierName"
                  rules={{ required: "Supplier name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Supplier Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter supplier name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="supplierDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Supplier Details</FormLabel>
                      <FormControl>
                        <Input placeholder="Additional supplier information" {...field} />
                      </FormControl>
                      <FormDescription>Optional additional supplier information</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="storageLocation"
                  rules={{ required: "Storage location is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Storage Location</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Warehouse A, Shelf 12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="supply"
                  rules={{ required: "Supply frequency is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Supply</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Weekly, Monthly" {...field} />
                      </FormControl>
                      <FormDescription>How often this item is supplied</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dimensions & Clinical Information</CardTitle>
                <CardDescription>Enter physical dimensions and clinical trial information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="dimensionsCm.length"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Length (cm)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="0"
                            {...field}
                            onChange={e => field.onChange(parseFloat(e.target.value) || 0)} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="dimensionsCm.width"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Width (cm)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="0"
                            {...field}
                            onChange={e => field.onChange(parseFloat(e.target.value) || 0)} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="dimensionsCm.height"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Height (cm)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="0"
                            {...field}
                            onChange={e => field.onChange(parseFloat(e.target.value) || 0)} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="forClinicalTrial"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>For Clinical Trial (IMP)/Labeled KITS</FormLabel>
                        <FormDescription>
                          Check if this item is for clinical trials
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="kitRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>KIT Range</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. KT-1000 to KT-1500" {...field} />
                        </FormControl>
                        <FormDescription>For clinical trial items</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="seqRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SEQ Range</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. SQ-001 to SQ-350" {...field} />
                        </FormControl>
                        <FormDescription>For clinical trial items</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Additional Information</CardTitle>
                <CardDescription>Enter any additional remarks or notes</CardDescription>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="remarks"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Remarks</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter any additional information or notes about this item"
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-end space-x-4">
            <Button 
              type="button" 
              variant="outline"
              onClick={() => navigate("/inventory")}
            >
              Cancel
            </Button>
            <Button type="submit">
              <Package className="mr-2 h-4 w-4" />
              Add Inventory Item
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
