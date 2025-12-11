export interface Product {
    slug: string;
    name: string;
    tagline: string;
    price: string;
    priceNumber: number;
    description: string;
    benefits: string[];
    whatsIncluded: string[];
    specs?: {
        weight?: string;
        length?: string;
        material?: string;
        duration?: string;
        format?: string;
    };
    paymentLink?: string;
    isService?: boolean;
    imageSrc: string;
    faqs: {
        question: string;
        answer: string;
    }[];
}

export const products: Record<string, Product> = {
    "black-mamba": {
        slug: "black-mamba",
        name: "Black Mamba Rope",
        tagline: "Versatile, forgiving and playful.",
        price: "₹1,500",
        priceNumber: 1500,
        description: "A lighter, all-round rope for learning and exploring. Black Mamba is perfect for beginners and for anyone who wants one rope they can use anywhere.",
        benefits: [
            "Beginner-friendly lightweight design makes it easy to learn basic patterns",
            "Perfect for indoor and outdoor practice sessions",
            "Versatile enough to grow with you as you develop your skills",
            "Smooth polyester material provides consistent feedback",
            "Adjustable length fits practitioners of all heights"
        ],
        whatsIncluded: [
            "1x Black Mamba Rope (300g)",
        ],
        specs: {
            weight: "300 grams",
            length: "Adjustable",
            material: "Polyester"
        },
        paymentLink: "https://rzp.io/rzp/EOdWpfSP",
        imageSrc: "/images/black-mamba.jpg",
        faqs: [
            {
                question: "Is this rope suitable for complete beginners?",
                answer: "Yes! The Black Mamba is our beginner-friendly rope. At 300g, it's light enough to learn basic patterns without fatigue, while still providing good feedback for developing timing and coordination."
            },
            {
                question: "What length should I choose?",
                answer: "The rope is adjustable, so it works for most heights. You can easily customize the length to match your arm span and preferred flow style."
            },
            {
                question: "Can I use this rope outdoors?",
                answer: "Absolutely! The polyester material is durable and works great both indoors and outdoors. Just avoid rough surfaces that might cause excessive wear."
            },
            {
                question: "How do I care for my rope?",
                answer: "Simply wipe down with a damp cloth after use. Avoid leaving it in direct sunlight for extended periods. Store in a cool, dry place when not in use."
            }
        ]
    },
    "hybrid-rope": {
        slug: "hybrid-rope",
        name: "Hybrid Flow Rope",
        tagline: "Heavy, grounded, powerful.",
        price: "₹2,000",
        priceNumber: 2000,
        description: "A denser rope for slower, stronger patterns. The Hybrid Flow Rope helps you feel every path of the rope so you build timing, coordination and strength together.",
        benefits: [
            "Weighted design (500g) provides excellent feedback for developing precision",
            "Heavier feel creates a more grounded, powerful flow experience",
            "Perfect for building strength while refining technique",
            "Smooth flow with enhanced momentum for advanced patterns",
            "Ideal for practitioners ready to deepen their practice"
        ],
        whatsIncluded: [
            "1x Hybrid Flow Rope (500g)",
        ],
        specs: {
            weight: "500 grams",
            length: "Adjustable",
            material: "Polyester"
        },
        paymentLink: "https://rzp.io/rzp/Fhy9QdpO",
        imageSrc: "/images/hybrid-rope.jpg",
        faqs: [
            {
                question: "What makes the Hybrid Rope different from Black Mamba?",
                answer: "The Hybrid Rope is heavier (500g vs 300g), providing more feedback and a grounded feel. It's designed for intermediate movers who want to build strength and refine their technique with a weighted rope."
            },
            {
                question: "Is this too heavy for beginners?",
                answer: "While beginners can use it, we recommend starting with the Black Mamba if you're new to rope flow. The Hybrid's extra weight is better appreciated once you've developed basic coordination and timing."
            },
            {
                question: "Will the extra weight help me build strength?",
                answer: "Yes! The 500g weight provides resistance that helps build shoulder, arm, and core strength while you flow. You'll feel every movement more deeply, which enhances both strength and body awareness."
            },
            {
                question: "Can I adjust the length?",
                answer: "Yes, the rope is fully adjustable to suit your height and flow style. This makes it versatile for different patterns and preferences."
            }
        ]
    },
    "one-to-one": {
        slug: "one-to-one",
        name: "1:1 Flow Practice",
        tagline: "Personal guidance for your body, your life.",
        price: "Contact for Pricing",
        priceNumber: 0,
        isService: true,
        description: "A private online session where we blend rope flow, ground flow and other tools based on what you need most — mobility, coordination, strength, or simply feeling at home in your body again.",
        benefits: [
            "Personalized practice tailored to your specific goals and body",
            "One-on-one attention to refine your technique and form",
            "Convenient online sessions from anywhere",
            "Flexible scheduling to fit your lifestyle",
            "Perfect for beginners or advanced practitioners looking to level up"
        ],
        whatsIncluded: [
            "60-minute private online session",
            "Personalized movement assessment",
            "Custom practice plan based on your goals",
            "Follow-up resources and guidance"
        ],
        specs: {
            duration: "60 minutes",
            format: "Online"
        },
        imageSrc: "/images/about.jpg",
        faqs: [
            {
                question: "Do I need any equipment for the session?",
                answer: "For rope flow sessions, having a rope is helpful but not required. We can work with bodyweight movements if you don't have one yet."
            },
            {
                question: "How do I schedule a session?",
                answer: "Fill out the booking form on this page with your details and goals. Our team will contact you within 24 hours to confirm your session time and discuss your objectives."
            },
            {
                question: "How do online sessions work?",
                answer: "We use video calls to provide real-time feedback on your form and technique. You'll need a device with a camera and enough space to move comfortably. We'll guide you through everything step by step."
            },
            {
                question: "What if I'm a complete beginner?",
                answer: "Perfect! 1:1 sessions are ideal for beginners. We'll start with the basics and build a foundation that works for your body and goals. No prior experience needed."
            },
            {
                question: "Can I book multiple sessions?",
                answer: "Absolutely! Many practitioners book regular sessions (weekly or bi-weekly) to maintain consistency and progress. We can discuss package options during your first session."
            }
        ]
    }
};

export function getProduct(slug: string): Product | undefined {
    return products[slug];
}

export function getAllProducts(): Product[] {
    return Object.values(products);
}
