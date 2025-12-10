import { ArrowRight } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="relative py-32 px-6 bg-section">
            <div className="relative z-10 max-w-container mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-sm font-semibold tracking-[0.3em] text-muted uppercase">
                                What Is Flowing Indian?
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                                A space to explore{" "}
                                <span className="text-secondary italic font-light">flow in every form.</span>
                            </h3>
                        </div>

                        <div className="space-y-6 text-lg text-secondary leading-relaxed">
                            <p>
                                We play with rope flow, animal / ground flow, gada, mudgar and other indigenous
                                tools. Each practice feeds the others — what you learn in one art translates
                                into the next.
                            </p>
                            <p>
                                Our focus is simple: help you build a body that feels{" "}
                                <span className="text-primary font-medium">expressive, resilient and alive</span>,
                                without burning out or getting bored.
                            </p>
                            <p className="text-secondary/80">
                                You don't have to "be fit" to start. You just need a little curiosity
                                and a willingness to move.
                            </p>
                        </div>
                    </div>

                    {/* Visual Element */}
                    <div className="relative group">
                        <div className="relative aspect-[4/5] bg-section rounded-lg overflow-hidden border border-border">
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                            <img
                                src="/images/about.jpg"
                                alt="Flowing Indian Movement Practice"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
