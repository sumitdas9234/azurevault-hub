import React from "react";
import {
  CheckCircle,
  AlertTriangle,
  Settings,
  Loader2,
  RotateCw,
} from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";

interface SystemStatusProps {
  name: string;
  status: "operational" | "warning" | "maintenance" | "loading";
  lastChecked: string;
  details: {
    [key: string]: string;
  };
}

const SystemStatus = () => {
  const [selectedSystem, setSelectedSystem] = useState<SystemStatusProps | null>(null);
  const isOpen = !!selectedSystem;
  const onClose = () => setSelectedSystem(null);

  const systems: SystemStatusProps[] = [
    {
      name: "System A",
      status: "operational",
      lastChecked: "5 minutes ago",
      details: {
        "System ID": "sys-a-123",
        "Version": "2.5.1",
        "CPU Usage": "20%",
        "Memory Usage": "35%",
        "Disk Usage": "60%",
        "Network Latency": "2ms",
      }
    },
    {
      name: "System B",
      status: "operational",
      lastChecked: "10 minutes ago",
      details: {
        "System ID": "sys-b-456",
        "Version": "2.5.1",
        "CPU Usage": "15%",
        "Memory Usage": "25%",
        "Disk Usage": "40%",
        "Network Latency": "1ms",
      }
    },
    {
      name: "System C",
      status: "operational",
      lastChecked: "2 hours ago",
      details: {
        "System ID": "sys-c-789",
        "Version": "2.5.0",
        "CPU Usage": "22%",
        "Memory Usage": "38%",
        "Disk Usage": "65%",
        "Network Latency": "3ms",
      }
    },
    {
      name: "System D",
      status: "warning",
      lastChecked: "Just now",
      details: {
        "System ID": "sys-d-101",
        "Version": "2.4.9",
        "CPU Usage": "75%",
        "Memory Usage": "80%",
        "Disk Usage": "90%",
        "Network Latency": "15ms",
        "Alerts": "High CPU Usage, Low Disk Space"
      }
    },
    {
      name: "System E",
      status: "warning",
      lastChecked: "30 minutes ago",
      details: {
        "System ID": "sys-e-202",
        "Version": "2.4.9",
        "CPU Usage": "68%",
        "Memory Usage": "72%",
        "Disk Usage": "85%",
        "Network Latency": "12ms",
        "Alerts": "High Memory Usage"
      }
    },
    {
      name: "System F",
      status: "maintenance",
      lastChecked: "1 hour ago",
      details: {
        "System ID": "sys-f-303",
        "Version": "2.5.1",
        "Maintenance Scheduled": "Yes",
        "Maintenance Window": "2:00 AM - 3:00 AM PST",
        "Expected Downtime": "1 hour"
      }
    },
  ];

  const statusColors = {
    operational: "bg-green-500",
    warning: "bg-amber-500",
    maintenance: "bg-gray-500",
    loading: "bg-blue-500",
  };

  return (
    <div className="py-6 mx-auto">
      <h2 className="text-2xl font-semibold mb-4">System Status</h2>
      <Table className="bg-white/5 backdrop-blur-lg rounded-lg shadow-md border-none">
        <TableCaption>
          Overview of system statuses and last check times.
        </TableCaption>
        <TableBody>
          {systems.map((system) => (
            <React.Fragment key={system.name}>
              <TableRow
                className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
                onClick={() => setSelectedSystem(system)}
              >
                <TableCell className="w-1">
                  <div
                    className={cn(
                      "h-3 w-3 rounded-full",
                      statusColors[system.status],
                      ""
                    )}
                  />
                </TableCell>
                <TableCell className="font-medium">{system.name}</TableCell>
                <TableCell className="text-xs text-muted-foreground text-right flex items-center justify-end gap-2">
                  {system.lastChecked} <RotateCw className="w-3 h-3 cursor-pointer" />
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>

      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="right" className="w-[30%] bg-cloud-background border-l border-white/10">
          <SheetHeader>
            <SheetTitle className="text-cloud-text">{selectedSystem?.name}</SheetTitle>
            <SheetDescription className="text-cloud-muted">
              Detailed information about {selectedSystem?.name}
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            {selectedSystem && (
              <>
                <div className="space-y-2">
                  <p className="text-sm text-cloud-muted">System ID</p>
                  <p className="text-cloud-text">{selectedSystem?.details["System ID"]}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-cloud-muted">Version</p>
                  <p className="text-cloud-text">{selectedSystem?.details["Version"]}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-cloud-muted">CPU Usage</p>
                  <p className="text-cloud-text">{selectedSystem?.details["CPU Usage"]}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-cloud-muted">Memory Usage</p>
                  <p className="text-cloud-text">{selectedSystem?.details["Memory Usage"]}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-cloud-muted">Disk Usage</p>
                  <p className="text-cloud-text">{selectedSystem?.details["Disk Usage"]}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-cloud-muted">Network Latency</p>
                  <p className="text-cloud-text">{selectedSystem?.details["Network Latency"]}</p>
                </div>
                {selectedSystem.details["Alerts"] && (
                  <div className="space-y-2">
                    <p className="text-sm text-cloud-muted">Alerts</p>
                    <p className="text-cloud-text">{selectedSystem?.details["Alerts"]}</p>
                  </div>
                )}
                {selectedSystem.details["Maintenance Scheduled"] && (
                  <>
                    <div className="space-y-2">
                      <p className="text-sm text-cloud-muted">Maintenance Scheduled</p>
                      <p className="text-cloud-text">{selectedSystem?.details["Maintenance Scheduled"]}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-cloud-muted">Maintenance Window</p>
                      <p className="text-cloud-text">{selectedSystem?.details["Maintenance Window"]}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-cloud-muted">Expected Downtime</p>
                      <p className="text-cloud-text">{selectedSystem?.details["Expected Downtime"]}</p>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SystemStatus;
