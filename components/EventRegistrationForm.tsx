"use client";

import { useState } from "react";
import { X, Lock } from "lucide-react";
import { Event } from "@/lib/events";

interface EventRegistrationFormProps {
    isOpen: boolean;
    onClose: () => void;
    event: Event;
}

export default function EventRegistrationForm({ isOpen, onClose, event }: EventRegistrationFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
        experience: "no" // default to no
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            // 1. Save details to localStorage
            const registrationDetails = {
                event: {
                    title: event.title,
                    slug: event.slug,
                    date: event.date,
                    venue: event.venue,
                    price: event.price
                },
                participant: formData,
                timestamp: new Date().toISOString(),
                type: "event_registration" // To distinguish from product orders
            };

            localStorage.setItem("pendingEventRegistration", JSON.stringify(registrationDetails));

            setStatus("success");

            // 2. Redirect to Razorpay after short delay
            setTimeout(() => {
                if (event.paymentLink) {
                    window.location.href = event.paymentLink;
                } else {
                    // Fallback if no link provided (shouldn't happen in prod)
                    alert("Payment link not configured for this event.");
                    setStatus("idle");
                }
            }, 1000);
        } catch (error) {
            console.error("Registration error:", error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-section border border-border rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto relative animate-slide-up shadow-2xl">
                {/* Header */}
                <div className="sticky top-0 bg-section border-b border-border p-4 flex items-center justify-between z-10">
                    <h3 className="text-xl font-bold text-primary">Register for Workshop</h3>
                    <button
                        onClick={onClose}
                        className="text-secondary hover:text-primary transition-colors p-1"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    {/* Event Summary */}
                    <div className="p-4 bg-background rounded-md border border-border space-y-2">
                        <p className="font-bold text-primary">{event.title}</p>
                        <div className="text-sm text-secondary flex justify-between">
                            <span>{event.date}</span>
                            <span className="text-accent font-medium">{event.price}</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-1">Full Name *</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-background border border-border rounded-md text-primary focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-secondary mb-1">Email *</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-background border border-border rounded-md text-primary focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-secondary mb-1">Phone *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-md text-primary focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-secondary mb-1">Age *</label>
                                <input
                                    type="number"
                                    name="age"
                                    required
                                    min="5"
                                    max="100"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-md text-primary focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-secondary mb-1">Prior Experience? *</label>
                            <select
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-background border border-border rounded-md text-primary focus:outline-none focus:border-accent transition-colors"
                            >
                                <option value="no">No, I'm a beginner</option>
                                <option value="yes">Yes, I have some experience</option>
                            </select>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className="w-full px-6 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-md transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Processing...
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        Redirecting to Payment...
                                    </>
                                ) : (
                                    <>
                                        Proceed to Payment <Lock size={18} />
                                    </>
                                )}
                            </button>
                            <p className="text-xs text-center text-secondary mt-3 flex items-center justify-center gap-1">
                                <Lock size={12} /> Secure payment via Razorpay
                            </p>
                        </div>

                        {status === "error" && (
                            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm text-center">
                                Something went wrong. Please try again.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
