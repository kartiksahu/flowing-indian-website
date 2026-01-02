import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { events } from "@/lib/events";

export const metadata = {
    title: "Events & Workshops | Flowing Indian",
    description: "Join our upcoming workshops on Rope Flow, Ground Flow, and Ancient Clubs across India.",
};

export default function EventsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-background text-primary pt-24 pb-20">
                {/* Hero Section */}
                <section className="px-6 mb-16">
                    <div className="max-w-container mx-auto text-center space-y-6 animate-slide-up">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Move With Us
                        </h1>
                        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
                            Flow Arts, Rope Flow, Ground Flow, and Ancient Clubs — all brought to different cities so you can learn, train, and transform.
                        </p>
                    </div>
                </section>

                {/* Events Grid */}
                <section className="px-6">
                    <div className="max-w-container mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {events.map((event, index) => (
                                <div
                                    key={event.slug}
                                    className="group bg-section border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 flex flex-col animate-fade-in"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="p-8 flex-grow space-y-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                                {event.title}
                                            </h3>
                                            <p className="text-secondary leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>

                                        <div className="space-y-3 text-sm text-secondary/80">
                                            <div className="flex items-center gap-3">
                                                <Calendar size={18} className="text-accent" />
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Clock size={18} className="text-accent" />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <MapPin size={18} className="text-accent" />
                                                <span>{event.venue}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 pt-0 mt-auto">
                                        <Link
                                            href={`/events/${event.slug}`}
                                            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-background border border-border hover:bg-accent hover:text-white hover:border-accent text-primary font-semibold rounded-md transition-all duration-300 group-hover:translate-y-[-2px]"
                                        >
                                            View Details
                                            <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {events.length === 0 && (
                            <div className="text-center py-20 border border-border border-dashed rounded-lg">
                                <p className="text-secondary text-lg">No upcoming events scheduled at the moment.</p>
                                <p className="text-secondary/60 mt-2">Check back soon or follow us on Instagram for updates.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Newsletter / Stay Updated */}
                <section className="px-6 mt-20">
                    <div className="max-w-container mx-auto bg-section border border-border rounded-lg p-8 md:p-12 text-center space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">
                            Stay Updated
                        </h2>
                        <p className="text-secondary max-w-xl mx-auto">
                            Follow us on Instagram <a href="https://instagram.com/flowingindian" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">@flowingindian</a> to get updates on new workshops, city tours, and retreats.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
