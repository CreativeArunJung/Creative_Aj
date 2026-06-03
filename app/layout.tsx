import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Free 1:1 Digital Marketing Consultation | CreativeAJ",
    template: "%s | CreativeAJ"
  },
  description:
    "Get a free 1:1 consultation and a customized marketing plan to bring more leads and customers to your business.",
  metadataBase: new URL("https://creativeaj.com"),
  openGraph: {
    title: "Get A Customized Marketing Plan To Bring More Leads And Customers",
    description:
      "Free 1:1 consultation for business owners who feel stuck and need a clear strategy to grow.",
    url: "/",
    siteName: "CreativeAJ",
    images: [
      {
        url: "/creativeaj-logo-cropped.png",
        width: 1200,
        height: 630,
        alt: "CreativeAJ"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Get A Customized Marketing Plan To Bring More Leads And Customers",
    description:
      "Free 1:1 consultation for business owners who feel stuck and need a clear strategy to grow.",
    images: ["/creativeaj-logo-cropped.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
