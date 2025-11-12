"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="relative bg-gray-100 py-16 md:py-24 px-6 rounded-3xl shadow-lg mt-6 overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Texte principal */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-gray-800 space-y-6"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Notre Transport Scolaire, <br />
                        <span className="text-blue-600">Pour Tous les Élèves</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600">
                        Des trajets sûrs, rapides et confortables. Nous garantissons la
                        sécurité de vos enfants tout en leur offrant une expérience agréable.
                    </p>

                    <Button
                        className="bg-blue-400 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
                        onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
                    >
                        Voir les bus
                    </Button>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <Image
                        src="https://pngimg.com/uploads/student/student_PNG5.png"
                        alt="Bus scolaire"
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-lg"
                        priority
                    />
                </motion.div>
            </div>
        </section>

    );
}
