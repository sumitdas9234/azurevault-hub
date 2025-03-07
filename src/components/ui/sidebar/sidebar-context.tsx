
import * as React from "react";
import type { SidebarContext } from "./types";

const SidebarContextValue = React.createContext<SidebarContext | null>(null);

export function useSidebar() {
  const context = React.useContext(SidebarContextValue);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

export { SidebarContextValue as SidebarContext };

