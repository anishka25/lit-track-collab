
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  BookOpen,
  CalendarDays,
  Home,
  LayoutDashboard,
  Settings,
  SquareKanban,
  Users,
  Menu,
  GanttChartSquare,
  BookText,
  FileText,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: <Home className="w-5 h-5" /> },
  { label: "Tasks", path: "/tasks", icon: <LayoutDashboard className="w-5 h-5" /> },
  { label: "Kanban", path: "/kanban", icon: <SquareKanban className="w-5 h-5" /> },
  { label: "Timeline", path: "/timeline", icon: <GanttChartSquare className="w-5 h-5" /> },
  { label: "Calendar", path: "/calendar", icon: <CalendarDays className="w-5 h-5" /> },
  { label: "Team", path: "/team", icon: <Users className="w-5 h-5" /> },
  { label: "Experiments", path: "/experiments", icon: <FileText className="w-5 h-5" /> },
  { label: "Literature", path: "/literature", icon: <BookOpen className="w-5 h-5" /> },
  { label: "Reading", path: "/reading", icon: <BookText className="w-5 h-5" /> },
  { label: "Settings", path: "/settings", icon: <Settings className="w-5 h-5" /> },
];

export function AppSidebar() {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  return (
    <>
      <Sidebar className="border-r">
        <SidebarHeader className="flex h-16 items-center px-6 border-b">
          <div className="flex items-center">
            <div className="font-bold text-lg">
              <span className="text-resach-700">Re</span>
              <span className="text-resach-600">sach</span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <ScrollArea className="h-[calc(100vh-9rem)]">
            <div className="space-y-1 p-2">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-accent",
                      isActive ? "bg-accent text-accent-foreground" : "text-foreground/60",
                      "animate-in-delay-" + Math.min(index + 1, 4)
                    )
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </ScrollArea>
        </SidebarContent>
        <SidebarFooter className="border-t p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-resach-100 flex items-center justify-center">
                <span className="font-semibold text-sm text-resach-700">JP</span>
              </div>
              <div className="text-sm">
                <p className="font-medium">John Researcher</p>
                <p className="text-xs text-muted-foreground">Team Lead</p>
              </div>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button 
          variant="outline" 
          size="icon"
          className="rounded-full"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </>
  );
}
