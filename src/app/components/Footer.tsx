"use client";
import { Phone, MapPin, Mail, Heart, ArrowUp } from "lucide-react";

const footerLinks = {
    Services: [
        { name: "Bridal Makeup", href: "/makeup/" },
        { name: "Hair Styling", href: "/hair-cuts/" },
        { name: "Facial", href: "/facial/" },
        { name: "Skin Whitening", href: "/skin-whitening/" },
        { name: "Hair Removal", href: "/hair-removal/" },
    ],
    "Hair Services": [
        { name: "Hair Color", href: "/hair-color-style/" },
        { name: "Keratin Treatment", href: "/hair-straightening-keratin/" },
        { name: "Hair Extension", href: "/hair-extension/" },
        { name: "Nails", href: "/nails/" },
    ],
    "Quick Links": [
        { name: "Home", href: "/" },
        { name: "About", href: "/about/" },
        { name: "Portfolio", href: "/portfolio/" },
        { name: "Contact", href: "/contact/" },
    ],
};

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="bg-charcoal text-white relative overflow-hidden">
            {/* Decorative top gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-rose-gold/5 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#B76E79" }}>
                            Nikky Bawa
                        </h3>
                        <p className="text-white/50 text-sm mb-6 leading-relaxed">
                            Trusted Beauty Experts Since 1982. Premium bridal makeup, hair styling & beauty treatments in Bhopal.
                        </p>
                        <div className="space-y-2.5">
                            <a href="tel:+919981415156" className="flex items-center gap-2.5 text-white/70 text-sm hover:text-rose-gold-light transition-colors">
                                <Phone size={14} /> +91 99814 15156
                            </a>
                            <a href="mailto:rajanbawabetwa@gmail.com" className="flex items-center gap-2.5 text-white/70 text-sm hover:text-rose-gold-light transition-colors">
                                <Mail size={14} /> rajanbawabetwa@gmail.com
                            </a>
                            <div className="flex items-start gap-2.5 text-white/70 text-sm">
                                <MapPin size={14} className="mt-0.5 shrink-0" />
                                <span>Betwa Apartment, 7th Floor, Bhopal, MP</span>
                            </div>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">{title}</h4>
                            <ul className="space-y-2.5">
                                {links.map((l) => (
                                    <li key={l.name}>
                                        <a
                                            href={l.href}
                                            className="text-white/50 text-sm hover:text-rose-gold-light hover:pl-1 transition-all duration-200"
                                        >
                                            {l.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Section Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-xs text-center sm:text-left">
                        © {new Date().getFullYear()} Nikky Bawa Ladies Salon. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1 text-white/40 text-xs">
                        Made with <Heart size={12} className="text-rose-gold fill-rose-gold mx-0.5" /> in Bhopal
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full border border-white/10 hover:border-rose-gold/50 hover:bg-rose-gold/10 flex items-center justify-center transition-all duration-300"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={16} className="text-white/60" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
