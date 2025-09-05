"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
    const [nav, setNav] = useState(false);
    const [search, setSearch] = useState("");

    const links = [
        { id: 1, link: "/", label: "Accueil" },
        { id: 2, link: "/about", label: "À propos" },
        { id: 3, link: "/buses", label: "Nos Bus" },
        { id: 4, link: "/services", label: "Services" },
        { id: 5, link: "/contact", label: "Contact" },
    ];

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Recherche : ${search}`);
    };

    return (
        <header className="w-full bg-blue-400 from-blue-600 to-indigo-700 text-white fixed top-0 left-0 z-50 shadow-md">
            <div className="flex justify-between items-center w-full h-20 px-6 md:px-10 container mx-auto">
                {/* Logo */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-2xl md:text-3xl font-extrabold tracking-wide"
                >
                    <Link href="/" className="hover:text-yellow-300 transition">
                        Gestion<span className="text-yellow-300">Bus</span>
                    </Link>
                </motion.h1>

                {/* Navigation Desktop */}
                <nav className="hidden md:flex items-center space-x-6">
                    <ul className="flex space-x-6 text-lg font-medium">
                        {links.map(({ id, link, label }) => (
                            <motion.li
                                key={id}
                                initial={{ opacity: 0, y: -15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: id * 0.05 }}
                                className="relative group"
                            >
                                <Link
                                    href={link}
                                    className="capitalize hover:text-yellow-300 transition"
                                >
                                    {label}
                                </Link>
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Barre de recherche */}
                    <form onSubmit={handleSearch} className="flex items-center ml-6">
                        <Input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Rechercher..."
                            className="w-52 bg-white text-black rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                        <Button
                            type="submit"
                            variant="secondary"
                            className="ml-3 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full px-5"
                        >
                            🔍
                        </Button>
                    </form>
                </nav>

                {/* Icône menu mobile */}
                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer z-10 md:hidden"
                >
                    {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
                </div>
            </div>

            {/* Menu Mobile */}
            {nav && (
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="md:hidden flex flex-col items-center justify-center absolute top-20 left-0 w-full bg-gradient-to-r from-blue-600 to-indigo-700 py-6 space-y-6 shadow-lg"
                >
                    {links.map(({ id, link, label }) => (
                        <Link
                            key={id}
                            href={link}
                            onClick={() => setNav(false)}
                            className="capitalize text-lg font-semibold hover:text-yellow-300 transition"
                        >
                            {label}
                        </Link>
                    ))}

                    {/* Barre de recherche mobile */}
                    <form onSubmit={handleSearch} className="relative w-4/5">
                        <Input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Rechercher..."
                            className="w-full bg-white text-black rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                        <Button
                            type="submit"
                            variant="secondary"
                            className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black rounded-full"
                        >
                            🔍 Rechercher
                        </Button>
                    </form>
                </motion.div>
            )}
        </header>
    );
};

export default Header;
