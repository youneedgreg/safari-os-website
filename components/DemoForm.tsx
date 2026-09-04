"use client";

import { useActionState } from "react";
import { requestDemo } from "@/app/actions";
import type { EnquiryResult } from "@/lib/enquiry";

const field: React.CSSProperties = {
  border: "1px solid var(--line-strong)",
  borderRadius: 7,
  padding: "11px 13px",
  fontSize: 15,
  background: "var(--surface)",
  color: "var(--fg)",
  width: "100%",
};

const labelText: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: 10.5,
  letterSpacing: "0.11em",
  color: "var(--faint)",
};

const row: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: 18,
};

function Label({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <span style={labelText}>{text}</span>
      {children}
    </label>
  );
}

export default function DemoForm() {
  const [state, action, pending] = useActionState<EnquiryResult | null, FormData>(
    requestDemo,
    null,
  );

  if (state?.ok) {
    return (
      <div
        className="card"
        style={{ padding: 32, minHeight: 380, display: "grid", alignContent: "center", gap: 14 }}
      >
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", color: "var(--accent)" }}>
          REQUEST RECEIVED
        </div>
        <h2 style={{ fontSize: 28, margin: 0 }}>Thank you — we will be in touch.</h2>
        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "var(--muted)" }}>
          We reply within one working day, usually with two or three times to choose from.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="card" style={{ padding: 32 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={row}>
          <Label text="NAME">
            <input name="name" type="text" autoComplete="name" required placeholder="Grace Wanjiru" style={field} />
          </Label>
          <Label text="COMPANY">
            <input name="company" type="text" autoComplete="organization" placeholder="Rift Valley Safaris" style={field} />
          </Label>
        </div>

        <div style={row}>
          <Label text="WORK EMAIL">
            <input name="email" type="email" autoComplete="email" required placeholder="grace@rvsafaris.co.ke" style={field} />
          </Label>
          <Label text="PHONE">
            <input name="phone" type="tel" autoComplete="tel" placeholder="+254 700 000 000" style={field} />
          </Label>
        </div>

        <div style={row}>
          <Label text="FLEET SIZE">
            <select name="fleet" defaultValue="4-10" style={field}>
              <option value="1-3">1–3 vehicles</option>
              <option value="4-10">4–10 vehicles</option>
              <option value="11-25">11–25 vehicles</option>
              <option value="25+">25+ vehicles</option>
              <option value="none">We subcontract vehicles</option>
            </select>
          </Label>
          <Label text="BOOKINGS PER MONTH">
            <select name="volume" defaultValue="11-30" style={field}>
              <option value="1-10">Up to 10</option>
              <option value="11-30">11–30</option>
              <option value="31-75">31–75</option>
              <option value="75+">More than 75</option>
            </select>
          </Label>
        </div>

        {/* Honeypot — hidden from people, irresistible to bots. */}
        <div aria-hidden="true" style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}>
          <label>
            Website
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {state?.error ? (
          <p role="alert" style={{ margin: 0, fontSize: 14, color: "#b91c1c" }}>
            {state.error}
          </p>
        ) : null}

        <button type="submit" className="btn" disabled={pending} style={{ marginTop: 6, padding: "15px 22px" }}>
          {pending ? "Sending…" : "Request a demo"}
        </button>

        <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: "var(--faint)" }}>
          No pricing pages, no card. We reply within one working day.
        </p>
      </div>
    </form>
  );
}
