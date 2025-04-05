
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Customer Routes
import CustomersList from "./pages/customers/CustomersList";
import CustomerDetails from "./pages/customers/CustomerDetails";
import NewCustomer from "./pages/customers/NewCustomer";

// Vendor Routes
import VendorsList from "./pages/vendors/VendorsList";
import NewVendor from "./pages/vendors/NewVendor";
import VendorDetails from "./pages/vendors/VendorDetails";

// Inventory Routes
import InventoryList from "./pages/inventory/InventoryList";
import InventoryDetails from "./pages/inventory/InventoryDetails";
import NewInventory from "./pages/inventory/NewInventory";

// Purchase Order Routes
import PurchaseOrderDetails from "./pages/purchase-orders/PurchaseOrderDetails";

const App = () => {
  // Initialize queryClient with useState to ensure it's properly created in the component lifecycle
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <HelmetProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <SidebarProvider>
              <div className="flex w-full min-h-screen bg-blue-50">
                <AppSidebar />
                <div className="flex-1 overflow-auto">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    
                    {/* Customer Routes */}
                    <Route path="/customers" element={<CustomersList />} />
                    <Route path="/customers/new" element={<NewCustomer />} />
                    <Route path="/customers/:id" element={<CustomerDetails />} />
                    
                    {/* Vendor Routes */}
                    <Route path="/vendors" element={<VendorsList />} />
                    <Route path="/vendors/new" element={<NewVendor />} />
                    <Route path="/vendors/:id" element={<VendorDetails />} />
                    
                    {/* Inventory Routes */}
                    <Route path="/inventory" element={<InventoryList />} />
                    <Route path="/inventory/new" element={<NewInventory />} />
                    <Route path="/inventory/:id" element={<InventoryDetails />} />
                    
                    {/* Purchase Order Routes */}
                    <Route path="/purchase-orders/:id" element={<PurchaseOrderDetails />} />
                    
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </div>
            </SidebarProvider>
          </BrowserRouter>
        </HelmetProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
