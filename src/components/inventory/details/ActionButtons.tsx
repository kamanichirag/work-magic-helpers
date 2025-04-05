
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ActionButtonsProps {
  itemId: string;
  onDelete?: () => void;
}

export default function ActionButtons({ itemId, onDelete = () => {} }: ActionButtonsProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between">
      <Button variant="outline" onClick={() => navigate("/inventory")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Inventory
      </Button>
      <div className="space-x-2">
        <Button variant="outline" onClick={() => navigate(`/inventory/${itemId}/edit`)}>
          <Edit className="mr-2 h-4 w-4" /> Edit
        </Button>
        <Button variant="destructive" onClick={onDelete}>
          <Trash2 className="mr-2 h-4 w-4" /> Delete
        </Button>
      </div>
    </div>
  );
}
