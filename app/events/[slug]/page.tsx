import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin, CheckCircle, ArrowLeft, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getEventBySlug, events } from "@/lib/events";
import EventPageClient from "@/components/EventPageClient";

// Generate static params for all events
export async function generateStaticParams() {
    return events.map((event) => ({
        slug: event.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = getEventBySlug(slug);

    if (!event) {
        return {
            title: "Event Not Found | Flowing Indian",
        };
    }

    return {
        title: `${event.title} | Flowing Indian`,
        description: event.description,
    };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = getEventBySlug(slug);

    if (!event) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <EventPageClient event={event} />
            <Footer />
        </>
    );
}
