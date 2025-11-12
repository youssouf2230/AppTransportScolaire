import { Student } from "@/types/studentService";
import { Pencil, Trash2, Eye } from "lucide-react";

interface StudentTableProps {
    students: Student[];
    onEdit?: (student: Student) => void;
    onDelete?: (student: Student) => void;
    onView?: (student: Student) => void;
}

export default function StudentTable({ students, onEdit, onDelete, onView }: StudentTableProps) {
    return (
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
            <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Names</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Code Massar</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Phone</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Bus ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Actions</th>
            </tr>
            </thead>
            <tbody>
            {students.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{student.id}</td>
                    <td className="px-4 py-2">{student.firstName} {student.lastName}</td>
                    <td className="px-4 py-2">{student.email}</td>
                    <td className="px-4 py-2">{student.codeMassar}</td>
                    <td className="px-4 py-2">{student.phoneNumber}</td>
                    <td className="px-4 py-2">{student.busId}</td>
                    <td className="px-4 py-2 flex gap-2">
                        <button
                            onClick={() => onView?.(student)}
                            className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600"
                            title="Voir"
                        >
                            <Eye size={16} />
                        </button>
                        <button
                            onClick={() => onEdit?.(student)}
                            className="p-2 rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-600"
                            title="Modifier"
                        >
                            <Pencil size={16} />
                        </button>
                        <button
                            onClick={() => onDelete?.(student)}
                            className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600"
                            title="Supprimer"
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
