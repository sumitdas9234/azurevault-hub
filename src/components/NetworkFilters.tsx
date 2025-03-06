import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RouteType } from "@/pages/Networking";

interface NetworkFiltersProps {
  onSubnetChange: (value: string) => void;
  onRouteTypeChange: (value: RouteType) => void;
}

export function NetworkFilters({ onSubnetChange, onRouteTypeChange }: NetworkFiltersProps) {
  const subnets = [
    { id: "all", name: "All Subnets" },
    { id: "subnet-1", name: "10.0.0.0/24" },
    { id: "subnet-2", name: "172.16.0.0/16" },
    { id: "subnet-3", name: "192.168.1.0/24" },
  ];

  return (
    <div className="flex gap-4">
      <Select onValueChange={onSubnetChange} defaultValue="all">
        <SelectTrigger className="w-[200px] bg-white/5 border-white/10">
          <SelectValue placeholder="Select Subnet" />
        </SelectTrigger>
        <SelectContent className="bg-white border-gray-300">
          {subnets.map((subnet) => (
            <SelectItem
              key={subnet.id}
              value={subnet.id}
              className="text-black hover:bg-gray-100 focus:bg-gray-100"
            >
              {subnet.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => onRouteTypeChange(value as RouteType)} defaultValue="static">
        <SelectTrigger className="w-[200px] bg-white/5 border-white/10">
          <SelectValue placeholder="Route Type" />
        </SelectTrigger>
        <SelectContent className="bg-white border-gray-300">
          <SelectItem
            value="static"
            className="text-black hover:bg-gray-100 focus:bg-gray-100"
          >
            Static Routes
          </SelectItem>
          <SelectItem
            value="openshift"
            className="text-black hover:bg-gray-100 focus:bg-gray-100"
          >
            Openshift Routes
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
