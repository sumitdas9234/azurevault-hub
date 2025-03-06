import { BaseLayout } from "@/layouts/BaseLayout";
import { DashboardMetric } from "@/components/DashboardMetric";
import { Activity, AlertCircle, FileText } from "lucide-react";
import SystemStatus from "@/components/SystemStatus";
import Alerts from "@/components/Alerts";

const Monitoring = () => {
  return (
    <BaseLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Monitoring</h1>
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
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          <div className="lg:col-span-6">
            <SystemStatus />
          </div>
          <div className="lg:col-span-4">
            <div className="mx-auto py-6">
              <h2 className="text-2xl font-semibold mb-4">Recent Alerts</h2>
              <Alerts />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Monitoring;
