
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Server,
  Database,
  Network,
  Settings,
  HardDrive,
  Shield,
  Activity,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/" },
  { title: "Compute", icon: Server, url: "#compute" },
  { title: "Database", icon: Database, url: "#database" },
  { title: "Networking", icon: Network, url: "#networking" },
  { title: "Storage", icon: HardDrive, url: "#storage" },
  { title: "Security", icon: Shield, url: "#security" },
  { title: "Monitoring", icon: Activity, url: "#monitoring" },
  { title: "Settings", icon: Settings, url: "#settings" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Cloud Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3 text-cloud-text hover:text-cloud-primary transition-colors">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
