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
      <SheetContent side="right" className="w-[70%] md:w-[50%] lg:w-[30%] bg-cloud-background backdrop-blur-sm border-l border-white/5">
        <SheetHeader>
          <SheetTitle className="text-cloud-text">{title}</SheetTitle>
          <SheetDescription className="text-cloud-muted">
            {description}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4 text-cloud-text">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
}
