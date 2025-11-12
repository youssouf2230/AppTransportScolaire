import { Bus } from "@/types/busService";
import { Pencil, Trash2, Eye } from "lucide-react";

interface BusTableProps {
    buses: Bus[];
    onEdit?: (bus: Bus) => void;
    onDelete?: (bus: Bus) => void;
    onView?: (bus: Bus) => void;
}

export default function BusTable({ buses, onEdit, onDelete, onView }: BusTableProps) {
    return (
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
            <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Bus</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Immatriculation</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Capacity</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
            </tr>
            </thead>
            <tbody>
            {buses.map((bus) => (
                <tr key={bus.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{bus.id}</td>
                    <td className="px-4 py-2">{bus.registrationNumber}</td>
                    <td className="px-4 py-2">{bus.capacityLimits}</td>
                    <td className="px-4 py-2">{bus.status}</td>
                    <td className="px-4 py-2 flex gap-2">
                        <button
                            onClick={() => onView?.(bus)}
                            className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600"
                            title="View"
                        >
                            <Eye size={16} />
                        </button>
                        <button
                            onClick={() => onEdit?.(bus)}
                            className="p-2 rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-600"
                            title="Edit"
                        >
                            <Pencil size={16} />
                        </button>
                        <button
                            onClick={() => onDelete?.(bus)}
                            className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600"
                            title="Delete"
                        >
                            <Trash2 size={16} />
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
