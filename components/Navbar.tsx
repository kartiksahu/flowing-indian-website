"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Products", href: "#offerings" },
        { name: "Philosophy", href: "#philosophy" },
        { name: "Contact", href: "#footer" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen
                ? "bg-background/95 backdrop-blur-md border-b border-border"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-container mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                        <img
                            src="/logo.png"
                            alt="Flowing Indian"
                            className="h-10 md:h-12 w-auto"
                        />
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-primary">
                            Flowing Indian
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-secondary hover:text-accent transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#offerings"
                            className="px-6 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent/90 rounded-md transition-colors"
                        >
                            Start Flowing
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-primary hover:text-accent transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-background border-b border-border">
                    <div className="px-6 py-4 space-y-4 flex flex-col">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-secondary hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#offerings"
                            className="inline-block text-center px-6 py-3 text-base font-semibold text-white bg-accent hover:bg-accent/90 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Start Flowing
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
