"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        goals: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "72544932-567e-4c86-845e-edf0725d708b",
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    goals: formData.goals,
                    subject: `New 1:1 Online Session Booking Request from ${formData.name}`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    goals: ""
                });
                setTimeout(() => setStatus("idle"), 8000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="bg-section border border-border rounded-lg p-8">
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Book Your Online Session</h3>
                <p className="text-secondary">
                    Fill out the form below and our team will contact you within 24 hours to schedule your online session.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-background border border-border rounded-md text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-background border border-border rounded-md text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-md text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
                        placeholder="+91 98765 43210"
                    />
                </div>

                <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-primary mb-2">
                        What are your goals? *
                    </label>
                    <textarea
                        id="goals"
                        name="goals"
                        required
                        rows={5}
                        value={formData.goals}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-md text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Tell us what you'd like to work on - mobility, strength, learning rope flow, etc."
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-md transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "loading" ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Request Booking
                            <Send size={18} />
                        </>
                    )}
                </button>

                {status === "success" && (
                    <div className="p-4 bg-accent/10 border border-accent/30 rounded-md text-accent text-sm">
                        ✓ Booking request sent successfully! Our team will contact you within 24 hours to schedule your online session.
                    </div>
                )}

                {status === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 text-sm">
                        ✗ Something went wrong. Please try again or email us at contact@flowingindian.com
                    </div>
                )}
            </form>
        </div>
    );
}
