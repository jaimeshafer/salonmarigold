import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salon Marigold | Hair artistry in Brentwood, TN",
  description: "Salon Marigold is Brittney Shafer's personal hair studio for cuts, color, styling, and thoughtful salon care in Brentwood, Tennessee.",
  metadataBase: new URL("https://salonmarigold.co"),
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  openGraph: {
    title: "Salon Marigold | Hair artistry in Brentwood, TN",
    description: "A welcoming, one-on-one salon experience for cuts, color, and the confidence that follows.",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Salon Marigold — Hair artistry in Brentwood, TN" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
