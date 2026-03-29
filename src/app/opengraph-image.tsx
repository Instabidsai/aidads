import { ImageResponse } from "next/og";

export const alt = "AiDads — Justin Brown's AI Venture Factory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Subtle gradient accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #6366f1, #06b6d4)",
            display: "flex",
          }}
        />

        {/* Main title */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-2px",
            display: "flex",
          }}
        >
          AiDads
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#a1a1aa",
            marginTop: 16,
            display: "flex",
          }}
        >
          17 Companies. 91 Agents. One Operator.
        </div>

        {/* Bottom attribution */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            fontSize: 22,
            fontWeight: 400,
            color: "#52525b",
            display: "flex",
          }}
        >
          Justin Brown — AI Venture Factory
        </div>
      </div>
    ),
    { ...size }
  );
}
