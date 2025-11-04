"use client";

import { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Image from "next/image";

interface Driver {
    firstName: string;
    lastName: string;
}

interface Bus {
    id: number;
    registrationNumber: string;
    capacity: number;
    status: string;
    urlImage: string;
    driver?: Driver;
    latitude?: number;
    longitude?: number;
}

interface BusDetailsProps {
    id: string;
}

export default function BusDetails({ id }: BusDetailsProps) {
    const [bus, setBus] = useState<Bus | null>(null);
    const [location, setLocation] = useState({ lat: 33.5731, lng: -7.5898 });

    // Chargement de l'API Google Maps
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    });

    // Récupération des infos bus
    useEffect(() => {
        fetch(`http://localhost:8081/api/buses/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setBus(data);
                if (data.latitude && data.longitude) {
                    setLocation({ lat: data.latitude, lng: data.longitude });
                }
            })
            .catch((err) => console.error("Erreur lors du fetch bus:", err));
    }, [id]);

    if (!isLoaded) return <p className="text-center">Chargement de la carte...</p>;
    if (!bus) return <p className="text-center">Chargement des détails du bus...</p>;

    return (
        <div className="container mx-auto p-6 space-y-6">
            {/* En-tête */}
            <h1 className="text-3xl font-bold text-gray-900">
                Bus scolaire : {bus.registrationNumber}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Image du bus */}
                <div className="rounded-xl shadow-lg overflow-hidden">
                    <Image
                        src={bus.urlImage}
                        alt={bus.registrationNumber}
                        width={600}
                        height={400}
                        className="object-cover w-full"
                    />
                </div>

                {/* Infos du bus */}
                <div className="bg-white rounded-xl shadow p-6 space-y-3">
                    <p className="text-lg">
                        <span className="font-semibold">Immatriculation :</span>{" "}
                        {bus.registrationNumber}
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold">Capacité :</span> {bus.capacity} places
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold">Chauffeur :</span>{" "}
                        {bus.driver
                            ? `${bus.driver.firstName} ${bus.driver.lastName}`
                            : "Non attribué"}
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold">Statut :</span> {bus.status}
                    </p>
                </div>
            </div>

            {/* Carte Google Maps */}
            <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
                <GoogleMap
                    zoom={15}
                    center={location}
                    mapContainerClassName="w-full h-full"
                >
                    <Marker position={location} />
                </GoogleMap>
            </div>
        </div>
    );
}
