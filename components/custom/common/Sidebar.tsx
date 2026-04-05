"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Columns2, LogOut, Store, X } from "lucide-react";
import Image from "next/image";

export interface SideBarItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: number;
}

interface SidebarProps {
  className?: string;
  navItems: SideBarItem[];
  isMobile?: boolean;
  onClose?: () => void;
}

export default function Sidebar({
  className,
  navItems,
  isMobile = false,
  onClose,
}: SidebarProps) {
  const pathname = usePathname() || "/";
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Find all nav items that match the current pathname (exact or as a prefix)
  // then pick the one with the longest href (most specific)
  const matching = navItems.filter((item) => {
    if (!item.href) return false;
    if (pathname === item.href) return true;
    return pathname.startsWith(
      item.href.endsWith("/") ? item.href : item.href + "/",
    );
  });

  const activeItemHref =
    matching.sort((a, b) => b.href.length - a.href.length)[0]?.href ?? null;

  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col transition-all bg-slate-50 duration-300 h-screen border-r border-sidebar-border dark:bg-gray-900",
        isCollapsed && !isMobile ? "w-[80px]" : "w-[250px] sm:w-[280px]",
        className,
      )}
    >
      <div className="flex flex-col h-full p-3 sm:p-4 overflow-hidden">
        {/* Logo Section - Fixed at top */}
        <div
          className={cn(
            "flex items-center gap-2 px-2 sm:px-3 py-3 sm:py-4 transition-colors mb-4 sm:mb-6 shrink-0",
            isCollapsed && !isMobile
              ? "justify-center px-0"
              : "justify-between",
          )}
        >
          <Link
            href={"/portal"}
            className="text-3xl font-bold text-primary flex items-center"
            onClick={handleLinkClick}
          >
            {isCollapsed && !isMobile ? (
              <span className="w-[3rem]">
                <Image
                  src="/images/logo.png"
                  height={100}
                  width={50}
                  alt="eGrasp Logo"
                />
              </span>
            ) : (
              <>
                <Image
                  src="/images/logo.png"
                  height={100}
                  width={50}
                  alt="eGrasp Logo"
                />
                <span className="pt-4">eGrasp</span>
              </>
            )}
          </Link>
          {isMobile && onClose && (
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-sidebar-accent rounded-lg transition-colors shrink-0"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5 text-sidebar-foreground" />
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-5 pt-32 overflow-y-auto overflow-x-hidden">
          {navItems.map((item, idx) => {
            const isActive = item.href === activeItemHref;
            return (
              <Link
                key={idx}
                href={item.href}
                onClick={handleLinkClick}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 sm:py-3 rounded-sm transition-all duration-200",
                  isActive
                    ? "bg-[#EBF7FE] dark:bg-blue-900/30 text-[#017DC5] dark:text-blue-300 font-medium"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground dark:hover:bg-gray-800",
                  isCollapsed && !isMobile && "justify-center px-2",
                )}
                title={isCollapsed && !isMobile ? item.title : undefined}
              >
                <span className="shrink-0">{item.icon}</span>
                {(!isCollapsed || isMobile) && (
                  <span className="text-sm sm:text-base flex-1 truncate">
                    {item.title}
                  </span>
                )}
                {(!isCollapsed || isMobile) && item.badge != null && (
                  <span className="shrink-0 bg-[#EBF7FE] dark:bg-blue-900/30 text-[#017DC5] dark:text-blue-300 rounded-full px-2 py-0.5 text-xs font-medium min-w-[24px] text-center">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions - Fixed at bottom */}
        <div className="space-y-1 mt-3 pt-3 sm:pt-4 border-t border-sidebar-border shrink-0">
          {!isMobile && (
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 w-full dark:hover:bg-gray-800 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200",
                isCollapsed && "justify-center px-2",
              )}
              title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <Columns2 size={20} className="shrink-0" />
              {!isCollapsed && <span>Toggle sidebar</span>}
            </button>
          )}

          <button
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm sm:text-base font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-700 dark:hover:text-red-300 transition-all duration-200",
              isCollapsed && !isMobile && "justify-center px-2",
            )}
            title={isCollapsed && !isMobile ? "Logout" : undefined}
          >
            <LogOut size={20} className="shrink-0" />
            {(!isCollapsed || isMobile) && <span>Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
