"use client";

import Image from 'next/image';
import { useState } from 'react';

const About = () => {
    const [imageError, setImageError] = useState(false);

    return (
        <section id="a-propos" className="section bg-cream">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-primary mb-6 font-heading">Qui sommes-nous</h2>
                        <p className="mb-6 text-lg">
                            Younet Multiservices est votre partenaire de confiance pour tous vos projets
                            de rénovation et dépannage à Marseille et ses environs depuis plus de 10 ans.
                        </p>
                        <p className="mb-6">
                            Notre mission est de vous offrir des services de qualité adaptés à vos besoins,
                            avec une équipe expérimentée et passionnée qui s'engage à respecter les délais
                            et les budgets convenus.
                        </p>
                        <p className="mb-6">
                            Nous intervenons aussi bien auprès des particuliers que des professionnels,
                            avec le même souci du détail et la même exigence de qualité.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <div className="text-center p-4">
                                <div className="text-3xl font-bold text-primary mb-2">350+</div>
                                <div className="text-sm">Projets Réalisés</div>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                                <div className="text-sm">Clients Satisfaits</div>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-3xl font-bold text-primary mb-2">10 ans</div>
                                <div className="text-sm">D'Expérience</div>
                            </div>
                            <div className="text-center p-4">
                                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                                <div className="text-sm">Support Client</div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl bg-gray-200">
                            {!imageError ? (
                                <Image
                                    src="/images/about-placeholder.svg"
                                    alt="L'équipe Younet Multiservices"
                                    fill
                                    className="object-cover"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary">
                                    <span className="text-6xl">🏢</span>
                                </div>
                            )}
                        </div>
                        <div className="absolute -bottom-6 -left-6 hidden md:block">
                            <div className="bg-accent p-6 rounded-lg shadow-lg">
                                <p className="font-heading text-dark text-lg">
                                    "Notre engagement : la qualité et le respect des délais"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 