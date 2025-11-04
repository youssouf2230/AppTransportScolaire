'use client';

import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import { Heart, Users, BusFront, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bus , Driver } from "@/types/busService";
import Link from "next/link";


const BusCard = (props: Bus) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setLiked(!liked);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'En service':
                return 'bg-green-100 text-green-700';
            case 'En route':
                return 'bg-blue-100 text-blue-700';
            case 'En maintenance':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="group relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 bg-white">
                {/* Bouton favoris */}
                <div
                    onClick={toggleLike}
                    className={`absolute top-4 right-4 z-20 p-2 rounded-full cursor-pointer shadow-md transition-colors duration-300 ${
                        liked ? 'bg-red-100' : 'bg-gray-100'
                    }`}
                    title={liked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                >
                    <Heart
                        size={22}
                        className={`${liked ? 'fill-red-500 text-red-500' : 'text-gray-500'}`}
                    />
                </div>

                {/* Image */}
                <Link href={`/buses/${props.id}`}>
                    <div className="relative w-full h-52">
                        <Image
                            src={props.urlImage}
                            alt={props.registrationNumber}
                            width={400}
                            height={250}
                            priority
                            unoptimized={false}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                </Link>
                <CardHeader className="px-5 pt-4">
                    <h3 className="text-lg font-bold text-gray-900">Bus school 0{props.id}</h3>
                    <p className="text-gray-500 text-sm">Immatriculation : {props.registrationNumber}</p>
                </CardHeader>

                <CardContent className="px-5 pb-5 space-y-4">
                    {/* Infos principales */}
                    <div className="flex items-center justify-between text-gray-700">
                        <div className="flex items-center gap-2">
                            <Users size={18} />
                            <span className="text-sm">{props.capacityLimits} places</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BusFront size={18} />
                            <span className="text-sm">Mr(Mme). {props.driver?.lastName}</span>
                        </div>
                    </div>

                    {/* Statut */}
                    <Badge
                        variant="secondary"
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(props.status)}`}
                    >
                        {props.status}
                    </Badge>

                    {/* Bouton réserver */}
                    <button className="w-full bg-blue-400 hover:bg-blue-700 text-white font-medium rounded-lg px-4 py-2 transition duration-300">
                        Réserver une place
                    </button>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default BusCard;
