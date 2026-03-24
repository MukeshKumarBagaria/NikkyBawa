"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
    {
        icon: Phone,
        title: "Call Us",
        lines: ["+91 99814 15156", "+91 91111 88852"],
        sub: "Available during working hours",
        href: "tel:+919981415156",
        delay: 0.1,
    },
    {
        icon: Mail,
        title: "Email Us",
        lines: ["rajanbawabetwa@gmail.com"],
        sub: "We'll reply within 24 hours",
        href: "mailto:rajanbawabetwa@gmail.com",
        delay: 0.2,
    },
    {
        icon: MapPin,
        title: "Visit Us",
        lines: ["Betwa Apartment, 7th Floor", "Near Rangmahal Cinema, New Market"],
        sub: "Bhopal, MP",
        href: "https://maps.google.com/?q=Nikky+Bawa+Ladies+Salon+Bhopal",
        delay: 0.3,
    },
    {
        icon: Clock,
        title: "Working Hours",
        lines: ["Mon – Sat: 10 AM – 8 PM"],
        sub: "Sunday: By Appointment",
        href: undefined,
        delay: 0.4,
    },
];

export default function ContactInfo() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-20 relative bg-white" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: item.delay }}
                            className="bg-soft-white rounded-2xl p-8 border border-champagne/30 text-center hover:shadow-xl hover:shadow-rose-gold/5 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-gold/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                            
                            <div className="w-14 h-14 mx-auto rounded-full bg-champagne-light flex items-center justify-center mb-6 group-hover:bg-rose-gold/10 transition-colors">
                                <item.icon size={24} className="text-rose-gold" />
                            </div>
                            
                            <h3 className="text-xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {item.title}
                            </h3>
                            
                            <div className="space-y-1 mb-4">
                                {item.lines.map((line) => (
                                    item.href ? (
                                        <a href={item.href} key={line} className="block text-warm-gray hover:text-rose-gold transition-colors">
                                            {line}
                                        </a>
                                    ) : (
                                        <p key={line} className="text-warm-gray">{line}</p>
                                    )
                                ))}
                            </div>
                            
                            <p className="text-xs text-rose-gold/70 uppercase tracking-widest font-semibold">
                                {item.sub}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
