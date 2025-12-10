import Link from "next/link";
import { Instagram, Mail, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-background py-20 px-6 border-t border-border">
            <div className="max-w-container mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">

                <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity justify-center md:justify-start">
                        <img
                            src="/logo.png"
                            alt="Flowing Indian"
                            className="h-10 w-auto"
                        />
                        <span className="text-2xl font-bold text-primary">
                            Flowing Indian
                        </span>
                    </Link>
                    <p className="text-secondary max-w-xs">
                        Movement, flow and practice for modern life.
                    </p>
                </div>

                <div className="space-y-4">
                    <p className="text-primary font-medium">Stay in the Flow</p>
                    <div className="flex items-center justify-center md:justify-start gap-6">
                        <a
                            href="mailto:hello@flowingindian.com"
                            className="text-secondary hover:text-accent transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>
                        <a
                            href="https://instagram.com/flowing.indian"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-accent transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram size={24} />
                        </a>
                        <a
                            href="#"
                            className="text-secondary hover:text-accent transition-colors"
                            aria-label="YouTube"
                        >
                            <Youtube size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-container mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary/60">
                <p>© {new Date().getFullYear()} Flowing Indian. All rights reserved.</p>
                <p>
                    For collaborations, workshops or bulk orders:{" "}
                    <a href="mailto:hello@flowingindian.com" className="text-secondary hover:text-primary transition-colors">
                        hello@flowingindian.com
                    </a>
                </p>
            </div>
        </footer>
    );
}
