import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginButton } from "@/components/auth/login-btn";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#1f75ff] text-white">
      <div className="h-full flex items-center justify-center">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-2xl font-bold">Auth System</h1>
            <p>
              This is an advanced authentication and authorization system built
              using react, nextjs, Authjs, shadcn-UI, prisma and Neon-DB
            </p>
          </div>
          <div className="grid gap-4">
            <LoginButton mode="modal" asChild>
              <Button variant="secondary" size="lg">
                Get started
              </Button>
            </LoginButton>
          </div>
        </div>
      </div>
    </main>
  );
}
