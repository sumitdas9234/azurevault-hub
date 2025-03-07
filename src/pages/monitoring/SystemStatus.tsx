import { BaseLayout } from "@/layouts/BaseLayout";
import { DashboardMetric } from "@/components/DashboardMetric";
import { Activity, AlertCircle } from "lucide-react";
import SystemStatusComponent from "@/components/SystemStatus";

const SystemStatus = () => {
  return (
    <BaseLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">System Status</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <DashboardMetric
            title="Metrics"
            value="98.5%"
            description="Uptime"
            icon={<Activity />}
          />
          <DashboardMetric
            title="Alerts"
            value="0"
            description="No active alerts"
            icon={<AlertCircle />}
          />
        </div>
        <div>
          <SystemStatusComponent />
        </div>
      </div>
    </BaseLayout>
  );
};

export default SystemStatus;
