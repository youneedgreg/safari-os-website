import "server-only";

export type EnquiryResult = { ok: boolean; error?: string };

export type Enquiry = {
  name: string;
  company: string;
  email: string;
  phone: string;
  fleet: string;
  volume: string;
};

const FLEET = ["1-3", "4-10", "11-25", "25+", "none"];
const VOLUME = ["1-10", "11-30", "31-75", "75+"];

/** Server-side validation. Never trust the browser's own checks. */
export function validate(e: Enquiry): string | null {
  if (e.name.trim().length < 2) return "Please give us a name we can reply to.";
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e.email)) return "That email address looks incomplete.";
  if (!FLEET.includes(e.fleet) || !VOLUME.includes(e.volume)) return "Please pick a fleet size and monthly volume.";
  return null;
}

/**
 * Delivery hook.
 *
 * NOT YET WIRED TO A MAILBOX — this records the enquiry in the server log so
 * nothing is silently dropped, and returns success. Replace the body with a
 * real transport (SMTP, Resend, an inbox API) before launch, and read the
 * destination from an environment variable rather than hard-coding it.
 */
export async function deliver(e: Enquiry): Promise<EnquiryResult> {
  console.info("[enquiry] demo request", {
    ...e,
    receivedAt: new Date().toISOString(),
  });
  return { ok: true };
}
