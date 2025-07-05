"use client"

import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons";

import { 
    DropdownMenu, DropdownMenuContent,
    DropdownMenuItem, DropdownMenuTrigger
 } from "@radix-ui/react-dropdown-menu";
 
 import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "./logout-button";

 export const UserButton = () => {
    const user = useCurrentUser();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage className="h-8 rounded-md" src={user?.image || ""} />
                    <AvatarFallback className="bg-sky-500">
                        <FaUser className="text-black" />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="end">
                <LogoutButton>
                    <DropdownMenuItem className="flex items-center bg-white p-2 rounded-sm shadow-sm">
                        <ExitIcon className="h-4 w-4 mr-2" />
                        Logout
                    </DropdownMenuItem>
                </LogoutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
 }