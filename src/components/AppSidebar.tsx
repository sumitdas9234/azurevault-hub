
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
  { title: "Compute", icon: Server, url: "#compute" },
  { title: "Storage", icon: HardDrive, url: "#storage" },
  { title: "Networking", icon: Network, url: "#networking" },
  { title: "Monitoring", icon: Activity, url: "#monitoring" },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="w-52">
      <div className="flex justify-center py-6 mb-4 border-b border-cloud-background/10">
        <img 
          src="/placeholder.svg" 
          alt="Cloud Platform Logo" 
          className="h-8"
        />
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url || 
                               (location.pathname === "/" && item.url === "/");
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a 
                        href={item.url} 
                        className={`flex items-center gap-3 text-cloud-text hover:text-cloud-primary transition-colors ${
                          isActive ? "bg-cloud-background/10 text-cloud-primary" : ""
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
