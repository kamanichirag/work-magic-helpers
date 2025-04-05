
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { InventoryItem } from "@/types/inventory";
import { User, Calendar } from "lucide-react";

interface ApprovalCardProps {
  item: InventoryItem;
  onApprove?: () => void;
}

export default function ApprovalCard({ item, onApprove = () => {} }: ApprovalCardProps) {
  return (
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
              <Button className="w-full" onClick={onApprove}>
                Approve Item
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
