"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, MapPin, CheckCircle, ArrowLeft, Instagram, Mail } from "lucide-react";
import { Event } from "@/lib/events";
import EventRegistrationForm from "./EventRegistrationForm";

interface EventPageClientProps {
    event: Event;
}

export default function EventPageClient({ event }: EventPageClientProps) {
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-background text-primary pt-24 pb-20">
            {/* Back Button */}
            <div className="max-w-container mx-auto px-6 mb-8">
                <Link
                    href="/events"
                    className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Events</span>
                </Link>
            </div>

            {/* Hero / Header */}
            <section className="px-6 mb-12">
                <div className="max-w-container mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                        {event.title}
                    </h1>

                    <div className="flex flex-wrap gap-6 text-secondary text-lg mb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="text-accent" />
                            <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="text-accent" />
                            <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="text-accent" />
                            <span>{event.venue}</span>
                        </div>
                    </div>

                    <div className="p-6 bg-section border border-border rounded-lg max-w-3xl">
                        <p className="text-lg md:text-xl text-secondary leading-relaxed">
                            {event.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="px-6 mb-16">
                <div className="max-w-container mx-auto grid md:grid-cols-3 gap-12">
                    {/* Left Column: Details */}
                    <div className="md:col-span-2 space-y-12">
                        {/* What you'll learn */}
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-6">What You'll Learn</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {event.learn.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 bg-section border border-border rounded-lg">
                                        <CheckCircle size={20} className="text-accent shrink-0 mt-1" />
                                        <span className="text-secondary">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Who is it for */}
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-6">Who is this for?</h2>
                            <p className="text-secondary leading-relaxed">
                                This workshop is open to everyone—whether you are a complete beginner looking to move better or an athlete wanting to refine your flow. No prior experience is required unless specified.
                            </p>
                        </div>

                        {/* FAQs */}
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {event.faq.map((item, idx) => (
                                    <div key={idx} className="border border-border rounded-lg overflow-hidden bg-section">
                                        <button
                                            onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                            className="w-full flex items-center justify-between p-4 text-left hover:bg-background transition-colors"
                                        >
                                            <span className="font-medium text-primary pr-4">{item.q}</span>
                                            <span className="text-accent text-xl">
                                                {openFaqIndex === idx ? "−" : "+"}
                                            </span>
                                        </button>
                                        <div
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaqIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >
                                            <div className="p-4 pt-0 text-secondary border-t border-border/50">
                                                {item.a}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Registration Card */}
                    <div className="md:col-span-1">
                        <div className="sticky top-24 bg-section border border-border rounded-lg p-6 space-y-6 shadow-lg">
                            <div className="text-center border-b border-border pb-6">
                                <p className="text-secondary mb-2">Registration Fee</p>
                                <p className="text-4xl font-bold text-primary">{event.price}</p>
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={() => setIsRegistrationOpen(true)}
                                    className="w-full py-4 bg-accent hover:bg-accent/90 text-white font-bold text-lg rounded-md transition-all duration-300 shadow-lg hover:shadow-accent/20 hover:translate-y-[-2px]"
                                >
                                    Register Now
                                </button>
                                <p className="text-xs text-center text-secondary">
                                    Secure payment via Razorpay. <br />Limited spots available.
                                </p>
                            </div>

                            <div className="pt-4 border-t border-border space-y-3">
                                <p className="font-medium text-primary">Have questions?</p>
                                <a
                                    href="mailto:contact@flowingindian.com"
                                    className="flex items-center gap-2 text-secondary hover:text-accent transition-colors text-sm"
                                >
                                    <Mail size={16} /> contact@flowingindian.com
                                </a>
                                <a
                                    href="https://instagram.com/flowingindian"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-secondary hover:text-accent transition-colors text-sm"
                                >
                                    <Instagram size={16} /> @flowingindian
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <EventRegistrationForm
                isOpen={isRegistrationOpen}
                onClose={() => setIsRegistrationOpen(false)}
                event={event}
            />
        </main>
    );
}
