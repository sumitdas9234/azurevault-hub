
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface DetailsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

export function DetailsPanel({ isOpen, onClose, title, description, children }: DetailsPanelProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[30%] bg-cloud-background border-l border-white/0">
        <SheetHeader>
          <SheetTitle className="text-cloud-text">{title}</SheetTitle>
          <SheetDescription className="text-cloud-muted">
            {description}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
}
