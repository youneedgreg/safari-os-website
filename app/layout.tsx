import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { SITE, abs } from "@/lib/site";
import "./globals.css";

/*
 * Fonts are self-hosted by next/font rather than fetched from fonts.googleapis
 * as the canvas did. That removes a render-blocking third-party stylesheet and
 * two extra connections from the critical path, and the size-adjust fallback
 * next/font emits keeps the swap from shifting layout — LCP and CLS both.
 */
const serif = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-serif",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Safari Booking & Tour Operator Software`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_KE",
    url: SITE.url,
    title: `${SITE.name} — Safari Booking & Tour Operator Software`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Safari Booking & Tour Operator Software`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

/** Sitewide entities. Page-specific schema is added by each page. */
const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": abs("/#organization"),
      name: SITE.name,
      alternateName: SITE.alternateName,
      url: SITE.url,
      email: SITE.email,
      description: SITE.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.locality,
        addressCountry: SITE.country,
      },
      areaServed: [
        { "@type": "Country", name: "Kenya" },
        { "@type": "Country", name: "Tanzania" },
        { "@type": "Country", name: "Uganda" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        availableLanguage: ["en"],
      },
    },
    {
      "@type": "WebSite",
      "@id": abs("/#website"),
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      publisher: { "@id": abs("/#organization") },
      inLanguage: "en",
    },
  ],
};

/**
 * Applies a stored theme before first paint so an explicit light/dark choice
 * never flashes the other palette. Small enough to stay inline; anything larger
 * belongs in a real script.
 */
const noFlashTheme = `try{var t=localStorage.getItem("SAFOS-site-theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashTheme }} />
      </head>
      <body>
        <JsonLd data={siteGraph} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
