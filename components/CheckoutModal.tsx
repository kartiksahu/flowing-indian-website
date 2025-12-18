"use client";

import { useState } from "react";
import { X, Send, Lock } from "lucide-react";
import { Product } from "@/lib/products";

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product;
}

export default function CheckoutModal({ isOpen, onClose, product }: CheckoutModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            // 1. Save details to localStorage
            const orderDetails = {
                product: {
                    name: product.name,
                    price: product.price
                },
                customer: formData,
                timestamp: new Date().toISOString()
            };

            localStorage.setItem("pendingOrder", JSON.stringify(orderDetails));

            setStatus("success");

            // 2. Redirect to Razorpay after short delay
            setTimeout(() => {
                if (product.paymentLink) {
                    window.location.href = product.paymentLink;
                }
            }, 1000);
        } catch (error) {
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                    <h3 className="text-xl font-bold text-primary">Checkout Details</h3>
                    <button
                        onClick={onClose}
                        className="text-secondary hover:text-primary transition-colors p-1"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    {/* Product Summary */}
                    <div className="flex items-center gap-4 p-4 bg-background rounded-md border border-border">
                        <div className="w-16 h-16 bg-section rounded overflow-hidden shrink-0">
                            <img src={product.imageSrc} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="font-bold text-primary">{product.name}</p>
                            <p className="text-accent font-medium">{product.price}</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
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

                            <div className="col-span-2 sm:col-span-1">
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

                            <div className="col-span-2 sm:col-span-1">
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

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-secondary mb-1">Shipping Address *</label>
                                <textarea
                                    name="address"
                                    required
                                    rows={2}
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-md text-primary focus:outline-none focus:border-accent transition-colors resize-none"
                                />
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <label className="block text-sm font-medium text-secondary mb-1">City *</label>
                                <input
                                    type="text"
                                    name="city"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-md text-primary focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <label className="block text-sm font-medium text-secondary mb-1">State *</label>
                                <input
                                    type="text"
                                    name="state"
                                    required
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-md text-primary focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>

                            <div className="col-span-2 sm:col-span-1">
                                <label className="block text-sm font-medium text-secondary mb-1">Pincode *</label>
                                <input
                                    type="text"
                                    name="pincode"
                                    required
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-md text-primary focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>
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
