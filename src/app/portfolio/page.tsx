import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import PortfolioHero from "./components/PortfolioHero";

const PortfolioGallery = dynamic(() => import("./components/PortfolioGallery"), { ssr: true });
const PortfolioCTA = dynamic(() => import("./components/PortfolioCTA"), { ssr: true });

export const metadata: Metadata = {
    title: "Portfolio – Nikky Bawa Ladies Salon | Bridal Makeup Gallery Bhopal",
    description:
        "Explore our stunning bridal makeup portfolio. See real transformations and exquisite beauty artistry by Nikky Bawa Ladies Salon – Bhopal's most trusted bridal makeup artists since 1982.",
    keywords: [
        "bridal makeup portfolio bhopal",
        "wedding makeup gallery",
        "nikky bawa makeup photos",
        "best bridal makeup artist bhopal",
        "bridal makeup before after",
        "wedding beauty looks bhopal",
    ],
    openGraph: {
        title: "Portfolio – Nikky Bawa Ladies Salon | Bridal Makeup Gallery",
        description:
            "Explore our stunning bridal makeup portfolio. Real transformations and exquisite beauty artistry since 1982.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Bridal Makeup Portfolio – Nikky Bawa Ladies Salon",
        description:
            "Stunning bridal makeup transformations by Bhopal's most trusted beauty experts.",
    },
};

export default function PortfolioPage() {
    return (
        <>
            <Navbar />
            <main>
                <PortfolioHero />
                <PortfolioGallery />
                <PortfolioCTA />
            </main>
            <Footer />
            <FloatingButtons />
        </>
    );
}
