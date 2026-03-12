"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, BookOpen, FlaskConical, UserCheck } from "lucide-react";

const commitments = [
    { icon: Lightbulb, title: "Advanced Technologies", desc: "Investing in the latest beauty tools and technologies" },
    { icon: BookOpen, title: "Professional Training", desc: "Continuous skill development for our team" },
    { icon: FlaskConical, title: "Research & Innovation", desc: "Staying ahead with new treatment innovations" },
    { icon: UserCheck, title: "Customized Solutions", desc: "Individual beauty plans for every client" },
];

export default function Commitment() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="py-20 sm:py-28 bg-champagne-light relative overflow-hidden" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-rose-gold/10 text-rose-gold text-xs font-semibold uppercase tracking-widest mb-4">
                        Our Promise
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Our <span className="gradient-text">Commitment</span>
                    </h2>
                    <p className="text-warm-gray text-base sm:text-lg max-w-2xl mx-auto">
                        Beauty is constantly evolving. That&apos;s why we continuously invest in excellence and innovation to serve you better.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {commitments.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: i * 0.12, duration: 0.5 }}
                            className="bg-white rounded-2xl p-6 text-center shadow-sm border border-champagne/40 hover:shadow-lg hover:border-rose-gold/20 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 mx-auto rounded-2xl gradient-bg flex items-center justify-center mb-4 group-hover:shadow-md group-hover:shadow-rose-gold/20 transition-shadow">
                                <c.icon size={24} className="text-white" />
                            </div>
                            <h4
                                className="font-bold text-charcoal text-sm mb-2"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {c.title}
                            </h4>
                            <p className="text-warm-gray text-xs leading-relaxed">{c.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Closing statement */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.7 }}
                    className="text-center text-warm-gray text-base sm:text-lg max-w-3xl mx-auto mt-12 leading-relaxed"
                >
                    Today, <strong className="text-charcoal">Nikky Bawa Ladies Salon stands as a symbol of beauty, professionalism, and trust</strong>, offering premium beauty and wellness services to clients who expect nothing but the best.
                </motion.p>
            </div>
        </section>
    );
}
