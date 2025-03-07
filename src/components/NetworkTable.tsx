import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RouteType } from "@/pages/Networking";
import { useState } from "react";
import { DetailsPanel } from "./DetailsPanel";

interface NetworkTableProps {
  selectedSubnet: string;
  selectedRouteType: RouteType;
}

interface Route {
  id: string;
  name: string;
  destination: string;
  subnet: string;
  status: string;
  type: RouteType;
}

const dummyRoutes: Route[] = [
  { id: "1", name: "route-1", destination: "192.168.2.0/24", subnet: "subnet-1", status: "Active", type: "static" },
  { id: "2", name: "route-2", destination: "10.0.1.0/24", subnet: "subnet-2", status: "Pending", type: "static" },
  { id: "3", name: "openshift-1", destination: "apps.cluster.com", subnet: "subnet-1", status: "Active", type: "openshift" },
  { id: "4", name: "openshift-2", destination: "api.cluster.com", subnet: "subnet-3", status: "Active", type: "openshift" },
];

export function NetworkTable({ selectedSubnet, selectedRouteType }: NetworkTableProps) {
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);

  const filteredRoutes = dummyRoutes.filter(route => {
    const matchesSubnet = selectedSubnet === "all" || route.subnet === selectedSubnet;
    const matchesType = route.type === selectedRouteType;
    return matchesSubnet && matchesType;
  });

  return (
    <>
      <div className="rounded-md border border-white/10">
        <Table>
          <TableHeader>
            <TableRow className="bg-white/5 hover:bg-white/5 border-b border-white/10">
              <TableHead className="text-cloud-text">Name</TableHead>
              <TableHead className="text-cloud-text">Destination</TableHead>
              <TableHead className="text-cloud-text">Subnet</TableHead>
              <TableHead className="text-cloud-text">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRoutes.map((route) => (
              <TableRow 
                key={route.id} 
                className="hover:bg-white/5 border-b border-white/10 cursor-pointer"
                onClick={() => setSelectedRoute(route)}
              >
                <TableCell className="text-cloud-text">{route.name}</TableCell>
                <TableCell className="text-cloud-text">{route.destination}</TableCell>
                <TableCell className="text-cloud-text">{route.subnet}</TableCell>
                <TableCell className="text-cloud-text">{route.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <DetailsPanel
        isOpen={!!selectedRoute}
        onClose={() => setSelectedRoute(null)}
        title={selectedRoute?.name || ""}
        description="Route Details"
      >
        {selectedRoute && (
          <>
            <div className="space-y-2">
              <p className="text-sm text-cloud-muted">Destination</p>
              <p className="text-cloud-text">{selectedRoute.destination}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-cloud-muted">Subnet</p>
              <p className="text-cloud-text">{selectedRoute.subnet}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-cloud-muted">Status</p>
              <p className="text-cloud-text">{selectedRoute.status}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-cloud-muted">Type</p>
              <p className="text-cloud-text">{selectedRoute.type}</p>
            </div>
          </>
        )}
      </DetailsPanel>
    </>
  );
}
