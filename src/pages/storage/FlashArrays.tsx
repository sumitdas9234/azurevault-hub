import { BaseLayout } from "@/layouts/BaseLayout";
import { DashboardMetric } from "@/components/DashboardMetric";
import { Database, HardDrive, Server, Cloud } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DetailsPanel } from "@/components/DetailsPanel";

const FlashArrays = () => {
  const [selectedType, setSelectedType] = useState("flasharrays");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const types = ["datastores", "flasharrays", "flashblades", "minio"];
  const dummyData = [
    { id: "1", name: "Datastore 1", type: "datastores", status: "Active" },
    { id: "2", name: "FlashArray 1", type: "flasharrays", status: "Active" },
    { id: "3", name: "FlashBlade 1", type: "flashblades", status: "Inactive" },
    { id: "4", name: "Minio 1", type: "minio", status: "Active" },
    { id: "5", name: "Datastore 2", type: "datastores", status: "Inactive" },
    { id: "6", name: "FlashArray 2", type: "flasharrays", status: "Active" },
    { id: "7", name: "FlashBlade 2", type: "flashblades", status: "Active" },
    { id: "8", name: "Minio 2", type: "minio", status: "Inactive" },
    { id: "9", name: "Datastore 3", type: "datastores", status: "Active" },
    { id: "10", name: "FlashArray 3", type: "flasharrays", status: "Inactive" },
    { id: "11", name: "FlashBlade 3", type: "flashblades", status: "Active" },
    { id: "12", name: "Minio 3", type: "minio", status: "Active" },
  ];

  const filteredData = dummyData.filter(
    (item) =>
      item.type === selectedType &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BaseLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Storage</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardMetric
            title="Datastores"
            value="120"
            description="Active Datastores"
            icon={<Database />}
          />
          <DashboardMetric
            title="FlashArrays"
            value="45"
            description="Active FlashArrays"
            icon={<HardDrive />}
          />
          <DashboardMetric
            title="FlashBlades"
            value="30"
            description="Active FlashBlades"
            icon={<Server />}
          />
          <DashboardMetric
            title="Minio"
            value="15"
            description="Active Minio Instances"
            icon={<Cloud />}
          />
        </div>

        <div className="flex gap-4">
          <Select onValueChange={setSelectedType} defaultValue="flasharrays">
            <SelectTrigger className="w-[200px] bg-white/5 border-white/10">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-300">
              {types.map((type) => (
                <SelectItem
                  key={type}
                  value={type}
                  className="text-black hover:bg-gray-100 focus:bg-gray-100"
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[200px] bg-white/5 border-white/10"
          />
        </div>

        <div className="rounded-md border border-white/10">
          <Table>
            <TableHeader>
              <TableRow className="bg-white/5 hover:bg-white/5 border-b border-white/10">
                <TableHead className="text-cloud-text">Name</TableHead>
                <TableHead className="text-cloud-text">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow
                  key={item.id}
                  className="hover:bg-white/5 border-b border-white/10 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <TableCell className="text-cloud-text">{item.name}</TableCell>
                  <TableCell className="text-cloud-text">{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <DetailsPanel
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem?.name || ""}
          description="Item Details"
        >
          {selectedItem && (
            <>
              <div className="space-y-2">
                <p className="text-sm text-cloud-muted">Type</p>
                <p className="text-cloud-text">{selectedItem.type}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-cloud-muted">Status</p>
                <p className="text-cloud-text">{selectedItem.status}</p>
              </div>
            </>
          )}
        </DetailsPanel>
      </div>
    </BaseLayout>
  );
};

export default FlashArrays;
