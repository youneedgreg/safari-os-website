import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

/**
 * Generated at build time, so every share card is a real 1200x630 image without
 * a binary asset in the repo. `alt` becomes the og:image:alt tag.
 */
export const alt = "Safari OS — the operating system for safari operators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F9F8",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "#15803D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 18, height: 18, borderRadius: 9, background: "#DCFCE7" }} />
          </div>
          <div style={{ fontSize: 36, color: "#0B120F" }}>{SITE.name}</div>
          <div style={{ fontSize: 22, color: "#15803D", letterSpacing: 3 }}>
            {SITE.alternateName}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, color: "#0B120F", lineHeight: 1.05, letterSpacing: -2 }}>
            The operating system for safari operators.
          </div>
          <div style={{ fontSize: 30, color: "#5C665F", lineHeight: 1.35 }}>
            Enquiry, quote, costing, itinerary, invoice, dispatch — one platform.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
