import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Meta Ads Expert | Get More Qualified Customers From Facebook & Instagram",
  description:
    "Book a free marketing audit call with a Meta Ads expert and discover how to turn Facebook and Instagram into a predictable customer acquisition system for your business.",
  openGraph: {
    title: "Meta Ads Expert | Get More Qualified Customers From Facebook & Instagram",
    description:
      "Book a free marketing audit call with a Meta Ads expert and discover how to turn Facebook and Instagram into a predictable customer acquisition system for your business.",
    url: "https://example.com",
    siteName: "Meta Growth Expert",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Meta Growth Expert customer acquisition system preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads Expert | Get More Qualified Customers From Facebook & Instagram",
    description:
      "Book a free marketing audit call with a Meta Ads expert and discover how to turn Facebook and Instagram into a predictable customer acquisition system for your business.",
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
