"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container-custom">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-bold text-primary font-heading">
                                Younet Multiservices
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-4">
                            <Link href="#accueil" className="text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                                Accueil
                            </Link>
                            <Link href="#a-propos" className="text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                                Qui sommes-nous
                            </Link>
                            <Link href="#services" className="text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                                Nos services
                            </Link>
                            <Link href="#realisations" className="text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                                Réalisations
                            </Link>
                            <Link href="#contact" className="text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                                Contact
                            </Link>
                            <Link href="#contact" className="btn-primary ml-4">
                                Obtenir un devis
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-dark focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Ouvrir le menu</span>
                            {/* Hamburger icon */}
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Close icon */}
                            <svg
                                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                    <Link href="#accueil" className="text-dark hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                        Accueil
                    </Link>
                    <Link href="#a-propos" className="text-dark hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                        Qui sommes-nous
                    </Link>
                    <Link href="#services" className="text-dark hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                        Nos services
                    </Link>
                    <Link href="#realisations" className="text-dark hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                        Réalisations
                    </Link>
                    <Link href="#contact" className="text-dark hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                        Contact
                    </Link>
                    <Link href="#contact" className="btn-primary block text-center mt-4 mx-3">
                        Obtenir un devis
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 