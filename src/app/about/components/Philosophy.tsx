"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Palette } from "lucide-react";

const values = [
    {
        icon: Award,
        title: "Excellence",
        desc: "Delivering the highest standards in beauty treatments, services, and customer experience. Every detail matters.",
        gradient: "from-rose-gold to-burgundy",
    },
    {
        icon: Heart,
        title: "Personalization",
        desc: "Understanding every client's unique beauty needs and creating customized solutions tailored just for you.",
        gradient: "from-gold to-rose-gold",
    },
    {
        icon: Palette,
        title: "Customization",
        desc: "Providing tailored treatments and services designed to achieve the best possible results for each individual.",
        gradient: "from-deep-plum to-rose-gold",
    },
];

export default function Philosophy() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="py-20 sm:py-28 bg-soft-white relative overflow-hidden" ref={ref}>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-champagne/30 blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-rose-gold/10 text-rose-gold text-xs font-semibold uppercase tracking-widest mb-4">
                        Our Philosophy
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Built on <span className="gradient-text">Core Values</span>
                    </h2>
                    <p className="text-warm-gray text-base sm:text-lg max-w-2xl mx-auto">
                        These values have helped Nikky Bawa become one of the largest, most respected, and trusted beauty brands in Central India.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {values.map((v, i) => (
                        <motion.div
                            key={v.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className="group relative bg-white rounded-3xl p-8 shadow-sm border border-champagne/40 hover:shadow-xl hover:border-rose-gold/20 transition-all duration-500 hover-lift text-center"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 mx-auto rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-rose-gold/30 transition-shadow duration-300">
                                <v.icon size={28} className="text-white" />
                            </div>

                            <h3
                                className="text-xl font-bold text-charcoal mb-3 group-hover:text-rose-gold transition-colors duration-300"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {v.title}
                            </h3>
                            <p className="text-warm-gray text-sm leading-relaxed">{v.desc}</p>

                            {/* Decorative bottom accent */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full bg-gradient-to-r from-rose-gold to-gold group-hover:w-16 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
