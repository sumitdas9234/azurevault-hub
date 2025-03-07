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
  Layers,
  Router,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const menuItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    url: "/",
  },
  {
    title: "Compute",
    icon: Server,
    url: "/compute",
    subItems: [
      { title: "Testbeds", url: "/compute/testbeds", icon: Layers },
      { title: "vCenters", url: "/compute/vcenters", icon: Cloud },
      { title: "vSphere Clusters", url: "/compute/vsphere", icon: Server },
    ],
  },
  {
    title: "Storage",
    icon: HardDrive,
    url: "/storage",
    subItems: [
      { title: "Datastores", url: "/storage/datastores", icon: Database },
      { title: "FlashArrays", url: "/storage/flasharrays", icon: HardDrive },
      { title: "FlashBlades", url: "/storage/flashblades", icon: HardDrive },
      { title: "Minios", url: "/storage/minios", icon: HardDrive },
    ],
  },
  {
    title: "Networking",
    icon: Network,
    url: "/networking",
    subItems: [
      { title: "Subnets", url: "/networking/subnets", icon: Router },
      { title: "Routes", url: "/networking/routes", icon: Router },
    ],
  },
  {
    title: "Monitoring",
    icon: Activity,
    url: "/monitoring",
    subItems: [
      { title: "Alerts", url: "/monitoring/alerts", icon: AlertTriangle },
      { title: "System Status", url: "/monitoring/systemstatus", icon: MonitorDot },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const storedMenuState = localStorage.getItem("sidebarMenuState");
    if (storedMenuState) {
      setOpenSubMenu(JSON.parse(storedMenuState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarMenuState", JSON.stringify(openSubMenu));
  }, [openSubMenu]);

  const toggleSubMenu = (title: string) => {
    setOpenSubMenu((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <Sidebar className="mt-0 bg-[#13161E]/20">
      <SidebarContent>
        <div className="flex items-center justify-center h-16 bg-cloud-primary text-white font-bold">
          Private Cloud
        </div>
        <SidebarGroup>
          <SidebarGroupContent className="px-0">
            <SidebarMenu className="space-y-0">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url;
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const isSubMenuOpen = openSubMenu[item.title] || false;

                return (
                  <SidebarMenuItem key={item.title} className="w-full">
                    <SidebarMenuButton asChild className="w-full">
                      <NavLink
                        to={item.url}
                        className={`flex items-center justify-between gap-3 py-3 px-6 text-sm font-medium transition-all duration-200 ease-in-out w-full ${
                          isActive
                            ? "bg-white/5 text-cloud-primary backdrop-blur-lg"
                            : "hover:bg-white/5 hover:backdrop-blur-lg text-cloud-text hover:text-cloud-primary"
                        }`}
                        onClick={(e) => {
                          if (hasSubItems) {
                            e.preventDefault();
                            toggleSubMenu(item.title);
                          }
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5" />
                          <span>{item.title}</span>
                        </div>
                        {hasSubItems && (
                          <span>{isSubMenuOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}</span>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                    {hasSubItems && isSubMenuOpen && (
                      <SidebarMenuSub>
                        {item.subItems.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              className="py-4 gap-4"
                            >
                              <NavLink
                                to={subItem.url}
                                className={`${location.pathname === subItem.url ? "bg-white/5 text-cloud-primary backdrop-blur-lg" : "hover:bg-white/5 hover:backdrop-blur-lg text-cloud-text hover:text-cloud-primary"} flex w-full items-center gap-3 px-6 text-sm font-medium transition-all duration-200 ease-in-out`}
                              >
                                <subItem.icon className="h-4 w-4" />
                                <span>{subItem.title}</span>
                              </NavLink>
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
