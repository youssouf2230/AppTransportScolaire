"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {Users, Settings, FileText, ShoppingBag, Truck, Bus} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: FileText },
    { label: "Students", href: "/dashboard/student", icon: Users },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
    { label: "Buses", href: "/dashboard/buses", icon: Bus },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg fixed top-0 left-0 h-full flex flex-col">
                <div className="p-6 border-b">
                    <h1 className="text-2xl font-bold">GestionBus Admin</h1>
                </div>
                <nav className="flex-1 p-6 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition",
                                pathname === item.href ? "bg-gray-200 font-semibold" : ""
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main content */}
            <main className="ml-64 flex-1 p-6">{children}</main>
        </div>
    );
}
