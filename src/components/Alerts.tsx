import React from "react";
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
import { Badge } from "@/components/ui/badge";
import { AlertCircle, AlertTriangle, Info, BellOff } from "lucide-react";

interface AlertProps {
  id: string;
  system: string;
  severity: "high" | "medium" | "low";
  message: string;
  time: string;
}

const Alerts = () => {
  const alertsData: AlertProps[] = [
    {
      id: "alert-1",
      system: "System D",
      severity: "high",
      message: "High CPU Usage",
      time: "5 minutes ago",
    },
    {
      id: "alert-2",
      system: "System E",
      severity: "medium",
      message: "Memory usage exceeding threshold",
      time: "10 minutes ago",
    },
    {
      id: "alert-3",
      system: "System I",
      severity: "low",
      message: "Disk space nearing capacity",
      time: "30 minutes ago",
    },
    {
      id: "alert-4",
      system: "System D",
      severity: "high",
      message: "Network latency spike detected",
      time: "1 hour ago",
    },
  ];

  const severityIcons = {
    high: { icon: AlertCircle, color: "text-red-500" },
    medium: { icon: AlertTriangle, color: "text-amber-500" },
    low: { icon: Info, color: "text-green-500" },
  };

  return (
    <div className="mx-auto">
      <Table className="bg-white/5 backdrop-blur-lg rounded-lg shadow-md border-none">
        <TableBody>
          {alertsData.map((alert) => {
            const SeverityIcon = severityIcons[alert.severity].icon;
            const iconColorClass = severityIcons[alert.severity].color;

            return (
              <TableRow key={alert.id} className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                <TableCell className="font-medium">{alert.system}</TableCell>
                <TableCell>
                  <SeverityIcon className={`w-4 h-4 ${iconColorClass}`} />
                </TableCell>
                <TableCell className="text-right text-xs text-muted-foreground">{alert.time}</TableCell>
                <TableCell className="text-right">
                  <BellOff className="w-4 h-4 text-muted-foreground cursor-pointer" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Alerts;
