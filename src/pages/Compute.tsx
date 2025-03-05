
import { BaseLayout } from "@/layouts/BaseLayout";

const Compute = () => {
  return (
    <BaseLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Compute Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-cloud-background/5 border border-cloud-background/10">
            <h3 className="text-lg font-semibold mb-2">Virtual Machines</h3>
            <p className="text-cloud-muted">8 instances running</p>
          </div>
          <div className="p-6 rounded-lg bg-cloud-background/5 border border-cloud-background/10">
            <h3 className="text-lg font-semibold mb-2">Containers</h3>
            <p className="text-cloud-muted">12 active containers</p>
          </div>
          <div className="p-6 rounded-lg bg-cloud-background/5 border border-cloud-background/10">
            <h3 className="text-lg font-semibold mb-2">Functions</h3>
            <p className="text-cloud-muted">3 serverless functions</p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Compute;
