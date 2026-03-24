import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us & Book Appointment – Nikky Bawa Ladies Salon",
    description:
        "Get in touch with Nikky Bawa Ladies Salon in Bhopal or book your appointment online. Premium bridal makeup, hair styling, and beauty treatments.",
    openGraph: {
        title: "Contact & Book Appointment | Nikky Bawa Ladies Salon",
        description:
            "Ready for luxury? Book your appointment or contact our beauty experts today.",
        type: "website",
    },
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main>
                <ContactHero />
                <ContactInfo />
                <ContactForm />
            </main>
            <Footer />
            <FloatingButtons />
        </>
    );
}
