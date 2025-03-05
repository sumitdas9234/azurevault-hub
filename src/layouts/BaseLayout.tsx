
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopNav } from "@/components/TopNav";

interface BaseLayoutProps {
  children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-cloud-background text-cloud-text">
        <AppSidebar />
        <main className="flex-1">
          <TopNav />
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
