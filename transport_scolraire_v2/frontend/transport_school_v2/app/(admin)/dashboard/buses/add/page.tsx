"use client";

import { useEffect, useState } from "react";
import AddBus from "@/components/dashboard/AddBus";
import { Driver } from "@/types/busService";

export default function AddBusPage() {
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const [loading, setLoading] = useState(true);

    // Charger les drivers libres au montage du composant
    useEffect(() => {
        const fetchFreeDrivers = async () => {
            try {
                const res = await fetch("http://localhost:8081/api/dashboard/buses/drivers/free");
                if (!res.ok) throw new Error("Erreur API free drivers");
                const data = await res.json();
                setDrivers(data);
            } catch (error) {
                console.error("Erreur lors du chargement des drivers libres :", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFreeDrivers();
    }, []);

    const handleAddBus = async (busData: any) => {
        try {
            const response = await fetch("http://localhost:8081/api/dashboard/buses", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(busData),
            });

            if (!response.ok) throw new Error("Erreur lors de l'ajout du bus");

            const data = await response.json();
            console.log("Bus added :", data);
            alert("Bus ajouté avec succès !");
        } catch (err) {
            console.error(err);
            alert("Impossible d'ajouter le bus");
        }
    };

    if (loading) {
        return <p className="p-6 text-gray-600">Chargement des drivers libres...</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">New Bus</h1>
            <AddBus onSubmit={handleAddBus} drivers={drivers} />
        </div>
    );
}
