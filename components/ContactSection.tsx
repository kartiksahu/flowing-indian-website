"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "rope-flow"
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
                    // Get your access key from: https://web3forms.com
                    // Enter email: kartiksahudd@gmail.com
                    // Then replace the key below
                    access_key: "72544932-567e-4c86-845e-edf0725d708b", // TODO: Replace with your Web3Forms access key
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    interest: formData.interest,
                    subject: `New Contact from Flowing Indian - ${formData.interest}`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    interest: "rope-flow"
                });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-32 px-6 bg-section">
            <div className="max-w-container mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Info */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-sm font-semibold tracking-[0.3em] text-muted uppercase">
                                Get in Touch
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                                Start Your{" "}
                                <span className="text-secondary italic font-light">Flow Journey</span>
                            </h3>
                        </div>

                        <div className="space-y-6 text-lg text-secondary leading-relaxed">
                            <p>
                                Whether you're curious about our ropes, want to book a 1:1 session, or have questions about your practice — we're here to help.
                            </p>
                            <p className="text-secondary/80">
                                Fill out the form and we'll get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-3">
                                <div className="w-1 h-6 bg-accent rounded-full mt-1" />
                                <div>
                                    <p className="text-primary font-medium">Email</p>
                                    <a href="mailto:contact@flowingindian.com" className="text-secondary hover:text-accent transition-colors">
                                        contact@flowingindian.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-1 h-6 bg-accent rounded-full mt-1" />
                                <div>
                                    <p className="text-primary font-medium">Instagram</p>
                                    <a href="https://www.instagram.com/flowing_indian/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
                                        @flowing_indian
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-background border border-border rounded-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
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
                                    className="w-full px-4 py-3 bg-section border border-border rounded-md text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
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
                                    className="w-full px-4 py-3 bg-section border border-border rounded-md text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                                    Phone (Optional)
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-section border border-border rounded-md text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div>
                                <label htmlFor="interest" className="block text-sm font-medium text-primary mb-2">
                                    I'm interested in *
                                </label>
                                <select
                                    id="interest"
                                    name="interest"
                                    required
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-section border border-border rounded-md text-primary focus:outline-none focus:border-accent transition-colors"
                                >
                                    <option value="rope-flow">Rope Flow / Ropes</option>
                                    <option value="1-on-1">1:1 Practice Session</option>
                                    <option value="workshops">Workshops</option>
                                    <option value="bulk-order">Bulk Orders</option>
                                    <option value="collaboration">Collaboration</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-section border border-border rounded-md text-primary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder="Tell us about your goals, questions, or what you'd like to explore..."
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
                                        Send Message
                                        <Send size={18} />
                                    </>
                                )}
                            </button>

                            {status === "success" && (
                                <div className="p-4 bg-accent/10 border border-accent/30 rounded-md text-accent text-sm">
                                    ✓ Message sent successfully! We'll get back to you soon.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 text-sm">
                                    ✗ Something went wrong. Please try again or email us directly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
