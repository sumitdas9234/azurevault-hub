
import { BaseLayout } from "@/layouts/BaseLayout";

const Networking = () => {
  return (
    <BaseLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Networking</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-cloud-background/5 border border-cloud-background/10">
            <h3 className="text-lg font-semibold mb-2">Virtual Networks</h3>
            <p className="text-cloud-muted">4 active networks</p>
          </div>
          <div className="p-6 rounded-lg bg-cloud-background/5 border border-cloud-background/10">
            <h3 className="text-lg font-semibold mb-2">Load Balancers</h3>
            <p className="text-cloud-muted">2 balancers running</p>
          </div>
          <div className="p-6 rounded-lg bg-cloud-background/5 border border-cloud-background/10">
            <h3 className="text-lg font-semibold mb-2">DNS Zones</h3>
            <p className="text-cloud-muted">6 zones configured</p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Networking;
