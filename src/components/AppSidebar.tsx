
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Server,
  Network,
  HardDrive,
  Activity,
} from "lucide-react";

const menuItems = [
  { title: "Home", icon: LayoutDashboard, url: "/" },
  { title: "Compute", icon: Server, url: "#compute" },
  { title: "Storage", icon: HardDrive, url: "#storage" },
  { title: "Networking", icon: Network, url: "#networking" },
  { title: "Monitoring", icon: Activity, url: "#monitoring" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
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
