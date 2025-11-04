"use client";

import { useState } from "react";
import { Student } from "@/types/studentService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bus } from "@/types/busService";

interface AddStudentProps {
    onSubmit?: (student: Omit<Student, "id">) => void;
    buses?: Bus[]; // pour assigner un bus au besoin
}

export default function AddStudent({ onSubmit, buses = [] }: AddStudentProps) {
    const [formData, setFormData] = useState<Omit<Student, "id">>({
        firstName: "",
        lastName: "",
        email: "",
        codeMassar: "",
        phoneNumber: "",
        password: "",
        latitude: "",
        longitude: "",
        busId: "",
    });

    const handleChange = (field: keyof typeof formData, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(formData);
    };

    return (
        <Card className="max-w-xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">Add Student</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Nom */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                                id="firstName"
                                placeholder="Ex: Jean"
                                value={formData.firstName}
                                onChange={(e) => handleChange("firstName", e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                                id="lastName"
                                placeholder="Ex: Dupont"
                                value={formData.lastName}
                                onChange={(e) => handleChange("lastName", e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="exemple@mail.com"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                        />
                    </div>

                    {/* Code Massar */}
                    <div>
                        <Label htmlFor="codeMassar">Code Massar</Label>
                        <Input
                            id="codeMassar"
                            placeholder="Code Massar"
                            value={formData.codeMassar}
                            onChange={(e) => handleChange("codeMassar", e.target.value)}
                            required
                        />
                    </div>

                    {/* Téléphone */}
                    <div>
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input
                            id="phoneNumber"
                            type="tel"
                            placeholder="06XXXXXXXX"
                            value={formData.phoneNumber}
                            onChange={(e) => handleChange("phoneNumber", e.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Mot de passe"
                            value={formData.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                            required
                        />
                    </div>

                    {/* Latitude / Longitude */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="latitude">Latitude</Label>
                            <Input
                                id="latitude"
                                placeholder="Ex: 33.5731"
                                value={formData.latitude}
                                onChange={(e) => handleChange("latitude", e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="longitude">Longitude</Label>
                            <Input
                                id="longitude"
                                placeholder="-7.5898"
                                value={formData.longitude}
                                onChange={(e) => handleChange("longitude", e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Choix du bus */}
                    {buses.length > 0 && (
                        <div>
                            <Label htmlFor="busId">Bus</Label>
                            <Select
                                onValueChange={(val) => handleChange("busId", val)}
                                defaultValue={formData.busId}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Aucun bus assigné" />
                                </SelectTrigger>
                                <SelectContent>
                                    {buses.map((bus) => (
                                        <SelectItem key={bus.id} value={bus.id.toString()}>
                                            {bus.registrationNumber} - {bus.status}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    )}

                    <Button type="submit" className="w-full mt-4">
                        Add Student
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
