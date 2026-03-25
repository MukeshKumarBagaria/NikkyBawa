import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import AboutHero from "./components/AboutHero";
import OurStory from "./components/OurStory";
import Journey from "./components/Journey";
import Philosophy from "./components/Philosophy";
import Commitment from "./components/Commitment";
import AboutCTA from "./components/AboutCTA";
import AwardVideoSection from "./components/AwardVideoSection";

export const metadata: Metadata = {
    title: "About Us – Nikky Bawa Ladies Salon | Trusted Beauty Experts Since 1982",
    description:
        "Learn about Nikky Bawa Ladies Salon – founded in 1982, one of Central India's most trusted beauty brands. Bridal makeup, hair styling, beauty training academy in Bhopal.",
    openGraph: {
        title: "About Nikky Bawa Ladies Salon | Our Story Since 1982",
        description:
            "From a single salon in 1982 to Central India's most trusted beauty brand. Discover our journey, philosophy, and commitment to excellence.",
        type: "website",
    },
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main>
                <AboutHero />
                <OurStory />
                <Journey />
                <Philosophy />
                <Commitment />
                <AwardVideoSection />
                <AboutCTA />
            </main>
            <Footer />
            <FloatingButtons />
        </>
    );
}
