"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Grid3X3,
  Inbox,
  Users,
  Package,
  LogIn,
  UserPlus,
  Settings,
  PersonStanding,
  BoxIcon,
  Boxes,
} from "lucide-react";
import Link from "next/link";
import { LoginButton } from "@/components/auth/login-btn";
import { ExitIcon } from "@radix-ui/react-icons";
import { LogoutButton } from "@/components/auth/logout-button";

const items = [
    {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboard
    },
    {
        title: "Server",
        url: "/server",
        icon: Boxes
    },
    {
        title: "Client",
        url: "/client",
        icon: BoxIcon
    },
    {
        title: "Admin",
        url: "/admin",
        icon: PersonStanding
    },
{
        title: "Settings",
        url: "/settings",
        icon: Settings
    }
]



interface SideBarProps {
  isOpen: boolean;
}

function SideBarF({isOpen}: SideBarProps) {
 
  return (
    <>

      {/* Sidebar */}
    <aside
        className={`fixed top-16 left-0 z-40 w-64 h-[calc(100vh-4rem)] transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 `}
        aria-label="Sidebar"
       >
        <div className="h-full flex flex-col px-3 py-10 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium flex-1">
            {items.map((item) => (
             <li key={item.title}>
               <Link
                href={item.url}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
               >
                <item.icon />
                <span className="ms-3">{item.title}</span>
               </Link>
             </li>
            ))}
          </ul>
         
       <LogoutButton>
        <ExitIcon/>
        <span>Logout</span>
       </LogoutButton>
        </div>
       </aside>

 
    </>
  );
}

export default SideBarF;
