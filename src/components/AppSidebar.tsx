
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
import { useLocation } from "react-router-dom";

const menuItems = [
  { title: "Home", icon: LayoutDashboard, url: "/" },
  { title: "Compute", icon: Server, url: "/compute" },
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
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 p-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={`flex items-center gap-3 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out border border-transparent ${
                          isActive
                            ? "bg-white/5 text-cloud-primary backdrop-blur-lg border-white/10"
                            : "hover:bg-white/5 hover:backdrop-blur-lg hover:border-white/10 text-cloud-text hover:text-cloud-primary"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
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
