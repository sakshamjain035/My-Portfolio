import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Saksham Jain — AI Digital Marketing & Growth Architect | 3D Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#050711",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2px, transparent 0)",
          backgroundSize: "50px 50px",
          padding: "60px 80px",
          color: "#f8fafc",
          fontFamily: "sans-serif",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Ambient Glows */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            background: "rgba(6, 182, 212, 0.15)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "200px",
            width: "500px",
            height: "500px",
            background: "rgba(99, 102, 241, 0.12)",
            borderRadius: "50%",
            filter: "blur(100px)",
          }}
        />

        {/* Top Header Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px 20px",
            borderRadius: "9999px",
            background: "rgba(6, 182, 212, 0.1)",
            border: "1px solid rgba(6, 182, 212, 0.3)",
            color: "#22d3ee",
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "0.5px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#22d3ee",
            }}
          />
          <span>AI MARKETING & 3D GROWTH ARCHITECT</span>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Saksham Jain
          </h1>
          <p
            style={{
              fontSize: "26px",
              color: "#94a3b8",
              margin: 0,
              maxWidth: "900px",
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            Scaling brands using AI-driven Predictive ROI Models, Programmatic SEO Pipelines, and Interactive WebGL Experiences.
          </p>
        </div>

        {/* Footer Metrics / Skills Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "30px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div style={{ display: "flex", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#22d3ee" }}>
                $4.5M+
              </span>
              <span style={{ fontSize: "14px", color: "#64748b" }}>Ad Spend Optimized</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#38bdf8" }}>
                +340%
              </span>
              <span style={{ fontSize: "14px", color: "#64748b" }}>ROAS Lift</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#818cf8" }}>
                15M+
              </span>
              <span style={{ fontSize: "14px", color: "#64748b" }}>Organic Reach</span>
            </div>
          </div>

          <div
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#e2e8f0",
              background: "rgba(255, 255, 255, 0.05)",
              padding: "10px 24px",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            sakshamjain.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
