"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Define service interface
interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    iconFallback: string;
}

// Services data array
const services: Service[] = [
    {
        id: 1,
        title: "Rénovation Intérieure",
        description: "Transformation complète de vos espaces intérieurs avec des finitions de qualité et respect des délais.",
        icon: "/images/icons/renovation.svg",
        iconFallback: "🔨"
    },
    {
        id: 2,
        title: "Plomberie",
        description: "Installation, dépannage et réparation de systèmes de plomberie pour particuliers et professionnels.",
        icon: "/images/icons/plumbing.svg",
        iconFallback: "🚿"
    },
    {
        id: 3,
        title: "Électricité",
        description: "Mise aux normes, installation et dépannage électrique par des professionnels qualifiés et certifiés.",
        icon: "/images/icons/electricity.svg",
        iconFallback: "💡"
    },
    {
        id: 4,
        title: "Petite Maçonnerie",
        description: "Travaux de petite maçonnerie pour vos projets de rénovation ou d'extension.",
        icon: "/images/icons/masonry.svg",
        iconFallback: "🧱"
    },
    {
        id: 5,
        title: "Peinture",
        description: "Application de peinture professionnelle pour raviver vos espaces intérieurs et extérieurs.",
        icon: "/images/icons/painting.svg",
        iconFallback: "🎨"
    },
    {
        id: 6,
        title: "Nettoyage Industriel",
        description: "Services de nettoyage professionnel pour entreprises, commerces et copropriétés.",
        icon: "/images/icons/cleaning.svg",
        iconFallback: "✨"
    }
];

// Service card component with proper typing
const ServiceCard = ({ service }: { service: Service }) => {
    // Use emojis directly for simplicity while developing
    return (
        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto">
                <span className="text-2xl">{service.iconFallback}</span>
            </div>
            <h3 className="text-xl font-heading text-primary text-center mb-3">{service.title}</h3>
            <p className="text-dark/80 text-center mb-6 flex-grow">{service.description}</p>
            <Link
                href="#contact"
                className="mt-auto text-center text-primary hover:text-primary-dark font-medium transition-colors duration-200"
            >
                Demander un devis
            </Link>
        </div>
    );
};

const Features = () => {
    return (
        <section id="services" className="section bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-primary mb-4 font-heading">Nos Services</h2>
                    <p className="text-lg mb-6 max-w-3xl mx-auto">
                        Nous proposons une gamme complète de services pour répondre à tous vos besoins
                        de rénovation, dépannage et entretien.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(service => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="#contact" className="btn-primary">
                        Obtenir un devis gratuit
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Features; 