
import { BaseLayout } from "@/layouts/BaseLayout";
import { Card } from "@/components/ui/card";
import { TestTube, Monitor } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const Compute = () => {
  const [selectedVCenter, setSelectedVCenter] = useState("A");
  
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
        <h1 className="text-3xl font-bold">Compute Resources</h1>
        
        <div className="flex gap-4">
          <Select value={selectedVCenter} onValueChange={setSelectedVCenter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select vCenter" />
            </SelectTrigger>
            <SelectContent>
              {vcenters.map((vcenter) => (
                <SelectItem key={vcenter} value={vcenter}>
                  vCenter {vcenter}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Cluster" />
            </SelectTrigger>
            <SelectContent>
              {clusterMap[selectedVCenter as keyof typeof clusterMap].map((cluster) => (
                <SelectItem key={cluster} value={cluster}>
                  Cluster {cluster}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-cloud-background/5 border border-cloud-background/10">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Testbeds</h3>
                <p className="text-cloud-muted">243 Active Testbeds</p>
              </div>
              <TestTube className="text-cloud-primary h-6 w-6" />
            </div>
          </Card>

          <Card className="p-6 bg-cloud-background/5 border border-cloud-background/10">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Dev VMs</h3>
                <p className="text-cloud-muted">34 Dev VMs</p>
              </div>
              <Monitor className="text-cloud-primary h-6 w-6" />
            </div>
          </Card>
        </div>

        <div className="rounded-lg border bg-cloud-background/5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Expiry</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>VMs</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testbedData.map((testbed) => (
                <TableRow key={testbed.name}>
                  <TableCell>{testbed.name}</TableCell>
                  <TableCell>{testbed.expiry}</TableCell>
                  <TableCell>{testbed.created}</TableCell>
                  <TableCell>{testbed.owner}</TableCell>
                  <TableCell>{testbed.vms}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Compute;
