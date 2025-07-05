 "use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { UserButton } from "@/components/auth/user-button"

 export const Navbar = () => {

    const pathname = usePathname();
    return(
        <nav className="bg-secondary flex justify-between gap-6 items-center mx-4 p-2 rounded-xl max-w-md shadow-sm">
            <div className="flex gap-2">
                <Button 
                    asChild
                    variant={pathname === "/server" ? "default":"outline"}
                >
                    <Link href="/server">
                    server
                    </Link>
                </Button>
                <Button 
                    asChild
                    variant={pathname === "/client" ? "default":"outline"}
                >
                    <Link href="/client">
                    client
                    </Link>
                </Button>
                <Button 
                    asChild
                    variant={pathname === "/admin" ? "default":"outline"}
                >
                    <Link href="/admin">
                    admin
                    </Link>
                </Button>
                <Button 
                    asChild
                    variant={pathname === "/settings" ? "default":"outline"}
                >
                    <Link href="/settings">
                    settings
                    </Link>
                </Button>
            </div>
            <UserButton />
            </nav>
    )
 }