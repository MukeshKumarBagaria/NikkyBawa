"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        text: "I recently visited Nikky Bawa Ladies Salon and was impressed by the professionalism and expertise of the team. From the moment I entered, I felt welcomed and comfortable. The staff was friendly, skilled, and truly passionate about their work.",
        name: "Sara",
        location: "Bhopal",
        service: "Bridal Makeup",
    },
    {
        text: "The bridal makeup was absolutely stunning! Every detail was perfect and the look lasted throughout the entire celebration. I received so many compliments. Nikky Bawa truly understands beauty.",
        name: "Priya Sharma",
        location: "Bhopal",
        service: "Bridal Package",
    },
    {
        text: "Best hair salon experience in Bhopal! The keratin treatment transformed my hair completely. The team is very professional and uses only premium products. Highly recommend!",
        name: "Anjali Verma",
        location: "Bhopal",
        service: "Keratin Treatment",
    },
    {
        text: "I've been a regular client for over 5 years. The consistency in quality and the personal touch they bring to every visit is unmatched. Nikky Bawa is my go-to salon for everything beauty.",
        name: "Meera Patel",
        location: "Bhopal",
        service: "Regular Client",
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((c) => (c + 1) % testimonials.length);
    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="testimonials" className="py-20 sm:py-28 bg-soft-white relative overflow-hidden" ref={ref}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-champagne/30 blur-3xl" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-rose-gold/10 text-rose-gold text-xs font-semibold uppercase tracking-widest mb-4">
                        Testimonials
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        What Our <span className="gradient-text">Clients</span> Say
                    </h2>
                </motion.div>

                {/* Testimonial Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative max-w-3xl mx-auto"
                >
                    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-champagne/30 relative">
                        {/* Quote Icon */}
                        <div className="absolute -top-5 left-8 sm:left-12 w-10 h-10 rounded-full gradient-bg flex items-center justify-center shadow-lg">
                            <Quote size={18} className="text-white" />
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} className="text-gold fill-gold" />
                            ))}
                        </div>

                        {/* Text – animate on change */}
                        <motion.p
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="text-charcoal text-lg sm:text-xl leading-relaxed mb-8"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            &ldquo;{testimonials[current].text}&rdquo;
                        </motion.p>

                        {/* Author */}
                        <motion.div
                            key={`author-${current}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="flex items-center justify-between"
                        >
                            <div>
                                <div className="font-bold text-charcoal text-base">— {testimonials[current].name}</div>
                                <div className="text-warm-gray text-sm">{testimonials[current].location} • {testimonials[current].service}</div>
                            </div>
                            {/* Navigation */}
                            <div className="flex gap-2">
                                <button
                                    onClick={prev}
                                    className="w-10 h-10 rounded-full border border-champagne hover:border-rose-gold hover:bg-rose-gold/5 flex items-center justify-center transition-all duration-300"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft size={18} className="text-charcoal" />
                                </button>
                                <button
                                    onClick={next}
                                    className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center hover:shadow-lg hover:shadow-rose-gold/30 transition-all duration-300"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight size={18} className="text-white" />
                                </button>
                            </div>
                        </motion.div>

                        {/* Dots */}
                        <div className="flex items-center justify-center gap-2 mt-6">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-gradient-to-r from-rose-gold to-gold" : "w-2 bg-champagne"
                                        }`}
                                    aria-label={`Testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
