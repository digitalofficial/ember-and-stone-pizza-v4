import type { Metadata } from "next";
import { Bitter, Inter } from "next/font/google";
import "./globals.css";

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ember & Stone Pizza | Wood-Fired Pizza in Tucson, AZ",
  description:
    "Hand-stretched dough, San Marzano tomatoes, and a 900-degree wood-fired oven. Ember & Stone Pizza serves Tucson's finest artisan pizzas. Dine-in, takeout, and catering available.",
  keywords: [
    "wood-fired pizza",
    "Tucson pizza",
    "artisan pizza",
    "Ember & Stone",
    "Italian restaurant Tucson",
  ],
  openGraph: {
    title: "Ember & Stone Pizza | Wood-Fired Pizza in Tucson, AZ",
    description:
      "Hand-stretched dough, San Marzano tomatoes, and a 900-degree wood-fired oven.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Ember & Stone Pizza",
  description:
    "Wood-fired artisan pizza restaurant in Tucson, Arizona. Hand-stretched dough, San Marzano tomatoes, 900-degree oven.",
  servesCuisine: ["Pizza", "Italian"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2841 N Campbell Ave",
    addressLocality: "Tucson",
    addressRegion: "AZ",
    postalCode: "85719",
    addressCountry: "US",
  },
  telephone: "+1-520-555-0187",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "16:00",
      closes: "22:00",
    },
  ],
  priceRange: "$$",
  url: "https://www.emberandstonepizza.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bitter.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
