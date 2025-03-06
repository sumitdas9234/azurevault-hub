import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopNav } from "@/components/TopNav";
import { useState } from "react";

interface BaseLayoutProps {
  children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-cloud-background text-cloud-text">
        {isSidebarVisible && <AppSidebar />}
        <main className="flex-1">
          <TopNav toggleSidebar={() => setSidebarVisible(!isSidebarVisible)} />
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
