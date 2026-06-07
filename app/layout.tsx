import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

const metaPixelId = "961536226589180";

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
      <body className={inter.className}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
