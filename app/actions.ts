"use server";

import { deliver, validate, type Enquiry, type EnquiryResult } from "@/lib/enquiry";

const str = (v: FormDataEntryValue | null) => (typeof v === "string" ? v : "");

/**
 * Handles the demo request. Declared as a server action so the form submits
 * with or without JavaScript — which also means the form is fully functional in
 * the HTML a crawler sees.
 */
export async function requestDemo(
  _prev: EnquiryResult | null,
  formData: FormData,
): Promise<EnquiryResult> {
  // Honeypot: a field no human sees, so anything filling it is a bot. Silently
  // report success rather than telling the bot it was caught.
  if (str(formData.get("website")).trim() !== "") return { ok: true };

  const enquiry: Enquiry = {
    name: str(formData.get("name")).trim(),
    company: str(formData.get("company")).trim(),
    email: str(formData.get("email")).trim(),
    phone: str(formData.get("phone")).trim(),
    fleet: str(formData.get("fleet")),
    volume: str(formData.get("volume")),
  };

  const error = validate(enquiry);
  if (error) return { ok: false, error };

  return deliver(enquiry);
}
