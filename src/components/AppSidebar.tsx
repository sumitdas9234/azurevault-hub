
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Server,
  Network,
  HardDrive,
  Activity,
  Cpu,
  Database,
  Cloud,
  MonitorDot,
  PieChart,
  BarChart,
  LineChart,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Home",
    icon: LayoutDashboard,
    url: "/",
    subItems: [
      { title: "Overview", url: "/", icon: PieChart },
      { title: "Analytics", url: "/analytics", icon: BarChart },
      { title: "Reports", url: "/reports", icon: LineChart },
    ],
  },
  {
    title: "Compute",
    icon: Server,
    url: "/compute",
    subItems: [
      { title: "Instances", url: "/compute/instances", icon: Cpu },
      { title: "Databases", url: "/compute/databases", icon: Database },
      { title: "Services", url: "/compute/services", icon: Cloud },
    ],
  },
  { title: "Storage", icon: HardDrive, url: "/storage" },
  { title: "Networking", icon: Network, url: "/networking" },
  { title: "Monitoring", icon: Activity, url: "/monitoring" },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="px-0">
            <SidebarMenu className="space-y-0">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url;
                const hasSubItems = item.subItems && item.subItems.length > 0;

                return (
                  <SidebarMenuItem key={item.title} className="border-b border-white/5 w-full">
                    <SidebarMenuButton asChild className="w-full">
                      <a
                        href={item.url}
                        className={`flex items-center gap-3 py-3 px-6 text-sm font-medium transition-all duration-200 ease-in-out w-full ${
                          isActive
                            ? "bg-white/5 text-cloud-primary backdrop-blur-lg"
                            : "hover:bg-white/5 hover:backdrop-blur-lg text-cloud-text hover:text-cloud-primary"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    {hasSubItems && (
                      <SidebarMenuSub>
                        {item.subItems.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              href={subItem.url}
                              isActive={location.pathname === subItem.url}
                            >
                              <subItem.icon className="h-4 w-4" />
                              <span>{subItem.title}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
