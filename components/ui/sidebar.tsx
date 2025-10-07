"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Code2Icon,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music2Icon,
  Settings2Icon,
  VideoIcon,
} from "lucide-react";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
const routes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-blue-500",
  },
  {
    label: "Conversation",
    href: "/dashboard",
    icon: MessageSquare,
    color: "text-pink-500",
  },
  {
    label: "Generate Video",
    href: "/dashboard",
    icon: VideoIcon,
    color: "text-green-500",
  },
  {
    label: "Generate Image",
    href: "/dashboard",
    icon: ImageIcon,
    color: "text-red-500",
  },
  {
    label: "Generate Music",
    href: "/dashboard",
    icon: Music2Icon,
    color: "text-purple-500",
  },
  {
    label: "Generate Code Pattern",
    href: "/dashboard",
    icon: Code2Icon,
    color: "text-orange-500",
  },
  {
    label: "Settings",
    href: "/dashboard",
    icon: Settings2Icon,
    color: "text-gray-500",
  },
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      {" "}
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center mb-2 pl-2">
          <div className="relative mr-2">
            <Image width="100" height="100" alt="logo" src="/logo.png" />
          </div>
          <h2 className={cn("text-3xl font-bold", montserrat.className)}>
            Tensai
          </h2>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                <span className="font-medium">{route.label}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* <Link
          href="/dashboard"
          className="block py-2 px-4 rounded hover:bg-gray-700"
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/profile"
          className="block py-2 px-4 rounded hover:bg-gray-700"
        >
          Profile
        </Link>
        <Link
          href="/dashboard/settings"
          className="block py-2 px-4 rounded hover:bg-gray-700"
        >
          Settings
        </Link> */}
      </div>
    </div>
  );
};

export default Sidebar;
