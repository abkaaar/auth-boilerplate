import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "./ui/card";


interface UserInfoProps{
    user?: ExtendedUser;
    label:  string;
};

export const UserInfo = ({
    user,
    label,
}: UserInfoProps) => {
    return(
        <Card className="mt-4 max-w-[600px] shadow-md">
            <CardHeader>
                <p className="text-xl text-center font-semibold">{label}</p>
            </CardHeader>
            <CardContent className="space-y-4"> 
                <div className="flex flex-row  items-center justify-between rounded-lg border p-3 shadow-sm">
                    <p className="text-sm font-medium">ID</p>
                    <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">{user?.id}</p>
                </div>
                <div className="flex flex-row  items-center justify-between rounded-lg border p-3 shadow-sm">
                    <p className="text-sm font-medium">Email</p>
                    <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">{user?.email}</p>
                </div>
                <div className="flex flex-row  items-center justify-between rounded-lg border p-3 shadow-sm">
                    <p className="text-sm font-medium">Name</p>
                    <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">{user?.name}</p>
                </div>
                <div className="flex flex-row  items-center justify-between rounded-lg border p-3 shadow-sm">
                    <p className="text-sm font-medium">Role</p>
                    <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">{user?.role}</p>
                </div>
                {/* <div className="flex flex-row  items-center justify-between rounded-lg border p-3 shadow-sm">
                    <p className="text-sm font-medium">Two Factor Authentication</p>
                    <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">{user?.isTwoFactorEnabled ? "ON" : "OFF"}</p>
                </div> */}
            </CardContent>
        </Card>
    )
}