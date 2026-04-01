import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const Welcome = dynamic(() => import("./components/Welcome"), { ssr: true });
const Services = dynamic(() => import("./components/Services"), { ssr: true });
const PortfolioShowcase = dynamic(() => import("./components/PortfolioShowcase"), { ssr: true });
const CTABanner = dynamic(() => import("./components/CTABanner"), { ssr: true });
const Testimonials = dynamic(() => import("./components/Testimonials"), { ssr: true });
const Contact = dynamic(() => import("./components/Contact"), { ssr: true });
const Footer = dynamic(() => import("./components/Footer"), { ssr: true });
const FloatingButtons = dynamic(() => import("./components/FloatingButtons"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="section-divider" />
        <Welcome />
        <Services />
        <PortfolioShowcase />
        <CTABanner />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
