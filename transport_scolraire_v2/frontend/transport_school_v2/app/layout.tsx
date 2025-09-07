"use client";

import "./globals.css";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow pt-24 px-6">
            {children} {/* Chaque page (ex: Home) s'affiche ici */}
        </main>
        <Footer />
        </body>
        </html>
    );
}
