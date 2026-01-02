export interface Event {
    slug: string;
    title: string;
    date: string;
    time: string;
    venue: string;
    description: string;
    learn: string[];
    price: string;
    priceNumber: number;
    paymentLink?: string; // Optional now
    venueLink?: string;   // New field for map link
    imageSrc?: string;
    faq: {
        q: string;
        a: string;
    }[];
}

export const events: Event[] = [
    {
        title: "Rope Flow Workshop – Bangalore",
        slug: "rope-flow-bangalore",
        date: "10-11 January 2026",
        time: "8:00 AM – 10:00 AM",
        venue: "Flux Studio, Indiranagar, Bangalore",
        description: "Join us for an immersive weekend of Rope Flow. We will cover the fundamental patterns, spinal mechanics, and how to find your flow state. Whether you are a beginner or looking to refine your practice, this workshop will give you the tools to move with freedom. Single Day: ₹1200 | Full Weekend: ₹2000. Book your spot with a ₹500 advance.",
        learn: [
            "Foundations: Underhand & Overhand Patterns",
            "Spinal Waves & Rotational Mobility",
            "The Infinity Loop (Figure 8s)",
            "Dragon Roll & Matador",
            "Footwork & Weight Transfer",
            "Connecting Breath with Movement",
            "Flow State & Improvisation"
        ],
        price: "₹500 (Advance)",
        priceNumber: 500,
        paymentLink: "https://rzp.io/rzp/5kNCUKd5",
        imageSrc: "/images/rope-flow-bangalore.jpg",
        faq: [
            { q: "Do I need a rope?", a: "We will provide ropes." },
            { q: "Is this beginner friendly?", a: "Yes, open to all levels." },
            { q: "Can I attend just one day?", a: "Yes, single day passes are available for ₹1200." }
        ]
    },
    {
        title: "Rope Flow Weekly – Art Forest",
        slug: "rope-flow-art-forest",
        date: "Every Tuesday",
        time: "9:30 AM – 11:00 AM",
        venue: "Art Forest, Auroville, Tamil Nadu",
        venueLink: "https://maps.app.goo.gl/Cn9gTDzf4k5KuY6h7",
        description: "Consistency is key. Join our weekly community sessions to refine your flow. Pay ₹500 at the venue (Drop-in).",
        learn: ["Pattern Refinement", "Flow Drills", "Community Jams", "Individual Feedback"],
        price: "₹500 (Pay at Venue)",
        priceNumber: 500,
        // No paymentLink for this one
        imageSrc: "/images/rope-flow-art-forest.jpg",
        faq: [
            { q: "Do I need to bring my own rope?", a: "We have spare ropes, but bringing your own is recommended." },
            { q: "Is this for beginners?", a: "Yes, we split into groups based on experience." }
        ]
    }
];

export function getEventBySlug(slug: string): Event | undefined {
    return events.find(event => event.slug === slug);
}
