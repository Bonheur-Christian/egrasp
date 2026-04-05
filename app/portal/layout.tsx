"use client";
import Sidebar from "@/components/custom/common/Sidebar";
import { TopBar } from "@/components/custom/common/TopBar";
import { SidebarItems } from "@/constants/SidebarItems";
import { useState } from "react";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    
          <div className="flex h-screen w-full overflow-hidden bg-slate-50">
            {/* Desktop Sidebar - Always visible on md+ screens */}
            <Sidebar
              navItems={SidebarItems}
              className="hidden md:flex flex-none"
            />

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="md:hidden fixed inset-0 bg-black/50 z-40"
                  onClick={() => setIsSidebarOpen(false)}
                />
                
                {/* Sidebar */}
                <div className="md:hidden fixed inset-y-0 left-0 z-50 w-64">
                    
                  <Sidebar
                    navItems={SidebarItems}
                    className="flex shadow-xl"
                    isMobile
                    onClose={() => setIsSidebarOpen(false)}
                  />
                </div>
              </>
            )}

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <TopBar onMobileMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
              <main className="flex-1 overflow-y-auto p-3 sm:p-4">
                {children}</main>
            </div>
          </div>
       
  );
}