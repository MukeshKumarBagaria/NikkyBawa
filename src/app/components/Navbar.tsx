"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about/" },
    { name: "Portfolio", href: "/portfolio/" },
    { name: "Services", href: "/#services" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "glass shadow-lg shadow-rose-gold/10 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Nikky Bawa Ladies Salon"
                        width={160}
                        height={48}
                        priority
                        className={`h-10 sm:h-12 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
                    />
                </a>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((l) => (
                        <a
                            key={l.name}
                            href={l.href}
                            className={`text-sm font-medium transition-colors duration-300 relative group ${scrolled ? 'text-charcoal hover:text-rose-gold' : 'text-white/90 hover:text-white'
                                }`}
                        >
                            {l.name}
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-rose-gold to-gold' : 'bg-white/80'
                                }`} />
                        </a>
                    ))}
                </div>

                {/* CTA + Hamburger */}
                <div className="flex items-center gap-3">
                    <a
                        href="tel:+919981415156"
                        className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold gradient-bg hover:shadow-lg hover:shadow-rose-gold/30 transition-all duration-300 shimmer-btn"
                    >
                        <Phone size={16} />
                        Book Now
                    </a>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 rounded-xl hover:bg-champagne/50 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} className={scrolled ? 'text-charcoal' : 'text-white'} /> : <Menu size={24} className={scrolled ? 'text-charcoal' : 'text-white'} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="lg:hidden fixed inset-0 top-16 bg-soft-white/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((l, i) => (
                            <motion.a
                                key={l.name}
                                href={l.href}
                                onClick={() => setMobileOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-2xl font-semibold text-charcoal hover:text-rose-gold transition-colors"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {l.name}
                            </motion.a>
                        ))}
                        <motion.a
                            href="tel:+919981415156"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-2 px-8 py-3 rounded-full text-white text-lg font-semibold gradient-bg"
                        >
                            <Phone size={20} />
                            Call Now
                        </motion.a>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-2 text-warm-gray text-sm"
                        >
                            <MapPin size={14} />
                            Bhopal, MP
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
