"use client";
import React from "react";
import SideBarF from "./_components/sidebar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  

  return (
    <>
      <div className="bg-gray-50 flex flex-col w-full h-screen">
        {/* Sidebar - Collapsible */}
        <SideBarF  />
        {/* Main Content */}
        <div className="sm:ml-64 bg-slate-100 h-full p-4 flex justify-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default ProtectedLayout;
