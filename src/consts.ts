// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for business data (NAP), navigation, services & areas.
// Used by SEO meta, JSON-LD schema, header, footer, and page content.
// Keep this accurate — schema + GMB + AI answers all key off these values.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_URL = "https://utahsmovingandstorage.com";

// Date the current site content was published/last reviewed (ISO).
// Used as the default datePublished/dateModified for pages without their own
// dates, so every page carries a freshness signal for AI/search.
export const SITE_REVIEWED = "2026-06-02";

export const BUSINESS = {
  name: "Utah's Moving and Storage",
  legalName: "Utah's Moving and Storage Company",
  tagline: "Utah's trusted local & long-distance movers",
  founder: "Derek Martin",
  foundingYear: 2018,
  email: "utahsmovingandstorage@gmail.com",
  phone: "(801) 980-0223",
  phoneHref: "tel:+18019800223",
  // Verified Utah motor carrier license.
  license: "11735591-0160",
  address: {
    street: "240 Garden Park",
    city: "Orem",
    region: "UT",
    regionName: "Utah",
    postalCode: "84057",
    country: "US",
  },
  geo: {
    // Orem, UT
    latitude: 40.2969,
    longitude: -111.6946,
  },
  // Corrected, accurate review figures (audit flagged old site's conflicting
  // "100+" vs "1,800+" claims vs real ~163 Google reviews).
  rating: {
    value: "4.9",
    count: "163",
    best: "5",
  },
  priceRange: "$$",
  hours: "Mo-Sa 07:00-19:00",
  social: {
    google:
      "https://www.google.com/maps/search/?api=1&query=Utah%27s+Moving+and+Storage+Orem+UT",
  },
} as const;

export type ServiceKey =
  | "residential"
  | "long-distance"
  | "commercial"
  | "packing";

export interface Service {
  key: ServiceKey;
  title: string;
  navLabel: string;
  short: string;
  summary: string; // direct-answer first sentence for AEO
  icon: string; // inline svg path id (see Icon.astro)
}

export const SERVICES: Service[] = [
  {
    key: "residential",
    title: "Residential Moving",
    navLabel: "Residential",
    short: "Local home moves done with care",
    summary:
      "Utah's Moving and Storage provides full-service residential moving across the Wasatch Front starting at $140/hour for two movers, including the truck, blankets, disassembly, and reassembly.",
    icon: "home",
  },
  {
    key: "long-distance",
    title: "Long-Distance Moving",
    navLabel: "Long-Distance",
    short: "Out-of-state moves with set travel costs",
    summary:
      "We handle long-distance and interstate moves with set travel costs, no cargo transfers, and one trained crew from pickup to delivery.",
    icon: "route",
  },
  {
    key: "commercial",
    title: "Commercial & Office Moving",
    navLabel: "Commercial",
    short: "Fast, low-downtime office relocations",
    summary:
      "Our commercial movers relocate offices and businesses quickly to minimize downtime, protecting equipment, files, and furniture every step of the way.",
    icon: "building",
  },
  {
    key: "packing",
    title: "Packing Services & Supplies",
    navLabel: "Packing",
    short: "Professional packing & quality supplies",
    summary:
      "We offer professional packing services and quality moving supplies, from full-home packing to specialty boxes for fragile and high-value items.",
    icon: "box",
  },
];

export interface CityArea {
  slug: string; // /locations/<slug>/
  city: string;
  county: string;
}

// 10 primary service-area cities (each gets a dedicated local landing page).
export const LOCATIONS: CityArea[] = [
  { slug: "orem", city: "Orem", county: "Utah County" },
  { slug: "provo", city: "Provo", county: "Utah County" },
  { slug: "salt-lake-city", city: "Salt Lake City", county: "Salt Lake County" },
  { slug: "lehi", city: "Lehi", county: "Utah County" },
  { slug: "draper", city: "Draper", county: "Salt Lake County" },
  { slug: "sandy", city: "Sandy", county: "Salt Lake County" },
  { slug: "west-jordan", city: "West Jordan", county: "Salt Lake County" },
  { slug: "saratoga-springs", city: "Saratoga Springs", county: "Utah County" },
  { slug: "spanish-fork", city: "Spanish Fork", county: "Utah County" },
  { slug: "park-city", city: "Park City", county: "Summit County" },
];

export const PRIMARY_NAV = [
  {
    label: "Services",
    href: "/services/",
    children: SERVICES.map((s) => ({
      label: s.navLabel,
      href: `/services/${s.key}/`,
    })),
  },
  { label: "Pricing", href: "/pricing/" },
  { label: "Locations", href: "/locations/" },
  { label: "Moving Guide", href: "/moving-guide/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
] as const;

// GoHighLevel lead-capture endpoint. Set PUBLIC_GHL_FORM_ENDPOINT in the
// Cloudflare Pages env (or .env) to the GHL inbound webhook / form URL.
// The /functions/api/quote.ts Pages Function proxies submissions to it.
export const LEAD_ENDPOINT = "/api/quote";
