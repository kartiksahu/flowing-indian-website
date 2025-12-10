import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

interface ProductCardProps {
    id: string;
    label: string;
    name: string;
    tagline: string;
    description: string;
    highlights: string[];
    price?: string;
    ctaText: string;
    ctaLink: string;
    imageSrc: string;
    isPrimary?: boolean;
}

export default function ProductCard({
    id,
    label,
    name,
    tagline,
    description,
    highlights,
    price,
    ctaText,
    ctaLink,
    imageSrc,
    isPrimary = false,
}: ProductCardProps) {
    return (
        <div
            className={`group relative flex flex-col h-full rounded-lg overflow-hidden transition-all duration-300 border ${isPrimary
                    ? "bg-section border-accent/30 hover:border-accent/50"
                    : "bg-section border-border hover:border-muted/50"
                }`}
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-section to-transparent z-10" />
                <img
                    src={imageSrc}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span
                        className={`px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded ${isPrimary ? "bg-accent text-white" : "bg-background/80 backdrop-blur text-secondary"
                            }`}
                    >
                        {label}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col p-8 space-y-6">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                        {name}
                    </h3>
                    <p className="text-sm font-medium text-muted tracking-wide uppercase">{tagline}</p>
                </div>

                <p className="text-secondary leading-relaxed text-sm flex-1">{description}</p>

                <div className="space-y-3 pt-4 border-t border-border">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3 text-sm text-secondary">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                        </div>
                    ))}
                </div>

                <div className="pt-6 space-y-4">
                    {price && (
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-primary">{price}</span>
                            <span className="text-sm text-secondary/70">/ rope</span>
                        </div>
                    )}

                    <Link
                        href={ctaLink}
                        className={`w-full py-4 rounded-md font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${isPrimary
                                ? "bg-accent hover:bg-accent/90 text-white"
                                : "bg-background hover:bg-background/80 text-primary border border-border hover:border-muted"
                            }`}
                    >
                        {ctaText}
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
