"use client";

import { useState } from "react";
import { Bus, Driver } from "@/types/busService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import UploadBusImage  from "@/components/dashboard/UploadBusImage"

interface AddBusProps {
    onSubmit?: (bus: Omit<Bus, "id">) => void;
    drivers?: Driver[];
}

export default function AddBus({ onSubmit, drivers = [] }: AddBusProps) {
    const [formData, setFormData] = useState<Omit<Bus, "id">>({
        registrationNumber: "",
        capacityLimits: 0,
        status: "Active",
        urlImage: "",
        driver: undefined,
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
                <CardTitle className="text-xl font-semibold text-gray-800">Add a Bus</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Immatriculation */}
                    <div>
                        <Label htmlFor="registrationNumber">Immatriculation</Label>
                        <Input
                            id="registrationNumber"
                            placeholder="Ex: AB-123-CD"
                            value={formData.registrationNumber}
                            onChange={(e) => handleChange("registrationNumber", e.target.value)}
                            required
                        />
                    </div>

                    {/* Capacité */}
                    <div>
                        <Label htmlFor="capacity">Capacity Limit</Label>
                        <Input
                            id="capacity"
                            type="number"
                            min="1"
                            placeholder="Nombre de places"
                            value={formData.capacityLimits}
                            onChange={(e) => handleChange("capacityLimits", Number(e.target.value))}
                            required
                        />
                    </div>

                    {/* Statut */}
                    <div>
                        <Label htmlFor="status">Statut</Label>
                        <Select
                            onValueChange={(val) => handleChange("status", val)}
                            defaultValue={formData.status}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choisir un statut" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Active">Active</SelectItem>
                                <SelectItem value="Inactive">Inactive</SelectItem>
                                <SelectItem value="Maintenance">Maintenance</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <Label>Image</Label>
                        <UploadBusImage
                            onUploadComplete={(url) => handleChange("urlImage", url)}
                        />
                        {formData.urlImage && (
                            <img
                                src={formData.urlImage}
                                alt="Preview"
                                className="mt-2 h-24 rounded border"
                            />
                        )}
                    </div>


                    {/* Chauffeur */}
                    {drivers.length > 0 && (
                        <div>
                            <Label htmlFor="driver">Driver</Label>
                            <Select
                                onValueChange={(val) =>
                                    handleChange("driver", drivers.find((d) => d.id.toString() === val))
                                }
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Aucun chauffeur" />
                                </SelectTrigger>
                                <SelectContent>
                                    {drivers.map((driver) => (
                                        <SelectItem key={driver.id} value={driver.id.toString()}>
                                            {driver.firstName} {driver.lastName}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    )}

                    <Button type="submit" className="w-full mt-4">
                       Add
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
