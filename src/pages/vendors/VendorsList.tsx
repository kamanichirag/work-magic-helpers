
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VendorsList = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Vendors</h1>
        <Button>Add New Vendor</Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Vendors Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center py-8">
            Vendor management functionality will be implemented soon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorsList;
