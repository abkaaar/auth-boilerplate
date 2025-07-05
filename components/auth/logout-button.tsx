"use client"

import { signOut } from "next-auth/react";

interface LogoutButtonProps {
    children?: React.ReactNode;
};

export const LogoutButton = ({
    children
}: LogoutButtonProps) => {
    const onclick = () => {
        signOut(); 
    };

    return (
        <span onClick={onclick} className="cursor-pointer flex items-center gap-4 bg-red-600 text-white p-2 rounded-md shadow-lg">
            {children}
        </span>
    )
}