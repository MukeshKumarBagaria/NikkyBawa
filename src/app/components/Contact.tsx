"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const contactInfo = [
    {
        icon: Phone,
        title: "Call Us",
        lines: ["+91 99814 15156", "+91 91111 88852", "+91 88274 50007"],
        href: "tel:+919981415156",
    },
    {
        icon: Mail,
        title: "Email Us",
        lines: ["rajanbawabetwa@gmail.com"],
        href: "mailto:rajanbawabetwa@gmail.com",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        lines: ["Betwa Apartment, 7th Floor", "Near Rangmahal Cinema", "New Market, Bhopal, MP"],
        href: "https://maps.google.com/?q=Nikky+Bawa+Ladies+Salon+Bhopal",
    },
    {
        icon: Clock,
        title: "Working Hours",
        lines: ["Mon – Sat: 10 AM – 8 PM", "Sunday: By Appointment"],
        href: undefined,
    },
];

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="contact" className="py-20 sm:py-28 bg-champagne-light relative overflow-hidden" ref={ref}>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rose-gold/5 blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-rose-gold/10 text-rose-gold text-xs font-semibold uppercase tracking-widest mb-4">
                        Get in Touch
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Visit <span className="gradient-text">Our Salon</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {contactInfo.map((c, i) => (
                            <motion.div
                                key={c.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-champagne/40 hover:shadow-lg hover:border-rose-gold/20 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-rose-gold/20 transition-shadow duration-300">
                                    <c.icon size={22} className="text-white" />
                                </div>
                                <h4 className="font-bold text-charcoal text-base mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {c.title}
                                </h4>
                                {c.lines.map((line) =>
                                    c.href ? (
                                        <a
                                            key={line}
                                            href={c.href}
                                            className="block text-warm-gray text-sm hover:text-rose-gold transition-colors duration-200"
                                        >
                                            {line}
                                        </a>
                                    ) : (
                                        <p key={line} className="text-warm-gray text-sm">{line}</p>
                                    )
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Map Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="rounded-3xl overflow-hidden shadow-lg border border-champagne/30 h-80 lg:h-auto min-h-[350px]"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.5!2d77.4!3d23.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE1JzM2LjAiTiA3N8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Nikky Bawa Salon Location"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
