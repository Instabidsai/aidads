import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecosystem — 17 AI Companies | AiDads",
  description:
    "Explore the AiDads ecosystem: 17 interconnected AI companies with shared intelligence, tools, and growth loops.",
  alternates: {
    canonical: "https://aidads.com/ecosystem",
  },
};

export default function EcosystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
