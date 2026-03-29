import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships — 50/50 AI Ventures | AiDads",
  description:
    "Partner with Justin Brown: bring your domain expertise, he brings the AI. 50/50 revenue split on AI-powered products.",
  alternates: {
    canonical: "https://aidads.com/partnerships",
  },
};

export default function PartnershipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
