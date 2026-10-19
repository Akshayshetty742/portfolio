import { ImageResponse } from "next/og";

export const alt =
  "Akshaya B | CSE (AI & ML) student at PES University | AI/ML focus, frontend development";
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
          justifyContent: "space-between",
          padding: "62px 76px",
          color: "#f0f3f2",
          background:
            "radial-gradient(ellipse at 78% 44%, rgba(20, 114, 118, .32), transparent 35%), #090c0e",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -90,
            top: -125,
            width: 590,
            height: 590,
            border: "1px solid rgba(90, 218, 199, .2)",
            borderRadius: "50%",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -18,
            top: -52,
            width: 448,
            height: 448,
            border: "1px solid rgba(90, 218, 199, .13)",
            borderRadius: "50%",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 102,
            top: 147,
            width: 182,
            height: 182,
            border: "1px solid rgba(90, 218, 199, .22)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(75, 190, 170, .12), transparent 72%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              border: "1px solid rgba(117, 231, 212, .42)",
              color: "#78dfca",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 23,
              fontWeight: 700,
            }}
          >
            A.
          </div>
          <span style={{ color: "#c8d1ce", fontSize: 18, letterSpacing: ".04em" }}>
            AKSHAYA B
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span
            style={{
              color: "#82dfcd",
              fontSize: 17,
              letterSpacing: ".2em",
            }}
          >
            AI / ML FOCUS · FRONTEND DEVELOPMENT
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 75,
              lineHeight: 1.03,
              letterSpacing: "-.06em",
              fontWeight: 700,
              maxWidth: 760,
            }}
          >
            <span>Thoughtful software.</span>
            <span>Intelligent by design.</span>
          </div>
          <span style={{ color: "#a7b1ae", fontSize: 20 }}>
            CSE (AI &amp; ML) student · PES University · Bengaluru
          </span>
        </div>
        <div
          style={{
            width: "100%",
            height: 1,
            background: "rgba(164, 190, 184, .24)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
