"use client";

import { useEffect, useState } from "react";
import AddStudent from "@/components/dashboard/AddStudent";
import { Student } from "@/types/studentService";
import { Bus } from "@/types/busService";

export default function AddStudentPage() {
    const [buses, setBuses] = useState<Bus[]>([]);
    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        const fetchFreeBuses = async () => {
            try {
                const res = await fetch("http://localhost:8081/api/dashboard/buses/free");
                if (!res.ok) throw new Error("Erreur API bus libres");
                const data: Bus[] = await res.json();
                setBuses(data);
            } catch (err) {
                console.error("Erreur lors du chargement des bus libres :", err);
                setErrorMessage("Impossible de charger les bus libres.");
                setTimeout(() => setErrorMessage(null), 5000); // disparition automatique
            } finally {
                setLoading(false);
            }
        };
        fetchFreeBuses();
    }, []);

    const handleAddStudent = async (studentData: Omit<Student, "id">) => {
        setSending(true);
        setErrorMessage(null);
        setSuccessMessage(null);

        const payload = {
            ...studentData,
            busId: studentData.busId ? Number(studentData.busId) : null,
            latitude: studentData.latitude ? Number(studentData.latitude) : null,
            longitude: studentData.longitude ? Number(studentData.longitude) : null,
        };

        try {
            const response = await fetch("http://localhost:8082/api/dashboard/students", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const text = await response.text();

            if (!response.ok) {
                const message = text || "Erreur lors de l'ajout de l'étudiant";
                setErrorMessage(message);
                setTimeout(() => setErrorMessage(null), 5000); // disparition automatique
                throw new Error(message);
            }

            const data = JSON.parse(text);
            setSuccessMessage("Étudiant ajouté avec succès !");
            setTimeout(() => setSuccessMessage(null), 5000); // disparition automatique
            console.log("Étudiant ajouté :", data);
        } catch (err: any) {
            console.error(err);
            if (!errorMessage) {
                setErrorMessage(
                    "Impossible d'ajouter l'étudiant. Ce code Massar, email ou numéro de téléphone existe déjà."
                );
                setTimeout(() => setErrorMessage(null), 5000); // disparition automatique
            }
        } finally {
            setSending(false);
        }
    };

    if (loading) return <p className="p-6 text-gray-600">Chargement des bus libres...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">New Student</h1>
            <AddStudent onSubmit={handleAddStudent} buses={buses} />
            {sending && <p className="text-gray-500 mt-2">Envoi en cours...</p>}
            {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mt-2">
                    {errorMessage}
                </div>
            )}
            {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mt-2">
                    {successMessage}
                </div>
            )}
        </div>
    );
}
