"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ContactHero() {
    const scrollToForm = () => {
        const formSection = document.getElementById("contact-form-section");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-champagne-light pt-20">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full gradient-bg-animated opacity-[0.03]" />
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-rose-gold/10 blur-[80px] blob" />
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold/10 blur-[100px] blob" style={{ animationDelay: "2s" }} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 my-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-rose-gold/10 text-rose-gold text-xs font-semibold uppercase tracking-widest mb-6">
                        Get In Touch
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    Let's Plan Your <span className="gradient-text">Beauty Journey</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg sm:text-xl text-warm-gray mb-10 max-w-2xl mx-auto"
                >
                    Whether you have a question about our services or you're ready to book your next appointment, we're here to help you look and feel your absolute best.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <button
                        onClick={scrollToForm}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold gradient-bg hover-lift shimmer-btn group"
                    >
                        Book an Appointment
                        <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
