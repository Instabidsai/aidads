import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aidads.com"),
  icons: {
    icon: "/icon",
  },
  title: "Justin Brown — AI Venture Factory | aidads.com",
  description:
    "Justin Brown's personal site — showcases 17 AI companies and the venture factory model. 91 autonomous agents. One operator.",
  keywords: [
    "AI venture factory",
    "AI companies",
    "autonomous agents",
    "AI consulting",
    "Justin Brown",
    "aidads",
  ],
  alternates: {
    canonical: "https://aidads.com",
  },
  openGraph: {
    title: "Justin Brown — AI Venture Factory",
    description:
      "Justin Brown's personal site — showcases 17 AI companies and the venture factory model.",
    url: "https://aidads.com",
    siteName: "aidads.com",
    type: "website",
    images: [
      {
        url: "https://aidads.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AiDads — Justin Brown's AI Venture Factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Brown — AI Venture Factory",
    description:
      "Justin Brown's personal site — showcases 17 AI companies and the venture factory model.",
    images: ["https://aidads.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AiDads",
              url: "https://aidads.com",
              description:
                "Justin Brown's personal site — showcases 17 AI companies and the venture factory model",
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <div className="noise-overlay" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
