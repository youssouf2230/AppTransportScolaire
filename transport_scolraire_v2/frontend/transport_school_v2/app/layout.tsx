"use client";

import "./globals.css";
import Header from "@/components/layout/Header";
import BusCard from "@/components/bus/bus-card";
import HeroSection from "@/components/home/HeroSection";
import { Footer } from "@/components/layout/Footer";
import { fetchBusList } from "@/actions/busList";
import { Bus } from "@/types/busService";
import { useEffect, useState } from "react";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    //  Définir l'état des bus
    const [buses, setBuses] = useState<Bus[]>([]);
    const [loading, setLoading] = useState(true);

    //  Récupération des bus au montage
    useEffect(() => {
        async function loadBuses() {
            try {
                const data = await fetchBusList();
                console.log("Réponse API :", data); // Debug
                // On vérifie si c'est bien un tableau
                if (Array.isArray(data)) {
                    setBuses(data);
                } else {
                    console.error("La réponse API n'est pas un tableau:", data);
                    setBuses([]);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des bus:", error);
                setBuses([]);
            } finally {
                setLoading(false);
            }
        }

        loadBuses();
    }, []);

    return (
        <html lang="fr">
        <body className="flex flex-col min-h-screen bg-gray-100">
        <Header />

        <main className="flex-grow pt-24 px-6">
            <HeroSection />

            <div className="container mx-auto px-6 py-8">
                {loading ? (
                    <p className="text-center text-gray-600">
                        Chargement des bus...
                    </p>
                ) : buses.length === 0 ? (
                    <p className="text-center text-gray-600">
                        Aucun bus trouvé
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {buses.map((bus) => (
                            <BusCard key={bus.id} {...bus} />
                        ))}
                    </div>
                )}
            </div>

            {children}
        </main>

        <Footer />
        </body>
        </html>
    );
}
