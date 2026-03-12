"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Phone, Heart } from "lucide-react";

export default function PortfolioCTA() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="py-20 relative overflow-hidden" ref={ref}>
            <div className="absolute inset-0 gradient-bg-animated" />
            <div
                className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-white/10"
                style={{ animation: "float 6s ease-in-out infinite" }}
            />
            <div
                className="absolute bottom-10 right-10 w-32 h-32 rounded-full border border-white/10"
                style={{ animation: "float-delayed 8s ease-in-out infinite" }}
            />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6">
                        <Heart size={16} className="text-white fill-white/50" />
                        <span className="text-white text-sm font-medium">
                            Your Dream Look Awaits
                        </span>
                    </div>

                    <h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Love What You See?
                    </h2>
                    <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                        Let our expert bridal artists create a stunning look just for you.
                        Book a consultation today and join our growing family of happy
                        brides.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="tel:+919981415156"
                            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-rose-gold-dark font-bold text-base hover:bg-champagne hover:shadow-2xl transition-all duration-300"
                        >
                            <Calendar size={20} />
                            Book Appointment
                        </a>
                        <a
                            href="tel:+919981415156"
                            className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base border-2 border-white/40 hover:bg-white/10 transition-all duration-300"
                        >
                            <Phone size={20} />
                            +91 99814 15156
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
