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
        className={`fixed top-0 left-0 z-40 w-64 h-[calc(100vh-4rem)] transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
       >
        <div className="h-full flex flex-col p-3 overflow-y-auto bg-white dark:bg-gray-800">
            <div className="flex p-2 mb-6">
              <Package className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-semibold text-blue-600">
                Edupad
              </span>
            </div>
        <div className="flex flex-col h-full">
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
          <div className="mt-auto">
            <LogoutButton>
              <ExitIcon />
              <span>Logout</span>
            </LogoutButton>
          </div>
        </div>
        </div>
       </aside>

 
    </>
  );
}

export default SideBarF;
