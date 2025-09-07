"use client";
import HeroSection from "@/components/home/HeroSection";
import BusCard from "@/components/bus/bus-card";
import { fetchBusList } from "@/actions/busList";
import { Bus } from "@/types/busService";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
    const [buses, setBuses] = useState<Bus[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const busesPerPage = 6;

    useEffect(() => {
        async function loadBuses() {
            try {
                const data = await fetchBusList();
                setBuses(Array.isArray(data) ? data : []);
            } catch {
                setBuses([]);
            } finally {
                setLoading(false);
            }
        }
        loadBuses();
    }, []);

    const indexOfLastBus = currentPage * busesPerPage;
    const indexOfFirstBus = indexOfLastBus - busesPerPage;
    const currentBuses = buses.slice(indexOfFirstBus, indexOfLastBus);
    const totalPages = Math.ceil(buses.length / busesPerPage);

    const nextPage = () => { if (currentPage < totalPages) setCurrentPage(prev => prev + 1); };
    const prevPage = () => { if (currentPage > 1) setCurrentPage(prev => prev - 1); };

    return (
        <>
            <HeroSection />
            <div className="container mx-auto px-6 py-8">
                {loading ? (
                    <p className="text-center text-gray-600">Chargement des bus...</p>
                ) : buses.length === 0 ? (
                    <p className="text-center text-gray-600">Aucun bus trouvé</p>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentBuses.map(bus => (
                                <BusCard key={bus.id} {...bus} />
                            ))}
                        </div>

                        <div className="flex justify-end items-center space-x-2 mt-10">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={prevPage}
                                disabled={currentPage === 1}
                                className="rounded-full border-gray-300 hover:bg-blue-100 hover:text-blue-600 transition"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </Button>
                            <span className="text-gray-700 font-semibold px-2">
                {currentPage} / {totalPages}
              </span>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={nextPage}
                                disabled={currentPage === totalPages}
                                className="rounded-full border-gray-300 hover:bg-blue-100 hover:text-blue-600 transition"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
