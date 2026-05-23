import { ImageResponse } from "next/og";
import { profile } from "@/lib/data/profile";

export const runtime = "edge";
export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const MINT = "rgb(46, 230, 168)";
const BG = "#06080a";
const FG = "#ffffff";
const MUTED = "#8a8f98";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BG,
          color: FG,
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          padding: 80,
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 50% at 85% 20%, rgba(46,230,168,0.18), transparent 60%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 2,
            color: FG,
            zIndex: 1,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: 999,
              background: MINT,
              color: "#000",
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            S
          </span>
          <span>{profile.initials}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            zIndex: 1,
          }}
        >
          <div style={{ fontSize: 26, color: MUTED }}>{profile.greeting}</div>
          <div
            style={{
              fontSize: 120,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: -4,
              display: "flex",
              flexDirection: "column",
              color: FG,
            }}
          >
            <span>{profile.firstName}</span>
            <span style={{ color: MINT }}>{profile.lastName}</span>
          </div>
          <div style={{ fontSize: 28, color: FG, fontWeight: 600 }}>
            {profile.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: MUTED,
            zIndex: 1,
          }}
        >
          <span
            style={{
              maxWidth: 720,
              color: FG,
              lineHeight: 1.4,
              fontSize: 24,
            }}
          >
            {profile.tagline}
          </span>
          <span>{profile.email}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
