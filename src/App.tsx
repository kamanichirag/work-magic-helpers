
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Customer Routes
import CustomersList from "./pages/customers/CustomersList";
import CustomerDetails from "./pages/customers/CustomerDetails";
import NewCustomer from "./pages/customers/NewCustomer";

// Vendor Routes
import VendorsList from "./pages/vendors/VendorsList";
import NewVendor from "./pages/vendors/NewVendor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
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
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
