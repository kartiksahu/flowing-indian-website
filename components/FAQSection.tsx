"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "I've never done rope flow or any \"flow art\". Can I still start?",
        answer: "Yes. You don't need a fitness background. We start with simple patterns and build slowly. The Hybrid Rope + a few minutes of practice is enough to begin."
    },
    {
        question: "Do I need a lot of space?",
        answer: "Not really. If you can stand and stretch your arms out without hitting anything, you can practice. A small balcony, living room or terrace is usually enough."
    },
    {
        question: "What's the difference between Black Mamba and Hybrid Rope?",
        answer: "Black Mamba is heavier and more grounded — better if you like a strong, slow feel and already move a bit. Hybrid Rope is lighter and more forgiving — ideal for beginners and as a daily \"do-it-all\" rope."
    },
    {
        question: "What happens in a 1:1 session?",
        answer: "We start with a quick check-in on your body, goals and current routine. Then we guide you through patterns using rope, ground flow and other tools as needed, and leave you with a simple practice you can repeat on your own."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-32 px-6 bg-section">
            <div className="max-w-3xl mx-auto space-y-12">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-primary">
                    Questions You Might Have
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border border-border rounded-lg overflow-hidden bg-background"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-section transition-colors"
                            >
                                <span className="text-lg font-medium text-primary pr-4">
                                    {faq.question}
                                </span>
                                {openIndex === idx ? (
                                    <Minus className="text-accent shrink-0" size={20} />
                                ) : (
                                    <Plus className="text-secondary shrink-0" size={20} />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
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
    );
}
