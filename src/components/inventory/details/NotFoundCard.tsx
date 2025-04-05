
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFoundCard() {
  const navigate = useNavigate();
  
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
