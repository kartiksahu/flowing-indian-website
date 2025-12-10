"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const heroImages = [
    "/images/hero.jpg",
    "/images/hero-2.jpg"
];

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % heroImages.length
            );
        }, 5000); // Switch every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden"
        >
            {/* Background Image Carousel */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
                {heroImages.map((image, index) => (
                    <div
                        key={image}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Flowing Indian Movement Practice ${index + 1}`}
                            className="w-full h-full object-cover opacity-40"
                        />
                    </div>
                ))}
            </div>

            <div className="relative z-20 max-w-container mx-auto text-center space-y-10 py-20">
                <div className="space-y-8">
                    <div className="inline-block overflow-hidden">
                        <p className="text-muted font-medium tracking-[0.3em] uppercase text-xs md:text-sm animate-fade-in">
                            Movement • Mindfulness • Flow Arts
                        </p>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary leading-[1.1] animate-slide-up px-4">
                        Find Your Flow,{" "}
                        <span className="block mt-2 text-secondary italic font-light">In Movement and in Life.</span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-secondary leading-relaxed font-normal animate-slide-up px-6">
                        Flowing Indian is a movement lab. We weave together rope flow, ground
                        flow, gada, mudgar and other flow arts so you can move better, feel
                        lighter, and carry your practice into real life.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6 animate-fade-in">
                    <Link
                        href="#offerings"
                        className="w-full sm:w-auto px-10 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-md transition-all duration-300 flex items-center justify-center gap-2 group hover:translate-y-[-2px]"
                    >
                        Explore Ropes
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#one-to-one"
                        className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-section text-primary font-semibold rounded-md transition-all duration-300 border border-border hover:border-muted"
                    >
                        Book 1:1 Practice
                    </Link>
                </div>

                <p className="text-sm text-secondary/70 pt-6 animate-fade-in">
                    For urban movers, beginners and athletes who want sustainable, playful movement.
                </p>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                            ? 'bg-accent w-8'
                            : 'bg-secondary/30 hover:bg-secondary/50'
                            }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
