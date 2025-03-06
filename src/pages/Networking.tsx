import { BaseLayout } from "@/layouts/BaseLayout";
import { DashboardMetric } from "@/components/DashboardMetric";
import { NetworkTable } from "@/components/NetworkTable";
import { Network, Route, Share } from "lucide-react";
import { NetworkFilters } from "@/components/NetworkFilters";
import { useState } from "react";

export type RouteType = "static" | "openshift";

const Networking = () => {
  const [selectedSubnet, setSelectedSubnet] = useState<string>("all");
  const [selectedRouteType, setSelectedRouteType] = useState<RouteType>("static");

  return (
    <BaseLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Networking</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardMetric
            title="Subnets"
            value="32"
            description="Active Subnets"
            icon={<Network />}
          />
          <DashboardMetric
            title="Static Routes"
            value="34"
            description="11 Routes Attached"
            icon={<Route />}
          />
          <DashboardMetric
            title="Openshift Routes"
            value="232"
            description="121 Routes Attached"
            icon={<Share />}
          />
        </div>

        <NetworkFilters
          onSubnetChange={setSelectedSubnet}
          onRouteTypeChange={setSelectedRouteType}
        />

        <NetworkTable
          selectedSubnet={selectedSubnet}
          selectedRouteType={selectedRouteType}
        />
      </div>
    </BaseLayout>
  );
};

export default Networking;
