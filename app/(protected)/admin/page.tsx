"use client"

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {

    const onServerACtionClick = () =>{
        admin()
        .then((data) => {
            if(data.error){
                toast.error(data.error);
            }
            if(data.success){
                toast.success(data.success);
            }
        })
    }
        const onApiRouteClick = () => {
            fetch("/api/admin")
            .then((response) => {
                if(response.ok){
                    toast.success("Allowed API Route")
                } else{
                    toast.error("Forbidden API Route")                }
            })
        }

    return(
        <Card className="max-w-md mt-4">
            <CardHeader>
                <p className="text-xl font-semibold text-center">Admin</p>
            </CardHeader>
            <CardContent className="space-y-4">
            <RoleGate allowedRole={UserRole.ADMIN}>
                <FormSuccess message="you are allowed to see this content"/>
            </RoleGate>
            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className="text-sm font-medium">Admin-only API Route</p>
                <Button onClick={onApiRouteClick}>Click to test</Button>
            </div>
            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className="text-sm font-medium">Admin-only Server Action</p>
                <Button onClick={onServerACtionClick}>Click to test</Button>
            </div>
            </CardContent>
        </Card>
    )
}

export default AdminPage;