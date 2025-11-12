import axios from "axios";
import { Bus } from "@/types/busService";



// Fonction pour récupérer la liste des bus
export async function fetchBusList(): Promise<Bus[]> {
    try {
        const response = await axios.get<Bus[]>("http://localhost:8081/api/buses");
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des bus:", error);
        return [];
    }
}
