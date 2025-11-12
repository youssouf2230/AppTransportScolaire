"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

interface UploadBusImageProps {
    onUploadComplete: (url: string) => void;
}

export default function UploadBusImage({ onUploadComplete }: UploadBusImageProps) {
    return (
        <div className="my-2">
            <UploadButton<OurFileRouter, "busImage">
                endpoint="busImage"
                onClientUploadComplete={(res) => {
                    if (res && res.length > 0) {
                        onUploadComplete(res[0].ufsUrl);
                    }
                }}
                onUploadError={(error: Error) => {
                    alert(`Erreur: ${error.message}`);
                }}
            />
        </div>
    );
}
