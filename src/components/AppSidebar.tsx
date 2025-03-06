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
            <SidebarMenu className="my-4">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title} className="py-1">
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={`flex items-center gap-3 py-2 px-3 text-sm font-medium rounded-lg transition-colors duration-200 ease-in-out ${
                          isActive
                            ? "bg-cloud-primary/20 text-cloud-primary"
                            : "hover:bg-cloud-primary/10 text-cloud-text hover:text-cloud-primary"
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
