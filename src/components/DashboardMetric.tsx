import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
  increase?: { value: number; isPositive: boolean; count: number };
  chart?: React.ReactNode;
}

export function DashboardMetric({
  title,
  value,
  icon,
  description,
  increase,
  chart,
}: MetricProps) {
  return (
    <Card className="p-4 bg-white/5 backdrop-blur-lg border-0 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm text-cloud-muted">{title}</p>
          {value && <p className="text-2xl font-semibold text-cloud-text">{value}</p>}
        </div>
        <div className="text-cloud-primary text-2xl">{icon}</div>
      </div>
      {chart && <div className="mt-4">{chart}</div>}
      <div className="mt-4 flex items-center justify-between">
        {description && (
          <p className="text-sm font-medium text-cloud-primary">{description}</p>
        )}
        {increase && (
          <div className="flex items-center text-sm">
            {increase.isPositive ? (
              <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
            ) : (
              <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
            )}
            <span
              className={cn({
                "text-green-500": increase.isPositive,
                "text-red-500": !increase.isPositive,
              })}
            >
              {increase.count}%
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}
