"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import CustomSidebar from "@/components/custom-sidebar";
import { usePathnameInfoContext } from "@/context/pathname-context";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  const { currentPathInfo } = usePathnameInfoContext();

  return (
    <SidebarProvider>
      <CustomSidebar currentPath={currentPathInfo} />
      <div className="w-full relative">
        <div className="fixed">
          <SidebarTrigger className="absolute top-4 left-3" />
        </div>
        <main className="w-full h-full py-5 px-5 flex">
          <div className="w-full content-center">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
