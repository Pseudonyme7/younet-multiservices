"use client";

import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-12 pb-6">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 font-heading">
                            Younet Multiservices
                        </h3>
                        <p className="mb-4 text-sm">
                            Entreprise de rénovation et dépannage à Marseille et ses environs. Services de qualité, professionnalisme et engagement.
                        </p>
                        <p className="text-sm">
                            SIRET: XX XXX XXX XXX XX
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 font-heading">
                            Liens Rapides
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#accueil" className="text-gray-300 hover:text-white transition">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="#a-propos" className="text-gray-300 hover:text-white transition">
                                    Qui sommes-nous
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-gray-300 hover:text-white transition">
                                    Nos services
                                </Link>
                            </li>
                            <li>
                                <Link href="#realisations" className="text-gray-300 hover:text-white transition">
                                    Réalisations
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-300 hover:text-white transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 font-heading">
                            Nos Services
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#services" className="text-gray-300 hover:text-white transition">
                                    Rénovation Intérieure
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-gray-300 hover:text-white transition">
                                    Plomberie
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-gray-300 hover:text-white transition">
                                    Électricité
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-gray-300 hover:text-white transition">
                                    Maçonnerie
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-gray-300 hover:text-white transition">
                                    Peinture
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-gray-300 hover:text-white transition">
                                    Nettoyage Industriel
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 font-heading">
                            Contact
                        </h4>
                        <address className="not-italic">
                            <p className="mb-2">1 Boulevard Fictif</p>
                            <p className="mb-2">13001 Marseille</p>
                            <p className="mb-2">
                                Tél:
                                <a href="tel:+33400000000" className="text-gray-300 hover:text-white ml-1">
                                    04 00 00 00 00
                                </a>
                            </p>
                            <p className="mb-4">
                                Email:
                                <a href="mailto:contact@younet-multiservices.fr" className="text-gray-300 hover:text-white ml-1">
                                    contact@younet-multiservices.fr
                                </a>
                            </p>
                            <div className="flex space-x-4 mt-4">
                                <a href="#" className="text-gray-300 hover:text-white" aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                            </div>
                        </address>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-300">
                            &copy; {currentYear} Younet Multiservices. Tous droits réservés.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link href="#" className="text-sm text-gray-300 hover:text-white">
                                Mentions légales
                            </Link>
                            <Link href="#" className="text-sm text-gray-300 hover:text-white">
                                Politique de confidentialité
                            </Link>
                            <Link href="#" className="text-sm text-gray-300 hover:text-white">
                                CGV
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 