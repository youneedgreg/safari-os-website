/**
 * All site copy, lifted verbatim from the Claude Design canvas
 * (design/Safari OS Site.dc.html) so the rendered pages and the design stay in
 * step. Kept as data, not JSX, so the same strings feed both the page and the
 * schema.org ItemList on /features.
 */

export type Module = {
  n: string;
  /** Short label used on the home grid, e.g. "BOOKINGS & QUOTES". */
  kicker: string;
  /** Home-page card headline. */
  title: string;
  /** Home-page card body. */
  summary: string;
  /** Features-page heading. */
  fullTitle: string;
  /** Features-page standfirst. */
  standfirst: string;
  /** Features-page bullets. */
  points: string[];
};

export const MODULES: Module[] = [
  {
    n: "01",
    kicker: "BOOKINGS & QUOTES",
    title: "A pipeline, not an inbox",
    summary:
      "Every enquiry moves through a kanban board — enquiry, quoted, provisionally booked, confirmed, completed. A website enquiry inbox ingests form submissions from your own site and holds them for approval before they enter the pipeline.",
    fullTitle: "Bookings & Quotes",
    standfirst: "The pipeline the whole business runs against.",
    points: [
      "Kanban board through ENQUIRY → QUOTED → PROVISIONALLY BOOKED → CONFIRMED → COMPLETED.",
      "Website enquiry inbox that ingests form submissions from your own site.",
      "Submissions held for approval before they enter the pipeline.",
    ],
  },
  {
    n: "02",
    kicker: "COSTING ENGINE",
    title: "Cost sheets in USD and KES",
    summary:
      "Multi-currency cost sheets with live exchange rate sync, and an AI advisor that flags thin margins before the quote goes out.",
    fullTitle: "Costing Engine",
    standfirst: "Margin known before the quote leaves.",
    points: [
      "Multi-currency cost sheets in USD and KES.",
      "Live exchange rate sync.",
      "AI advisor that flags thin margins before you quote.",
    ],
  },
  {
    n: "03",
    kicker: "AI ITINERARY BUILDER",
    title: "Day-by-day, publish-ready",
    summary:
      "Itineraries generated with Claude and published to a client portal as a travel-magazine layout.",
    fullTitle: "AI Itinerary Builder",
    standfirst: "Drafted in minutes, published as a document you would be happy to send.",
    points: [
      "Day-by-day itineraries generated with Claude.",
      "Published to the client portal as a travel-magazine layout.",
    ],
  },
  {
    n: "04",
    kicker: "INVOICING & PAYABLES",
    title: "Branded invoices, tracked",
    summary:
      "PDF invoices with VAT, bank transfer and M-Pesa details, payment status tracking, and supplier reconciliation against quoted margin.",
    fullTitle: "Invoicing & Payables",
    standfirst: "Money out the door, and money owed, in one place.",
    points: [
      "Branded PDF invoices with VAT.",
      "Bank transfer and M-Pesa payment details.",
      "Payment status tracking.",
      "Supplier reconciliation against quoted margin.",
    ],
  },
  {
    n: "05",
    kicker: "PARTNERS & FLEET",
    title: "Nothing expires unnoticed",
    summary:
      "Guide and vehicle registry tracking PSV licence, insurance, guide certification and first aid expiry, with configurable alert windows. One-click WhatsApp driver briefing.",
    fullTitle: "Partners & Fleet",
    standfirst: "Compliance that warns you in advance, not at the gate.",
    points: [
      "Guide and vehicle registry.",
      "Expiry tracking for PSV licence, insurance, guide certification and first aid.",
      "Configurable alert windows.",
      "One-click WhatsApp driver briefing.",
    ],
  },
  {
    n: "06",
    kicker: "DRIVER PORTAL",
    title: "No login, no app",
    summary:
      "A token-linked page where drivers log live status — airport pickup complete, arrived at lodge — and ops sees it in real time.",
    fullTitle: "Driver Portal",
    standfirst: "Visibility from a phone with no app and no password.",
    points: [
      "No-login, token-linked page per driver.",
      "Live status logging — “Airport pickup complete”, “Arrived at lodge”.",
      "Ops sees updates in real time.",
    ],
  },
  {
    n: "07",
    kicker: "CLIENT PORTAL",
    title: "Everything the guest asks for",
    summary:
      "A no-login mobile page with live itinerary, accommodation, packing list, document vault and post-trip feedback.",
    fullTitle: "Client Portal",
    standfirst: "One link that answers the questions guests would otherwise email you.",
    points: [
      "No-login mobile page with the live itinerary.",
      "Accommodation details and packing list.",
      "Document vault and post-trip feedback.",
    ],
  },
  {
    n: "08",
    kicker: "WHATSAPP CRM",
    title: "The thread, kept",
    summary:
      "Threaded message history against every booking, with automated pre-trip reminders at 30, 14, 7 and 1 day before arrival.",
    fullTitle: "WhatsApp CRM",
    standfirst: "The conversation, attached to the booking.",
    points: [
      "Threaded message history.",
      "Automated pre-trip reminders at 30, 14, 7 and 1 day before arrival.",
    ],
  },
  {
    n: "09",
    kicker: "AI INTELLIGENCE",
    title: "Which enquiries are real",
    summary:
      "Conversion scoring — hot, warm, cold — on every enquiry, anomaly alerts for low margins and payment delays, and plain-English querying of your own revenue and arrivals data.",
    fullTitle: "AI Intelligence",
    standfirst: "Attention pointed at the right enquiry and the right anomaly.",
    points: [
      "Conversion scoring — HOT, WARM, COLD — on every enquiry.",
      "Anomaly alerts for low margins and payment delays.",
      "Plain-English querying of your own revenue and arrivals data.",
    ],
  },
  {
    n: "10",
    kicker: "CONTENT STUDIO",
    title: "The trip, marketed again",
    summary:
      "Published itineraries become Instagram posts, blogs, newsletters and brochures in English, German, French and Spanish.",
    fullTitle: "Content Studio",
    standfirst: "Marketing material out of work you have already done.",
    points: [
      "Turns published itineraries into Instagram posts, blogs, newsletters and brochures.",
      "Output in English, German, French and Spanish.",
    ],
  },
  {
    n: "11",
    kicker: "OPERATIONS CALENDAR",
    title: "Who is where, on what date",
    summary: "Vehicle and guide assignments laid across dates, so nothing double-books.",
    fullTitle: "Operations Calendar & Tour Schedule",
    standfirst: "The whole season on one grid.",
    points: [
      "Vehicle and guide assignments across dates.",
      "Conflicts visible before they become double-bookings.",
    ],
  },
];

export const PAIN_STRIP = [
  "Enquiries sit unanswered at the bottom of an inbox.",
  "Costing lives in a spreadsheet only one person understands.",
  "Drivers are briefed on WhatsApp, then go dark for four days.",
];

export const FAILURES = [
  {
    n: "01",
    title: "The same vehicle, twice",
    body: "Two itineraries overlap by one day and nobody notices until both clients are at the airport.",
  },
  {
    n: "02",
    title: "An expired PSV licence",
    body: "Discovered at the park gate, with guests in the vehicle, because the renewal date lived in someone’s head.",
  },
  {
    n: "03",
    title: "The invoice nobody chased",
    body: "The trip is finished, the balance is unpaid, and the follow-up was somebody’s to-do note.",
  },
  {
    n: "04",
    title: "Margin that quietly leaked",
    body: "Lodge bills come back higher than quoted, unreconciled, and the trip closes thinner than it looked.",
  },
];

export const REGION = [
  { title: "Dual currency", body: "Quote, cost and invoice in USD and KES against a live rate." },
  { title: "M-Pesa", body: "Payment details on every invoice, alongside bank transfer." },
  { title: "Multi-park", body: "Itineraries that cross Kenya, Tanzania and Uganda in one booking." },
  { title: "WhatsApp-first", body: "Because that is where clients and drivers already are." },
  { title: "Weak signal", body: "Zero-login pages for drivers and guests, light enough for the road." },
];

export const SECURITY = [
  { title: "JWT sessions", body: "Token-based authentication on every request." },
  { title: "Per-user 2FA", body: "Second factor enforced account by account." },
  { title: "Immutable audit log", body: "Who changed which price, and when." },
  { title: "Role separation", body: "ADMIN, OPS and GUIDE see only what they should." },
];
