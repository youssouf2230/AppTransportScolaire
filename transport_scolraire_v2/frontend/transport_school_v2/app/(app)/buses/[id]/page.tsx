"use client";

import { useParams } from "next/navigation";
import BusDetails from "@/components/bus/BusDetails";

export default function BusDetailsPage() {
    const { id } = useParams();

    return (
        <div className="py-8">
            <BusDetails id={id as string} />
        </div>
    );
}
