"use client";

import { DashboardActions } from "@/components/dashboard/DashboardActions";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold">Dashboard</h2>
            <DashboardActions />
        </div>
    );
}
