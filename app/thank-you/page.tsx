"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Mail, Instagram, ArrowLeft, Loader2, Copy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function ThankYouContent() {
    const searchParams = useSearchParams();
    const paymentId = searchParams.get("razorpay_payment_id");
    const [status, setStatus] = useState<"processing" | "sent" | "error">("processing");

    useEffect(() => {
        const sendEmail = async () => {
            const pendingOrder = localStorage.getItem("pendingOrder");
            const pendingEventRegistration = localStorage.getItem("pendingEventRegistration");

            // Case 1: Product Order
            if (pendingOrder) {
                try {
                    const orderDetails = JSON.parse(pendingOrder);
                    const { product, customer } = orderDetails;

                    const response = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                        body: JSON.stringify({
                            access_key: "72544932-567e-4c86-845e-edf0725d708b",
                            subject: `New Order (Paid): ${product.name} - ${customer.name}`,
                            from_name: "Flowing Indian Checkout",
                            message: `
                                PAYMENT SUCCESSFUL - NEW ORDER
                                
                                Payment ID: ${paymentId || "Not captured"}
                                Product: ${product.name}
                                Price: ${product.price}
                                
                                Customer Details:
                                Name: ${customer.name}
                                Email: ${customer.email}
                                Phone: ${customer.phone}
                                
                                Shipping Address:
                                ${customer.address}
                                ${customer.city}, ${customer.state} - ${customer.pincode}
                                
                                Order Timestamp: ${orderDetails.timestamp}
                            `,
                            ...customer
                        }),
                    });

                    const result = await response.json();
                    if (result.success) {
                        localStorage.removeItem("pendingOrder");
                        setStatus("sent");
                    } else {
                        setStatus("error");
                    }
                } catch (error) {
                    console.error("Failed to send order email", error);
                    setStatus("error");
                }
                return;
            }

            // Case 2: Event Registration
            if (pendingEventRegistration) {
                try {
                    const registrationDetails = JSON.parse(pendingEventRegistration);
                    const { event, participant } = registrationDetails;

                    const response = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                        body: JSON.stringify({
                            access_key: "72544932-567e-4c86-845e-edf0725d708b",
                            subject: `New Workshop Registration: ${event.title} - ${participant.name}`,
                            from_name: "Flowing Indian Events",
                            message: `
                                PAYMENT SUCCESSFUL - WORKSHOP REGISTRATION
                                
                                Payment ID: ${paymentId || "Not captured"}
                                Event: ${event.title}
                                Date: ${event.date}
                                Venue: ${event.venue}
                                Price: ${event.price}
                                
                                Participant Details:
                                Name: ${participant.name}
                                Email: ${participant.email}
                                Phone: ${participant.phone}
                                Age: ${participant.age}
                                Experience: ${participant.experience}
                                
                                Registration Timestamp: ${registrationDetails.timestamp}
                            `,
                            ...participant
                        }),
                    });

                    const result = await response.json();
                    if (result.success) {
                        localStorage.removeItem("pendingEventRegistration");
                        setStatus("sent");
                    } else {
                        setStatus("error");
                    }
                } catch (error) {
                    console.error("Failed to send registration email", error);
                    setStatus("error");
                }
                return;
            }

            // No pending actions
            setStatus("sent");
        };

        sendEmail();
    }, [paymentId]);

    return (
        <div className="max-w-lg w-full bg-section border border-border rounded-lg p-8 text-center space-y-6 animate-slide-up">

            {status === "processing" ? (
                <div className="py-12 flex flex-col items-center gap-4">
                    <Loader2 className="w-12 h-12 text-accent animate-spin" />
                    <p className="text-secondary">Verifying your order details...</p>
                </div>
            ) : (
                <>
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="text-green-500 w-10 h-10" />
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-primary">
                        {status === "sent" ? "Success!" : "Payment Successful!"}
                    </h1>

                    <p className="text-secondary text-lg leading-relaxed">
                        Thank you! We have received your details and confirmation has been sent to us.
                    </p>

                    {paymentId && (
                        <div className="bg-background border border-border rounded-md p-4 flex flex-col items-center gap-2">
                            <span className="text-xs text-secondary uppercase tracking-wider">Payment ID</span>
                            <div className="flex items-center gap-2 text-primary font-mono bg-section px-3 py-1 rounded">
                                {paymentId}
                            </div>
                        </div>
                    )}

                    <div className="bg-background border border-border rounded-md p-6 space-y-4 text-left">
                        <h3 className="text-primary font-semibold text-lg border-b border-border pb-2 mb-4">
                            What happens next?
                        </h3>
                        <ul className="space-y-3 text-secondary text-sm">
                            <li className="flex gap-3">
                                <span className="text-accent font-bold">1.</span>
                                <span>You will receive a payment receipt from Razorpay via email.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-accent font-bold">2.</span>
                                <span>We will verify your registration/order.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-accent font-bold">3.</span>
                                <span>Check your email for further details.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <p className="text-primary font-medium">Need help?</p>
                        <div className="flex flex-col gap-2">
                            <a
                                href="mailto:contact@flowingindian.com"
                                className="flex items-center justify-center gap-2 text-secondary hover:text-accent transition-colors"
                            >
                                <Mail size={18} />
                                contact@flowingindian.com
                            </a>
                            <a
                                href="https://www.instagram.com/flowing_indian/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 text-secondary hover:text-accent transition-colors"
                            >
                                <Instagram size={18} />
                                @flowing_indian
                            </a>
                        </div>
                    </div>

                    <div className="pt-6">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-md transition-all duration-300 w-full"
                        >
                            <ArrowLeft size={18} />
                            Back to Home
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default function ThankYouPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
                <Suspense fallback={
                    <div className="flex flex-col items-center gap-4">
                        <Loader2 className="w-12 h-12 text-accent animate-spin" />
                        <p className="text-secondary">Loading...</p>
                    </div>
                }>
                    <ThankYouContent />
                </Suspense>
            </div>
            <Footer />
        </>
    );
}
