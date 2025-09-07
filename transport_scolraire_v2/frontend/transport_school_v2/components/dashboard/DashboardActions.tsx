import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Users, FileText, ShoppingBag } from "lucide-react";
import Link from "next/link";

const actions = [
    {
        title: "User Management",
        description: "Add or remove users",
        icon: Users,
        href: "/dashboard/users",
    },
    {
        title: "Settings",
        description: "Update system preferences",
        icon: Settings,
        href: "/dashboard/settings",
    },
    {
        title: "Reports",
        description: "View recent reports",
        icon: FileText,
        href: "/dashboard/reports",
    },
    {
        title: "Add Bus",
        description: "Add a new bus",
        icon: ShoppingBag,
        href: "/dashboard/bus",
    },
    {
        title: "Add student",
        description: "Add a new student",
        icon: ShoppingBag,
        href: "/dashboard/bus",
    },
    {
        title: "Students",
        description: "List students",
        icon: ShoppingBag,
        href: "/dashboard/students",
    }
];

export function DashboardActions() {
    return (
        <div className="bg-white/80 px-6 py-6 rounded-2xl shadow-lg border">
            <h1 className="text-lg font-semibold mb-6">Quick Actions</h1>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                {actions.map((action, idx) => (
                    <Link href={action.href} key={idx}>
                        <Card className="cursor-pointer rounded-2xl h-32 grid place-items-center hover:bg-gray-100 transition">
                            <CardHeader className="flex flex-col items-center justify-center">
                                <action.icon className="w-6 h-6 text-gray-700 mb-2" />
                                <CardTitle className="text-sm font-extralight text-center text-gray-500">
                                    {action.title}
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
