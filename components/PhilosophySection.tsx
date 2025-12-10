export default function PhilosophySection() {
    return (
        <section id="philosophy" className="relative py-32 px-6 bg-background overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
                <img
                    src="/images/philosophy-bg.jpg"
                    alt="Rope Flow Pattern"
                    className="w-full h-full object-cover opacity-30"
                />
            </div>

            <div className="relative z-20 max-w-4xl mx-auto text-center space-y-12">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">
                        The Philosophy
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <div className="space-y-8 text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
                    <p>
                        Flowing Indian was born from the realization that movement should
                        connect—not fragment—the body. Instead of chasing intensity or
                        aesthetics, the practice emphasizes flow, awareness, and
                        transferability between disciplines.
                    </p>
                    <p>
                        Whether through rope, ground work, or strength-based movement, the
                        goal is the same: to move with clarity, adaptability, and presence—on
                        the mat and in life.
                    </p>
                </div>
            </div>
        </section>
    );
}
