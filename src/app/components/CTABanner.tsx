"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Gift, Sparkles } from "lucide-react";

export default function CTABanner() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="py-20 relative overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 gradient-bg-animated" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3N2Zz4=')] opacity-30" />

            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-white/10" style={{ animation: "float 6s ease-in-out infinite" }} />
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border border-white/10" style={{ animation: "float-delayed 8s ease-in-out infinite" }} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6">
                        <Gift size={16} className="text-white" />
                        <span className="text-white text-sm font-medium">Special Offer</span>
                    </div>

                    <h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Get 25% Off Selected Services
                    </h2>
                    <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                        Experience luxury beauty services at Nikky Bawa Ladies Salon. Let our professionals take care of you and help you achieve the look you desire.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="tel:+919981415156"
                            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-rose-gold font-bold text-base hover:bg-champagne hover:shadow-2xl transition-all duration-300"
                        >
                            <Calendar size={20} />
                            Book Your Appointment
                        </a>
                        <a
                            href="tel:+919981415156"
                            className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base border-2 border-white/40 hover:bg-white/10 transition-all duration-300"
                        >
                            <Sparkles size={20} />
                            View All Offers
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
