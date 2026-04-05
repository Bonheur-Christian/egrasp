import { SideBarItem } from "@/components/custom/common/Sidebar";
import {
  FileChartColumn,
  Home,
  Settings,
  MessageCircleDashed,
  Bell,
  Bookmark,
  BadgePlus,
} from "lucide-react";

export const SidebarItems: SideBarItem[] = [
  {
    title: "Communities",
    href: "/portal/communities",
    icon: <Home size={20} />,
  },
  {
    title: "Create / Post",
    href: "/portal/create",
    icon: <BadgePlus size={20} />,
  },

  {
    title: "Bookmarks",
    href: "/portal/bookmarks",
    icon: <Bookmark size={20} />,
  },
  {
    title: "Messages",
    href: "/portal/messages",
    icon: <MessageCircleDashed size={20} />,
    badge: 10,
  },
  {
    title: "Notifications",
    href: "/portal/notifications",
    icon: <Bell size={20} />,
    badge: 3,
  },
];
