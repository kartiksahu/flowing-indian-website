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
    paymentLink: string;
    imageSrc?: string; // Optional for now, can add placeholder
    faq: {
        q: string;
        a: string;
    }[];
}

export const events: Event[] = [
    {
        title: "Rope Flow Workshop – Bangalore",
        slug: "rope-flow-bangalore",
        date: "27 February 2025",
        time: "7:00 AM – 9:00 AM",
        venue: "Cubbon Park",
        description: "Learn rhythm, mobility, and rotational movement with Rope Flow.",
        learn: ["Rope Flow Basics", "Rhythm Drills", "Shoulder Mobility", "Footwork Patterns"],
        price: "₹499",
        priceNumber: 499,
        paymentLink: "https://rzp.io/l/YOUR-LINK", // Placeholder, user needs to update
        faq: [
            { q: "Do I need a rope?", a: "We will provide ropes." },
            { q: "Is this beginner friendly?", a: "Yes, open to all levels." }
        ]
    },
    {
        title: "Ground Flow Fundamentals – Mumbai",
        slug: "ground-flow-mumbai",
        date: "15 March 2025",
        time: "6:30 AM – 9:00 AM",
        venue: "Marine Drive Yoga Deck",
        description: "Explore primal movement patterns for strength, flexibility, and control.",
        learn: ["Primal Movement Patterns", "Joint Mobility", "Flow Sequences", "Body Control"],
        price: "₹699",
        priceNumber: 699,
        paymentLink: "https://rzp.io/l/YOUR-LINK-2", // Placeholder
        faq: [
            { q: "What should I wear?", a: "Comfortable athletic wear that allows free movement." },
            { q: "Do I need prior experience?", a: "No, this workshop is suitable for beginners." }
        ]
    },
    {
        title: "Ancient Clubs Flow – Delhi",
        slug: "ancient-clubs-delhi",
        date: "20 April 2025",
        time: "7:30 AM – 10:00 AM",
        venue: "Lodhi Gardens",
        description: "Train with Mudgar and ancient clubs to build shoulder strength, rotational power, and resilience.",
        learn: ["Club Handling Basics", "Swing Mechanics", "Grip Strength", "Rotational Power"],
        price: "₹599",
        priceNumber: 599,
        paymentLink: "https://rzp.io/l/YOUR-LINK-3", // Placeholder
        faq: [
            { q: "Are clubs provided?", a: "Yes, we provide practice clubs." },
            { q: "Is it safe for beginners?", a: "Yes, we start with light weights and focus on technique." }
        ]
    }
];

export function getEventBySlug(slug: string): Event | undefined {
    return events.find(event => event.slug === slug);
}
