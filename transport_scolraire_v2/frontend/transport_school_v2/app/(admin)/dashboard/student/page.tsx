"use client";

import { useEffect, useState } from "react";
import StudentTable from "@/components/dashboard/StudentTable";
import { Student } from "@/types/studentService";

export default function StudentPage() {
    const [students, setStudents] = useState<Student[]>([]);

    // Exemple de récupération de données depuis ton API backend
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const res = await fetch("http://localhost:8082/api/dashboard/students"); // <- adapte l’URL à ton backend
                const data = await res.json();
                setStudents(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des étudiants :", error);
            }
        };

        fetchStudents();
    }, []);

    const handleView = (student: Student) => {
        alert(`Voir étudiant : ${student.firstName} ${student.lastName}`);
    };

    const handleEdit = (student: Student) => {
        alert(`Modifier étudiant : ${student.firstName} ${student.lastName}`);
    };

    const handleDelete = (student: Student) => {
        if (confirm(`Voulez-vous vraiment supprimer ${student.firstName} ?`)) {
            setStudents((prev) => prev.filter((s) => s.id !== student.id));
            // TODO: envoyer une requête DELETE vers ton backend ici
        }
    };

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Lists Students</h1>

            <StudentTable
                students={students}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
        </div>
    );
}
