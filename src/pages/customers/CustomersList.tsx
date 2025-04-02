
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Mail, Users, UserCheck, DollarSign } from "lucide-react";
import { customerData } from "@/data/customerData";
import { toast } from "sonner";

const CustomersList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCustomers = customerData.filter(customer => 
    customer.companyName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    customer.businessRegistrationNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Calculate metrics for the dashboard
  const totalCustomers = customerData.length;
  const activeCustomers = customerData.filter(customer => 
    customer.purchaseOrders && customer.purchaseOrders.length > 0).length;
  
  // Calculate average revenue (assuming we have purchase orders with total amounts)
  let totalRevenue = 0;
  let customersWithOrders = 0;
  customerData.forEach(customer => {
    if(customer.purchaseOrders && customer.purchaseOrders.length > 0) {
      const customerRevenue = customer.purchaseOrders.reduce((sum, order) => sum + order.total, 0);
      totalRevenue += customerRevenue;
      customersWithOrders++;
    }
  });
  const averageRevenue = customersWithOrders > 0 ? totalRevenue / customersWithOrders : 0;

  const handleEmail = (email: string) => {
    window.open(`mailto:${email}`);
    toast.success("Email client opened");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Customer Management</h1>
          <p className="text-gray-600 mt-1">View and manage your customers</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search customers..."
              className="pl-8 w-full sm:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button asChild>
            <Link to="/customers/new">Create New Customer</Link>
          </Button>
        </div>
      </div>

      {/* Customer Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Customers</p>
                <h3 className="text-2xl font-bold mt-1">{totalCustomers}</h3>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <Users className="h-6 w-6 text-blue-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Customers</p>
                <h3 className="text-2xl font-bold mt-1">{activeCustomers}</h3>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <UserCheck className="h-6 w-6 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Revenue</p>
                <h3 className="text-2xl font-bold mt-1">${averageRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h3>
              </div>
              <div className="p-2 bg-purple-100 rounded-full">
                <DollarSign className="h-6 w-6 text-purple-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customers List</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredCustomers.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-gray-500">No customers found. Create your first customer.</p>
              <Button asChild className="mt-4">
                <Link to="/customers/new">Create New Customer</Link>
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company Name</TableHead>
                    <TableHead>Business Registration Number</TableHead>
                    <TableHead>Type of Business</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">{customer.companyName}</TableCell>
                      <TableCell>{customer.businessRegistrationNumber}</TableCell>
                      <TableCell>{customer.typeOfBusiness}</TableCell>
                      <TableCell>{customer.contactDetails.management.name || "-"}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button asChild variant="outline" size="sm">
                            <Link to={`/customers/${customer.id}`}>View Details</Link>
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleEmail(customer.contactDetails.management.email)}
                            title="Send Email"
                          >
                            <Mail className="h-4 w-4 text-green-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomersList;
