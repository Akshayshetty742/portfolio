import { ImageResponse } from "next/og";

// Required by Next.js file convention — auto-populates og:image metadata
export const alt = "Akshaya B – Aspiring AI/ML & Frontend Developer | PES University";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#050505",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top-right cyan glow orb */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(34,211,238,0.05) 50%, transparent 70%)",
            display: "flex",
          }}
        />
        {/* Bottom-left purple glow orb */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "64px 80px",
          }}
        >
          {/* Monogram badge + pill tag row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: "linear-gradient(135deg, #22d3ee, #3b82f6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                fontWeight: 900,
                color: "#000",
                marginRight: 16,
                boxShadow: "0 0 24px rgba(34,211,238,0.4)",
              }}
            >
              A
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "6px 16px",
                borderRadius: 999,
                border: "1px solid rgba(34,211,238,0.3)",
                background: "rgba(34,211,238,0.08)",
                color: "#22d3ee",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.12em",
              }}
            >
              AI • FRONTEND • CREATOR
            </div>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              marginBottom: 16,
              display: "flex",
            }}
          >
            Akshaya B
          </div>

          {/* Role — plain cyan, no background-clip (not supported in ImageResponse) */}
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: "#22d3ee",
              marginBottom: 20,
              display: "flex",
            }}
          >
            AI/ML &amp; Frontend Developer
          </div>

          {/* Institution */}
          <div
            style={{
              fontSize: 20,
              color: "#94a3b8",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
            }}
          >
            CSE (AI &amp; ML) Student  •  PES University, Bengaluru
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(90deg, transparent, #22d3ee, #3b82f6, transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
