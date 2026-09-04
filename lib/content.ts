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
  /** Basename of a screenshot in public/screenshots, when one exists. */
  shot?: string;
};

/**
 * The home page shows the first CORE_MODULE_COUNT modules — the lifecycle
 * spine, in the order the design canvas laid them out. /features shows all of
 * them. Keep the core block first in the array.
 */
export const CORE_MODULE_COUNT = 11;

export const MODULES: Module[] = [
  {
    n: "01",
    kicker: "BOOKINGS & QUOTES",
    title: "A pipeline, not an inbox",
    summary:
      "Every enquiry moves through a kanban board — enquiry, quoted, provisionally booked, confirmed, completed. A website enquiry inbox ingests form submissions from your own site and holds them for approval before they enter the pipeline.",
    fullTitle: "Bookings & Quotes",
    shot: "bookings-pipeline",
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
    shot: "itineraries",
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
    shot: "tour-schedule",
    standfirst: "The whole season on one grid.",
    points: [
      "Vehicle and guide assignments across dates.",
      "Conflicts visible before they become double-bookings.",
    ],
  },

  // Beyond the lifecycle spine. These ship in the product but were not on the
  // original design canvas, so they appear on /features rather than the home
  // grid — see CORE_MODULE_COUNT.
  {
    n: "12",
    kicker: "CLIENT DIRECTORY",
    title: "Everyone you have ever carried",
    summary:
      "Client profiles with passport and document storage, full booking history, and the WhatsApp thread attached to each one.",
    fullTitle: "Client Directory",
    shot: "clients",
    standfirst: "The record that outlives any one booking.",
    points: [
      "Profiles with passport and document storage.",
      "Complete booking history per client.",
      "WhatsApp message history with sentiment tracking.",
    ],
  },
  {
    n: "13",
    kicker: "SUPPLIER DATABASE",
    title: "Every lodge, camp and park",
    summary:
      "A registry of lodges, camps, transport companies, parks, activity providers and flight partners, with the contact who actually answers.",
    fullTitle: "Supplier Database",
    shot: "suppliers",
    standfirst: "The other half of every itinerary.",
    points: [
      "Categorised by lodge, camp, transport, park, activity or flight.",
      "Named contact, email and phone per supplier.",
      "Linked to the costs they appear in.",
    ],
  },
  {
    n: "14",
    kicker: "ACCOUNTS PAYABLE",
    title: "What you owe, per trip",
    summary:
      "Lodge and supplier invoices reconciled against the margin you quoted, so a trip cannot quietly close thinner than it looked.",
    fullTitle: "Accounts Payable",
    standfirst: "The side of the ledger that usually goes unwatched.",
    points: [
      "Supplier invoices reconciled against quoted margin.",
      "Tracks what is owed to each supplier, per booking.",
      "Unpaid supplier costs on completed trips surface as alerts.",
    ],
  },
  {
    n: "15",
    kicker: "EXPENSES",
    title: "The costs that are not a lodge bill",
    summary: "Internal expense tracking, so overheads sit alongside trip costs rather than in a separate book.",
    fullTitle: "Expenses",
    standfirst: "Overheads in the same place as everything else.",
    points: ["Internal expense records.", "Visible against the same reporting as trip costs."],
  },
  {
    n: "16",
    kicker: "TASKS",
    title: "The follow-up, assigned",
    summary:
      "Internal tasks tagged by priority and by category — finance, operations, client — and assigned to a named person rather than a group chat.",
    fullTitle: "Tasks",
    standfirst: "Nobody's to-do note, somebody's task.",
    points: [
      "Priority levels: low, medium, high.",
      "Categories: finance, operations, client, general.",
      "Assignable to a team member.",
    ],
  },
  {
    n: "17",
    kicker: "VOUCHERS",
    title: "What the guest hands over",
    summary: "Lodge vouchers carrying the guest name and the lodge's own contact details, generated against the booking.",
    fullTitle: "Vouchers",
    standfirst: "The document the lodge actually asks for at check-in.",
    points: ["Guest name and lodge contact on every voucher.", "Generated against the booking record."],
  },
  {
    n: "18",
    kicker: "TOUR TEMPLATES",
    title: "The routes you run again",
    summary:
      "Your repeat itineraries kept as templates, so the eleventh Mara-Nakuru-Amboseli quote does not start from an empty page.",
    fullTitle: "Tour Templates",
    standfirst: "Stop rebuilding the same eight days.",
    points: ["Reusable tour definitions.", "Applied to a booking as a starting point."],
  },
  {
    n: "19",
    kicker: "CAMPAIGNS",
    title: "Email to the right segment",
    summary:
      "Broadcast email with audience segmentation, scheduled sends, and delivery counts tracked per campaign.",
    fullTitle: "Campaigns",
    standfirst: "The past-guest list, actually used.",
    points: [
      "Audience segmentation by saved criteria.",
      "Scheduled sends.",
      "Sent and failed counts tracked per campaign.",
    ],
  },
  {
    n: "20",
    kicker: "REPORTS",
    title: "The season, counted",
    summary: "Revenue and operations analytics across the bookings you have already entered.",
    fullTitle: "Reports",
    standfirst: "Answers without exporting anything.",
    points: ["Revenue reporting with charts.", "Reads the same records ops works in daily."],
  },
  {
    n: "21",
    kicker: "SETTINGS & SECURITY",
    title: "Who can see what",
    summary:
      "Business profile, bank and M-Pesa accounts, exchange rates, team roles, per-user 2FA and an immutable security log.",
    fullTitle: "Settings & Security",
    standfirst: "The controls behind everything above.",
    points: [
      "Business profile, bank accounts and M-Pesa details.",
      "Team management across ADMIN, OPS and GUIDE roles.",
      "Per-user two-factor authentication.",
      "Immutable security audit log of every auth event.",
      "Notification preferences per event type.",
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
