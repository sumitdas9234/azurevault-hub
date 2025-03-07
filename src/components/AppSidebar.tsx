
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
            <SidebarMenu className="space-y-0">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title} className="border-b border-white/5">
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={`flex items-center gap-3 py-3 px-6 text-sm font-medium transition-all duration-200 ease-in-out ${
                          isActive
                            ? "bg-white/5 text-cloud-primary backdrop-blur-lg"
                            : "hover:bg-white/5 hover:backdrop-blur-lg text-cloud-text hover:text-cloud-primary"
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
