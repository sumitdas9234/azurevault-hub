
import { BaseLayout } from "@/layouts/BaseLayout";

const Monitoring = () => {
  return (
    <BaseLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Monitoring</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-cloud-background/5 border border-cloud-background/10">
            <h3 className="text-lg font-semibold mb-2">Metrics</h3>
            <p className="text-cloud-muted">98.5% uptime</p>
          </div>
          <div className="p-6 rounded-lg bg-cloud-background/5 border border-cloud-background/10">
            <h3 className="text-lg font-semibold mb-2">Alerts</h3>
            <p className="text-cloud-muted">No active alerts</p>
          </div>
          <div className="p-6 rounded-lg bg-cloud-background/5 border border-cloud-background/10">
            <h3 className="text-lg font-semibold mb-2">Logs</h3>
            <p className="text-cloud-muted">Last updated 5m ago</p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Monitoring;
