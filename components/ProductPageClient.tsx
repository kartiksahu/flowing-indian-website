"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, ShoppingCart, Package, Info } from "lucide-react";
import { Product } from "@/lib/products";
import BookingForm from "./BookingForm";

interface ProductPageClientProps {
    product: Product;
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const isService = product.isService;

    return (
        <div className="min-h-screen bg-background text-primary">

            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-section overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                </div>

                <div className="relative z-10 max-w-container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Product Image */}
                        <div className="relative aspect-square bg-background rounded-lg overflow-hidden border border-border">
                            <img
                                src={product.imageSrc}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm font-semibold tracking-[0.3em] text-muted uppercase mb-2">
                                    {isService ? 'Service • Coaching' : 'Product • Rope'}
                                </p>
                                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                                    {product.name}
                                </h1>
                                <p className="text-xl text-accent font-medium mb-4">
                                    {product.tagline}
                                </p>
                                <p className="text-lg text-secondary leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {!isService && (
                                <>
                                    <div className="flex items-baseline gap-2 pt-4">
                                        <span className="text-4xl font-bold text-primary">{product.price}</span>
                                        <span className="text-secondary/70">per rope</span>
                                    </div>

                                    <a
                                        href={product.paymentLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-md transition-all duration-300 w-full md:w-auto"
                                    >
                                        <ShoppingCart size={20} />
                                        Buy Now - {product.price}
                                    </a>
                                </>
                            )}

                            {isService && (
                                <div className="pt-4">
                                    <p className="text-2xl font-bold text-primary mb-2">{product.price}</p>
                                    <p className="text-secondary">Fill out the booking form below to get started</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-6 bg-background">
                <div className="max-w-container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                        Why Choose {product.name}?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {product.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4 p-6 bg-section border border-border rounded-lg">
                                <Check size={24} className="text-accent shrink-0 mt-1" />
                                <p className="text-secondary leading-relaxed">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included & Specs */}
            <section className="py-20 px-6 bg-section">
                <div className="max-w-container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* What's Included */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-6">
                                <Package className="text-accent" size={28} />
                                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                                    What's Included
                                </h2>
                            </div>
                            <div className="space-y-3">
                                {product.whatsIncluded.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-background border border-border rounded-lg">
                                        <Check size={20} className="text-accent shrink-0" />
                                        <span className="text-secondary">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Specifications */}
                        {product.specs && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <Info className="text-accent" size={28} />
                                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                                        {isService ? 'Session Details' : 'Specifications'}
                                    </h2>
                                </div>
                                <div className="space-y-3">
                                    {product.specs.weight && (
                                        <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
                                            <span className="text-secondary font-medium">Weight</span>
                                            <span className="text-primary">{product.specs.weight}</span>
                                        </div>
                                    )}
                                    {product.specs.length && (
                                        <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
                                            <span className="text-secondary font-medium">Length</span>
                                            <span className="text-primary">{product.specs.length}</span>
                                        </div>
                                    )}
                                    {product.specs.material && (
                                        <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
                                            <span className="text-secondary font-medium">Material</span>
                                            <span className="text-primary">{product.specs.material}</span>
                                        </div>
                                    )}
                                    {product.specs.duration && (
                                        <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
                                            <span className="text-secondary font-medium">Duration</span>
                                            <span className="text-primary">{product.specs.duration}</span>
                                        </div>
                                    )}
                                    {product.specs.format && (
                                        <div className="flex justify-between items-center p-4 bg-background border border-border rounded-lg">
                                            <span className="text-secondary font-medium">Format</span>
                                            <span className="text-primary">{product.specs.format}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section - Buy Now for Products, Booking Form for Services */}
            <section className="py-16 px-6 bg-background border-y border-border">
                <div className="max-w-3xl mx-auto">
                    {!isService ? (
                        <div className="text-center space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                                Ready to Start Your Flow Journey?
                            </h2>
                            <p className="text-lg text-secondary">
                                Get your {product.name} today and experience the difference.
                            </p>
                            <a
                                href={product.paymentLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-accent hover:bg-accent/90 text-white font-semibold rounded-md transition-all duration-300 text-lg"
                            >
                                <ShoppingCart size={22} />
                                Buy Now - {product.price}
                            </a>
                        </div>
                    ) : (
                        <BookingForm />
                    )}
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 px-6 bg-section">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {product.faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="border border-border rounded-lg overflow-hidden bg-background"
                            >
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-section transition-colors"
                                >
                                    <span className="text-lg font-medium text-primary pr-4">
                                        {faq.question}
                                    </span>
                                    <span className="text-accent shrink-0">
                                        {openFaqIndex === idx ? "−" : "+"}
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaqIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="p-6 pt-0 text-secondary leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
