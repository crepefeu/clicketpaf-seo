"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white p-4 px-6 rounded-full w-[80vw] z-20" role="banner">
                <div className="flex justify-between items-center relative">
                    <h1 className="font-bold text-xl">
                        <Link href="/" className="hover:text-gray-300" title="Clicketpaf Homepage">
                            Clicketpaf
                        </Link>
                    </h1>

                    {/* Desktop Navigation */}
                    <nav 
                        className="hidden lg:block"
                        aria-label="Desktop navigation"
                        role="navigation"
                        itemScope={true}
                        itemType="https://schema.org/SiteNavigationElement"
                    >
                        <ul className="flex gap-6">
                            <li itemProp="name"><Link href="/" itemProp="url" className="text-white hover:text-gray-300">Home</Link></li>
                            <li itemProp="name"><Link href="/about" itemProp="url" className="text-white hover:text-gray-300">About</Link></li>
                            <li itemProp="name"><Link href="/services" itemProp="url" className="text-white hover:text-gray-300">Services</Link></li>
                            <li itemProp="name"><Link href="/contact" itemProp="url" className="text-white hover:text-gray-300">Contact</Link></li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden focus:outline-none z-50"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label="Open main menu"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Navigation - Sliding from top */}
            <nav 
                id="mobile-menu"
                className={`fixed top-0 left-0 w-full h-screen bg-gray-800/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out lg:hidden z-10 ${
                    isOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
                aria-label="Mobile navigation"
                role="navigation"
                itemScope={true}
                itemType="https://schema.org/SiteNavigationElement"
            >
                <ul className="flex flex-col gap-6 p-8 pt-28">
                    <li itemProp="name"><Link href="/" itemProp="url" className="block text-xl hover:text-gray-300" aria-current="page">Home</Link></li>
                    <li itemProp="name"><Link href="/about" itemProp="url" className="block text-xl hover:text-gray-300">About</Link></li>
                    <li itemProp="name"><Link href="/services" itemProp="url" className="block text-xl hover:text-gray-300">Services</Link></li>
                    <li itemProp="name"><Link href="/contact" itemProp="url" className="block text-xl hover:text-gray-300">Contact</Link></li>
                </ul>
            </nav>

            {/* Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-0"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    );
}