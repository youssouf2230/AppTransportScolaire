"use client";

import { useEffect, useState } from "react";
import BusTable from "@/components/dashboard/BusTable";
import { Bus } from "@/types/busService";

export default function BusesPage() {
    const [buses, setBuses] = useState<Bus[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8081/api/buses")
            .then((res) => res.json())
            .then((data) => {
                setBuses(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur fetch buses:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center">Chargement des bus...</p>;
    }

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold">Liste des Bus</h2>
            <BusTable buses={buses} />
        </div>
    );
}
