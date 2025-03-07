import { BaseLayout } from "@/layouts/BaseLayout";
import { DashboardMetric } from "@/components/DashboardMetric";
import { TestTube, Monitor, LineChart } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { TestbedGraph } from "@/components/TestbedGraph";

const VCenters = () => {
  const [selectedVCenter, setSelectedVCenter] = useState("A");
  const [selectedTestbed, setSelectedTestbed] = useState<string | null>(null);

  const vcenters = ["A", "B", "C", "D"];
  const clusterMap = {
    A: ["A1", "A2"],
    B: ["B1", "B2"],
    C: ["C1", "C2"],
    D: ["D1", "D2"],
  };

  const testbedData = [
    { name: "Test-Env-1", expiry: "2024-04-01", created: "2024-03-01", owner: "John Doe", vms: 5 },
    { name: "Dev-Setup-2", expiry: "2024-04-15", created: "2024-03-05", owner: "Jane Smith", vms: 3 },
    { name: "QA-System-1", expiry: "2024-04-10", created: "2024-02-28", owner: "Mike Johnson", vms: 4 },
    { name: "Staging-Env", expiry: "2024-04-20", created: "2024-03-10", owner: "Sarah Wilson", vms: 6 },
  ];

  return (
    <BaseLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">vCenters</h1>

        <div className="flex gap-4">
          <Select value={selectedVCenter} onValueChange={setSelectedVCenter}>
            <SelectTrigger className="w-[180px] bg-white/5 border-0">
              <SelectValue placeholder="Select vCenter" />
            </SelectTrigger>
            <SelectContent className="bg-cloud-background text-cloud-text border-cloud-muted">
              {vcenters.map((vcenter) => (
                <SelectItem key={vcenter} value={vcenter} className="focus:bg-white/10 focus:text-cloud-text">
                  vCenter {vcenter}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px] bg-white/5 border-0">
              <SelectValue placeholder="Select Cluster" />
            </SelectTrigger>
            <SelectContent className="bg-cloud-background text-cloud-text border-cloud-muted">
              {clusterMap[selectedVCenter as keyof typeof clusterMap].map((cluster) => (
                <SelectItem key={cluster} value={cluster} className="focus:bg-white/10 focus:text-cloud-text">
                  Cluster {cluster}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardMetric
            title="Testbeds"
            value="243"
            description="Active Testbeds"
            icon={<TestTube />}
          />
          <DashboardMetric
            title="Dev VMs"
            value="34"
            description="Active VMs"
            icon={<Monitor />}
          />
          <DashboardMetric
            title="Usage Trend"
            value=""
            description="Last 24 Hours"
            icon={<LineChart />}
            chart={<TestbedGraph />}
          />
        </div>

        <div className="rounded-lg overflow-hidden bg-white/5 backdrop-blur-lg border-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-white/10 hover:bg-white/5">
                <TableHead className="text-cloud-muted font-medium">Name</TableHead>
                <TableHead className="text-cloud-muted font-medium">Expiry</TableHead>
                <TableHead className="text-cloud-muted font-medium">Created</TableHead>
                <TableHead className="text-cloud-muted font-medium">Owner</TableHead>
                <TableHead className="text-cloud-muted font-medium">VMs</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testbedData.map((testbed) => (
                <TableRow
                  key={testbed.name}
                  className="border-b border-white/10 hover:bg-white/5 cursor-pointer"
                  onClick={() => setSelectedTestbed(testbed.name)}
                >
                  <TableCell className="font-medium text-cloud-text">{testbed.name}</TableCell>
                  <TableCell className="text-cloud-muted">{testbed.expiry}</TableCell>
                  <TableCell className="text-cloud-muted">{testbed.created}</TableCell>
                  <TableCell className="text-cloud-muted">{testbed.owner}</TableCell>
                  <TableCell className="text-cloud-muted">{testbed.vms}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Sheet open={!!selectedTestbed} onOpenChange={() => setSelectedTestbed(null)}>
          <SheetContent side="right" className="w-[30%] bg-cloud-background border-l border-white/10">
            <SheetHeader>
              <SheetTitle className="text-cloud-text">{selectedTestbed}</SheetTitle>
              <SheetDescription className="text-cloud-muted">
                Detailed information about the testbed
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 space-y-4">
              {selectedTestbed && testbedData.find(t => t.name === selectedTestbed) && (
                <>
                  <div className="space-y-2">
                    <p className="text-sm text-cloud-muted">Owner</p>
                    <p className="text-cloud-text">{testbedData.find(t => t.name === selectedTestbed)?.owner}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-cloud-muted">Created</p>
                    <p className="text-cloud-text">{testbedData.find(t => t.name === selectedTestbed)?.created}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-cloud-muted">Expiry</p>
                    <p className="text-cloud-text">{testbedData.find(t => t.name === selectedTestbed)?.expiry}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-cloud-muted">Number of VMs</p>
                    <p className="text-cloud-text">{testbedData.find(t => t.name === selectedTestbed)?.vms}</p>
                  </div>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </BaseLayout>
  );
};

export default VCenters;
