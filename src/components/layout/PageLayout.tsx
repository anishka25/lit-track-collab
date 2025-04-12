
import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/30">
        <AppSidebar />
        <ScrollArea className="flex-1 h-screen">
          <main className="container py-6 md:py-10 max-w-7xl">
            {children}
          </main>
        </ScrollArea>
      </div>
    </SidebarProvider>
  );
}
