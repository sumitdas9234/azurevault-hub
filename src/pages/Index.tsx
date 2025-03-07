import { DashboardMetric } from "@/components/DashboardMetric";
import { ServiceCard } from "@/components/ServiceCard";
import { BaseLayout } from "@/layouts/BaseLayout";
import {
  Server,
  Database,
  Network,
  HardDrive,
  Shield,
  Cpu,
  Cloud,
} from "lucide-react";

const Index = () => {
  return (
    <BaseLayout>
      <div className="mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Overview</h1>
          <p className="text-cloud-muted">
            Monitor and manage your cloud resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardMetric
            title="Active Testbeds"
            value="12"
            icon={<Server />}
            description="4 Whitelisted Testbeds"
            increase={{ value: 10, isPositive: true, count: 10 }}
          />
          <DashboardMetric
            title="Active VMs"
            value="150"
            icon={<HardDrive />}
            description="12 Dev VMs"
            increase={{ value: 5, isPositive: false, count: 5 }}
          />
          <DashboardMetric
            title="Active vSphere Clusters"
            value="4"
            icon={<Cpu />}
            description="123 ESXI Hosts"
            increase={{ value: 2, isPositive: true, count: 2 }}
          />
          <DashboardMetric
            title="Attached Routes"
            value="25"
            icon={<Network />}
            description="75 Available Routes"
            increase={{ value: 8, isPositive: false, count: 8 }}
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Cloud Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Compute Services"
              description="Deploy and scale virtual machines"
              icon={<Server />}
            />
            <ServiceCard
              title="Database Services"
              description="Managed database solutions"
              icon={<Database />}
            />
            <ServiceCard
              title="Network Services"
              description="Virtual networks and connectivity"
              icon={<Network />}
            />
            <ServiceCard
              title="Storage Solutions"
              description="Secure and scalable storage"
              icon={<HardDrive />}
            />
            <ServiceCard
              title="Security Center"
              description="Advanced security and compliance"
              icon={<Shield />}
            />
            <ServiceCard
              title="Cloud Integration"
              description="Seamless service integration"
              icon={<Cloud />}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Index;
