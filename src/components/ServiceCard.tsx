
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <Card className={cn(
      "p-6 bg-white/5 backdrop-blur-lg border-0 hover:bg-white/10 transition-all duration-300 cursor-pointer group",
      className
    )}>
      <div className="space-y-4">
        <div className="text-cloud-primary text-3xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-cloud-text">{title}</h3>
        <p className="text-sm text-cloud-muted">{description}</p>
      </div>
    </Card>
  );
}
