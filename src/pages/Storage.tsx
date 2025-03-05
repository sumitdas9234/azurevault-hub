
import { BaseLayout } from "@/layouts/BaseLayout";

const Storage = () => {
  return (
    <BaseLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Storage</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-cloud-background/5 border border-cloud-background/10">
            <h3 className="text-lg font-semibold mb-2">Block Storage</h3>
            <p className="text-cloud-muted">500GB used</p>
          </div>
          <div className="p-6 rounded-lg bg-cloud-background/5 border border-cloud-background/10">
            <h3 className="text-lg font-semibold mb-2">Object Storage</h3>
            <p className="text-cloud-muted">1.2TB total size</p>
          </div>
          <div className="p-6 rounded-lg bg-cloud-background/5 border border-cloud-background/10">
            <h3 className="text-lg font-semibold mb-2">File Storage</h3>
            <p className="text-cloud-muted">3 shared volumes</p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Storage;
