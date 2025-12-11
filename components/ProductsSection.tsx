import ProductCard from "./ProductCard";

export default function ProductsSection() {
    return (
        <section id="offerings" className="py-32 px-6 bg-background">
            <div className="relative z-10 max-w-container mx-auto space-y-16">
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">
                        Start Your Flow Journey
                    </h2>
                    <p className="text-lg md:text-xl text-secondary leading-relaxed">
                        Choose a rope, or go straight into guided practice.{" "}
                        <span className="text-secondary/70">You can always add more later.</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Hybrid Rope - Entry Level */}
                    <ProductCard
                        id="hybrid-rope"
                        label="Product • Rope"
                        name="Hybrid Flow Rope"
                        tagline="Heavy, grounded, powerful."
                        description="A denser rope for slower, stronger patterns. The Hybrid Flow Rope helps you feel every path of the rope so you build timing, coordination and strength together."
                        highlights={[
                            "Great for strength + rhythm",
                            "Slower feedback, deeper feel",
                            "Recommended for intermediate movers",
                        ]}
                        price="₹2,000"
                        ctaText="View Details"
                        ctaLink="/products/hybrid-rope"
                        imageSrc="/images/hybrid-rope.jpg"
                    />

                    {/* Black Mamba - Advanced (Primary) */}
                    <ProductCard
                        id="black-mamba"
                        label="Product • Rope"
                        name="Black Mamba Rope"
                        tagline="Versatile, forgiving and playful."
                        description="A lighter, all-round rope for learning and exploring. Black Mamba is perfect for beginners and for anyone who wants one rope they can use anywhere."
                        highlights={[
                            "Beginner-friendly",
                            "Works indoors & outdoors",
                            "One rope for multiple styles",
                        ]}
                        price="₹1,500"
                        ctaText="View Details"
                        ctaLink="/products/black-mamba"
                        isPrimary={true}
                        imageSrc="/images/black-mamba.jpg"
                    />

                    {/* 1:1 Practice - Service */}
                    <ProductCard
                        id="one-to-one"
                        label="Service • Coaching"
                        name="1:1 Flow Practice"
                        tagline="Personal guidance for your body, your life."
                        description="A private online session where we blend rope flow, ground flow and other tools based on what you need most — mobility, coordination, strength, or simply feeling at home in your body again."
                        highlights={[
                            "Convenient online sessions",
                            "Tailored to your body and background",
                            "Great next step after getting a rope",
                        ]}
                        ctaText="Book a Session"
                        ctaLink="/products/one-to-one"
                        imageSrc="/images/about.jpg"
                    />
                </div>
            </div>
        </section>
    );
}
