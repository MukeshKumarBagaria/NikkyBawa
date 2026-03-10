import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nikky Bawa Ladies Salon | Best Bridal Makeup & Hair Salon in Bhopal",
  description:
    "Nikky Bawa Ladies Salon – Trusted beauty experts since 1982. Premium bridal makeup, hair styling, skin care, and beauty treatments in Bhopal. Book your appointment today!",
  keywords: [
    "salon in bhopal",
    "best bridal makeup artist in bhopal",
    "hair salon in bhopal",
    "skin clinic in bhopal",
    "nikky bawa salon",
    "ladies salon bhopal",
    "beauty parlour bhopal",
  ],
  openGraph: {
    title: "Nikky Bawa Ladies Salon | Luxury Beauty & Bridal Makeup in Bhopal",
    description:
      "Step into luxury. Premium bridal makeup, hair styling & skin care since 1982. Trusted by thousands in Bhopal.",
    type: "website",
    locale: "en_IN",
    siteName: "Nikky Bawa Ladies Salon",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikky Bawa Ladies Salon | Luxury Beauty in Bhopal",
    description:
      "Premium bridal makeup, hair styling & beauty treatments since 1982.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Nikky Bawa Ladies Salon",
              image: "/images/salon-hero.png",
              telephone: ["+919981415156", "+919111188852", "+918827450007"],
              email: "rajanbawabetwa@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Betwa Apartment, 7th Floor, Near Rangmahal Cinema, New Market",
                addressLocality: "Bhopal",
                addressRegion: "Madhya Pradesh",
                addressCountry: "IN",
              },
              url: "https://nikkybawa.com",
              priceRange: "₹₹",
              foundingDate: "1982",
              description:
                "Premium beauty salon offering bridal makeup, hair styling, skin care and beauty treatments since 1982.",
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
