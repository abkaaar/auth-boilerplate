"use client";
import { Navbar } from "./_components/navbar";
import React, { useState } from "react";
import {
  Package,
  Menu,
  Moon,
  X,
} from "lucide-react";
import SideBarF from "./_components/sidebar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-col w-full h-screen">
        {/* Top Navigation Bar - Fixed */}
        <div className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50">
          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            {!isOpen && (
                <button
                    onClick={toggleSidebar}
                    type="button"
                    className="inline-flex items-center w-fit p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span className="sr-only">Open sidebar</span>
                    <Menu className="w-6 h-6" />
                </button>
            )}
            {isOpen && (
                <button
                    onClick={toggleSidebar}
                    type="button"
                    className="inline-flex items-center w-fit p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span className="sr-only">Open sidebar</span>
                    <X className="w-6 h-6" />
                </button>
            )}

            <Package className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-semibold text-blue-600">Edupad</span>
          </div>
          <div className="flex items-center gap-2">
            <Moon className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* Sidebar - Collapsible */}
        <SideBarF isOpen = {isOpen} />

        {/* Main Content */}

        <div className="p-4 sm:ml-64 bg-slate-100">
          <div className="p-4 ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProtectedLayout;
