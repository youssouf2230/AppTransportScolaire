"use client";

import { useEffect, useState } from "react";
import BusTable from "@/components/dashboard/BusTable";
import { Bus } from "@/types/busService";

export default function BusesPage() {
    const [buses, setBuses] = useState<Bus[]>([]);
    const [loading, setLoading] = useState(true);

    // Charger les bus
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

    //  Fonction de suppression
    const handleDelete = async (bus: Bus) => {
        const confirmDelete = window.confirm(`Voulez-vous vraiment supprimer le bus ${bus.registrationNumber} ?`);
        if (!confirmDelete) return;

        try {
            const res = await fetch(`http://localhost:8081/api/dashboard/buses/delete/${bus.id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                // Supprime le bus localement pour mettre à jour la table
                setBuses(buses.filter((b) => b.id !== bus.id));
                alert("Bus supprimé avec succès !");
            } else {
                alert("Erreur lors de la suppression du bus!");
            }
        } catch (error) {
            console.error("Erreur suppression bus:", error);
            alert("Impossible de contacter le serveur! ");
        }
    };

    if (loading) {
        return <p className="text-center">Chargement des bus...</p>;
    }

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold">Liste des Bus</h2>
            <BusTable
                buses={buses}
                onDelete={handleDelete}
            />
        </div>
    );
}
