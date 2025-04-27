"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Hero = () => {
    const [imageError, setImageError] = useState(false);

    return (
        <section id="accueil" className="relative min-h-[600px] flex items-center bg-primary">
            {/* Background container with overlay */}
            {!imageError && (
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-primary opacity-90"></div>
                    {/* Placeholder image - will need to be replaced with actual hero image */}
                    <Image
                        src="/images/hero-placeholder.svg"
                        alt="Services de rénovation et travaux"
                        fill
                        className="object-cover"
                        priority
                        onError={() => setImageError(true)}
                    />
                </div>
            )}

            <div className="container-custom relative z-10 py-20 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="mb-6 font-heading">
                        Experts en Rénovation et Travaux à Marseille
                    </h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Rénovation intérieure, plomberie, électricité, maçonnerie, peinture
                        et nettoyage industriel. Devis gratuit sous 72h.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <Link href="#contact" className="btn-accent">
                            Obtenir un devis gratuit
                        </Link>
                        <Link href="#services" className="btn-outline" style={{ borderColor: "white", color: "white" }}>
                            Découvrir nos services
                        </Link>
                    </div>

                    {/* Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white/10 p-6 rounded-lg">
                            <div className="text-4xl font-bold font-heading text-accent mb-2">350+</div>
                            <div className="text-sm uppercase tracking-wider">Projets Réalisés</div>
                        </div>
                        <div className="bg-white/10 p-6 rounded-lg">
                            <div className="text-4xl font-bold font-heading text-accent mb-2">95%</div>
                            <div className="text-sm uppercase tracking-wider">Satisfaction Client</div>
                        </div>
                        <div className="bg-white/10 p-6 rounded-lg">
                            <div className="text-4xl font-bold font-heading text-accent mb-2">10 ans</div>
                            <div className="text-sm uppercase tracking-wider">D'Expérience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 