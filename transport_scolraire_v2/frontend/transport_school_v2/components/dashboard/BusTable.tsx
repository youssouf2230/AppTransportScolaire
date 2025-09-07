import { Bus } from "@/types/busService";

interface BusTableProps {
    buses: Bus[];
}

export default function BusTable({ buses }: BusTableProps) {
    return (
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
            <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Bus</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Immatriculation</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Capacité</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
            </tr>
            </thead>
            <tbody>
            {buses.map(bus => (
                <tr key={bus.id} className="border-b">
                    <td className="px-4 py-2">{bus.id}</td>
                    <td className="px-4 py-2">{bus.registrationNumber}</td>
                    <td className="px-4 py-2">{bus.capacity}</td>
                    <td className="px-4 py-2">{bus.status}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
