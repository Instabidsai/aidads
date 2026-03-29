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
  authors: [{ name: "Justin Brown", url: "https://aidads.com" }],
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Brown — AI Venture Factory",
    description:
      "Justin Brown's personal site — showcases 17 AI companies and the venture factory model.",
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
              sameAs: [
                "https://linkedin.com/in/justinthompson",
                "https://github.com/Instabidsai",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AiDads",
              url: "https://aidads.com",
              description:
                "Justin Brown's AI Venture Factory — 17 companies, 91 agents, one operator",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://aidads.com/ecosystem?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Justin Brown",
              url: "https://aidads.com",
              jobTitle: "AI Venture Factory Operator",
              worksFor: {
                "@type": "Organization",
                name: "AiDads",
              },
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
