import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salon Marigold | Hair artistry in Brentwood, TN",
  description: "Salon Marigold is Brittney Shafer's personal hair studio for cuts, color, styling, and thoughtful salon care in Brentwood, Tennessee.",
  metadataBase: new URL("https://salonmarigold.co"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/salon-marigold-favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Salon Marigold | Hair artistry in Brentwood, TN",
    description: "A welcoming, one-on-one salon experience for cuts, color, and the confidence that follows.",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Salon Marigold — Hair artistry in Brentwood, TN" }],
  },
};

const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://salonmarigold.co/#salon",
  name: "Salon Marigold",
  description: "A welcoming, one-on-one hair studio for cuts, color, styling, and thoughtful salon care in Brentwood, Tennessee.",
  foundingDate: "2018",
  image: "https://salonmarigold.co/og.png",
  url: "https://salonmarigold.co",
  telephone: "+1-615-631-5679",
  email: "brittneyshaferhair@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1731 Mallory Lane",
    addressLocality: "Brentwood",
    addressRegion: "TN",
    postalCode: "37027",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday"],
      opens: "09:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessStructuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
