import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-[-10%] md:left-10 w-64 h-64 bg-[var(--color-rose-gold)]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-[-10%] md:right-10 w-80 h-80 bg-[var(--color-gold)]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] border border-[var(--color-rose-gold)]/10 rounded-full animate-[rotate-slow_20s_linear_infinite] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 relative">
            <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none gradient-text tracking-tighter">
              404
            </h1>
            <div className="absolute -top-4 -right-8 w-16 h-16 bg-[var(--color-champagne)] rounded-full blur-2xl -z-10"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 animate-fade-up">
            Oops! Page Not Found
          </h2>
          
          <p className="text-lg md:text-xl text-[var(--color-warm-gray)] max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            It looks like the page you are looking for has vanished into thin air, or perhaps it never existed. Let's get you back to beauty.
          </p>
          
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all bg-[var(--color-charcoal)] border border-transparent rounded-full hover:bg-[var(--color-rose-gold)] hover:shadow-[0_0_20px_rgba(183,110,121,0.4)] hover-lift shimmer-btn"
            >
              Return Home
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
