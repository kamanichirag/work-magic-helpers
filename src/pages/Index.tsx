
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-10 px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">F-1 INC</h1>
          <p className="text-xl text-gray-600 mt-2">Customer Relationship Management</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Customers</CardTitle>
              <CardDescription>Manage your customer relationships</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-4">
              <p>View, create, and manage your customer accounts.</p>
              <Button asChild>
                <Link to="/customers">View Customers</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vendors</CardTitle>
              <CardDescription>Manage your vendor relationships</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-4">
              <p>View, create, and manage your vendor accounts.</p>
              <Button asChild>
                <Link to="/vendors">View Vendors</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
