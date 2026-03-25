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
  title: "Justin Thompson — AI Venture Factory | aidads.com",
  description:
    "17 AI-powered companies. 91 autonomous agents. One operator. Justin Thompson builds and operates AI-run businesses from a single laptop.",
  keywords: [
    "AI venture factory",
    "AI companies",
    "autonomous agents",
    "AI consulting",
    "Justin Thompson",
  ],
  openGraph: {
    title: "Justin Thompson — AI Venture Factory",
    description:
      "17 AI-powered companies. 91 autonomous agents. One operator.",
    url: "https://aidads.com",
    siteName: "aidads.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Thompson — AI Venture Factory",
    description:
      "17 AI-powered companies. 91 autonomous agents. One operator.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen antialiased">
        <div className="noise-overlay" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
