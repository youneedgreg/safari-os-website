import type { StaticImageData } from "next/image";
import bookingsPipeline from "@/public/screenshots/bookings-pipeline.jpg";
import clients from "@/public/screenshots/clients.jpg";
import dashboard from "@/public/screenshots/dashboard.jpg";
import itineraries from "@/public/screenshots/itineraries.jpg";
import suppliers from "@/public/screenshots/suppliers.jpg";
import tourSchedule from "@/public/screenshots/tour-schedule.jpg";

/**
 * Product screenshots and their alt text, in one place so a caption is never
 * written twice and never drifts from the image it describes.
 *
 * All captured from the real application running against demonstration data —
 * every client, guide, phone number and vehicle registration in them is
 * invented. See README.
 */
export const SHOTS: Record<string, { src: StaticImageData; alt: string }> = {
  dashboard: {
    src: dashboard,
    alt: "The Safari OS dashboard: active bookings, pending quotes and client totals, a month calendar with confirmed departures marked, and a list of upcoming trips with dates and party sizes.",
  },
  "bookings-pipeline": {
    src: bookingsPipeline,
    alt: "The Safari OS booking pipeline: a table of bookings with client, destination, dates, party size and status, filtered by enquiry, quoted, confirmed, completed and cancelled.",
  },
  itineraries: {
    src: itineraries,
    alt: "The Safari OS AI itinerary builder: a form taking destination, trip length, party size, trip style, budget tier and preferred lodges, ready to generate a day-by-day itinerary.",
  },
  "tour-schedule": {
    src: tourSchedule,
    alt: "The Safari OS monthly tour schedule: one row per trip with guest name, party size, arrival and departure dates, tour name, per-park dates and assigned driver, exportable to CSV, Word or PDF.",
  },
  clients: {
    src: clients,
    alt: "The Safari OS client directory: a searchable list of client profiles with contact details and booking history.",
  },
  suppliers: {
    src: suppliers,
    alt: "The Safari OS supplier database: lodges, camps, transport companies and parks with their category, location and named contact.",
  },
};
