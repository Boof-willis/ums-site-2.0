// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD builders. A single MovingCompany node (stable @id) is referenced by
// every page; per-page nodes (WebPage, Service, FAQPage, BlogPosting, …) link
// back to it. This is the backbone of the site's AEO/GEO/SEO strategy.
// ─────────────────────────────────────────────────────────────────────────────
import { BUSINESS, SITE_URL, SERVICES, LOCATIONS } from "@/consts";

export const ID = {
  business: `${SITE_URL}/#business`,
  website: `${SITE_URL}/#website`,
  founder: `${SITE_URL}/#derek-martin`,
};

const abs = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

/** The canonical business node, emitted on every page. */
export function businessNode() {
  return {
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": ID.business,
    name: BUSINESS.legalName,
    alternateName: BUSINESS.name,
    url: SITE_URL + "/",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: abs("/images/og-default.jpg"),
    logo: abs("/images/logo.png"),
    priceRange: BUSINESS.priceRange,
    foundingDate: String(BUSINESS.foundingYear),
    founder: { "@id": ID.founder },
    slogan: BUSINESS.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
      bestRating: BUSINESS.rating.best,
    },
    areaServed: LOCATIONS.map((l) => ({
      "@type": "City",
      name: l.city,
      containedInPlace: { "@type": "State", name: "Utah" },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Moving Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: abs(`/services/${s.key}/`),
        },
      })),
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "State License",
      recognizedBy: { "@type": "Organization", name: "State of Utah" },
      identifier: BUSINESS.license,
    },
    knowsAbout: [
      "Residential moving",
      "Long-distance moving",
      "Commercial and office moving",
      "Packing services",
      "Moving and storage",
      "Local movers in Utah",
    ],
    knowsLanguage: "en-US",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    sameAs: [BUSINESS.social.google],
  };
}

export function founderNode() {
  return {
    "@type": "Person",
    "@id": ID.founder,
    name: BUSINESS.founder,
    jobTitle: "Founder & Owner",
    worksFor: { "@id": ID.business },
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": ID.website,
    url: SITE_URL + "/",
    name: BUSINESS.name,
    publisher: { "@id": ID.business },
    inLanguage: "en-US",
  };
}

export function webPageNode(opts: {
  url: string;
  name: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${abs(opts.url)}#webpage`,
    url: abs(opts.url),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": ID.website },
    about: { "@id": ID.business },
    inLanguage: "en-US",
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
  };
}

export function breadcrumbNode(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.url),
    })),
  };
}

export function serviceNode(opts: {
  name: string;
  url: string;
  description: string;
  serviceType?: string;
}) {
  return {
    "@type": "Service",
    "@id": `${abs(opts.url)}#service`,
    name: opts.name,
    serviceType: opts.serviceType ?? opts.name,
    url: abs(opts.url),
    description: opts.description,
    provider: { "@id": ID.business },
    areaServed: { "@type": "State", name: "Utah" },
  };
}

export function faqNode(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function blogPostingNode(opts: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@type": "BlogPosting",
    "@id": `${abs(opts.url)}#article`,
    mainEntityOfPage: abs(opts.url),
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author:
      opts.author && opts.author !== BUSINESS.name
        ? { "@type": "Person", "@id": ID.founder, name: opts.author }
        : { "@id": ID.business },
    publisher: { "@id": ID.business },
    image: abs(opts.image ?? "/images/og-default.jpg"),
  };
}

export function articleNode(opts: {
  url: string;
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@type": "Article",
    "@id": `${abs(opts.url)}#article`,
    mainEntityOfPage: abs(opts.url),
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@id": ID.business },
    publisher: { "@id": ID.business },
    image: abs(opts.image ?? "/images/og-default.jpg"),
  };
}

export function howToNode(opts: {
  url: string;
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@type": "HowTo",
    "@id": `${abs(opts.url)}#howto`,
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/** Wrap nodes in an @graph document. */
export function graph(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
