
import { Input } from "@/components/ui/input";
import { Bell, Search, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function TopNav() {
  return (
    <div className="border-b bg-cloud-primary">
      <div className="flex h-16 items-center px-4 gap-4">
        <SidebarTrigger className="text-white hover:text-white/80" />
        
        <div className="flex-1 flex items-center justify-end gap-4 md:gap-8">
          <form className="flex items-center w-96">
            <div className="relative w-full">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-cloud-muted" />
              <Input
                placeholder="Search..."
                className="pl-8 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </form>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-white/80 hover:bg-white/10">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-white/80 hover:bg-white/10">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-white/80 hover:bg-white/10">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
