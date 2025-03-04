
import { Card } from "@/components/ui/card";

interface MetricProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
}

export function DashboardMetric({ title, value, icon, description }: MetricProps) {
  return (
    <Card className="p-6 bg-cloud-canvas/50 backdrop-blur-lg border-0 hover:bg-cloud-canvas/80 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm text-cloud-yellow">{title}</p>
          <p className="text-2xl font-semibold text-cloud-text">{value}</p>
          {description && (
            <p className="text-sm font-medium text-cloud-gold mt-1">{description}</p>
          )}
        </div>
        <div className="text-cloud-primary text-2xl">{icon}</div>
      </div>
    </Card>
  );
}

