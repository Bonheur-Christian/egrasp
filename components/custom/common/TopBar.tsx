"use client";

import { Search, Menu, User, Settings, LogOut, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next13-progressbar";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

interface TopBarProps {
  onMobileMenuToggle?: () => void;
  user?: {
    name: string;
    email?: string;
    avatar?: string;
  } | null;
}

export function TopBar({ onMobileMenuToggle, user }: TopBarProps) {
  const router = useRouter();

  const displayUser = user || {
    name: "Community Member",
    avatar: "",
  };

  const initials = displayUser.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleLogout = () => {
    console.log("User logged out");
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-slate-50 backdrop-blur supports-backdrop-filter:bg-slate-50/80">
      <div className="container flex h-20 items-center justify-between w-full mx-auto px-4">
        <div className="flex-1 max-w-md mx-4 hidden md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search skills, people, or topics..."
              className="pl-10 bg-muted/50 border-border py-5 ps-4 rounded-full focus:bg-slate-50"
            />
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={onMobileMenuToggle}
        >
          <Menu className="w-5 h-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-10 w-10 rounded-full overflow-hidden p-0 hover:bg-accent"
              >
                <Avatar className="h-9 w-9 border border-primary cursor-pointer">
                  <AvatarImage
                    src={displayUser.avatar}
                    alt={displayUser.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-slate-50 text-primary font-medium">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel className="flex flex-col gap-1">
                <div className="font-semibold">{displayUser.name}</div>
                {displayUser.email && (
                  <div className="text-xs text-muted-foreground truncate">
                    {displayUser.email}
                  </div>
                )}
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <Link
                  href="/profile"
                  className="cursor-pointer flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  My Profile
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link
                  href="/my-skills"
                  className="cursor-pointer flex items-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  My Skills & Contributions
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link
                  href="/settings"
                  className="cursor-pointer flex items-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={handleLogout}
                className="text-red-600 focus:text-red-600 cursor-pointer flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
