
import { Input } from "@/components/ui/input";
import { Bell, Search, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function TopNav() {
  return (
    <div className="border-b border-cloud-background/10 bg-cloud-background/5 backdrop-blur supports-[backdrop-filter]:bg-cloud-background/5">
      <div className="flex h-16 items-center px-4 gap-4">
        <SidebarTrigger />
        
        <div className="flex-1 flex items-center justify-end gap-4 md:gap-8">
          <form className="flex items-center max-w-sm">
            <div className="relative w-full">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-cloud-muted" />
              <Input
                placeholder="Search..."
                className="pl-8 bg-cloud-background/5"
              />
            </div>
          </form>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-cloud-muted hover:text-cloud-text">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-cloud-muted hover:text-cloud-text">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-cloud-muted hover:text-cloud-text">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
