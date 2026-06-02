// Direct-answer FAQ content. Written for AEO/GEO: each answer leads with a
// concise, self-contained, quotable response (first sentence stands alone),
// then adds supporting detail. Reused for on-page FAQ + FAQPage schema.

export interface Faq {
  q: string;
  a: string; // may contain simple inline HTML
}

export const homeFaqs: Faq[] = [
  {
    q: "How much does a local move cost in Utah?",
    a: "Local moves with Utah's Moving and Storage start at <strong>$140 per hour</strong> for two movers and a fully equipped truck, with a 3-hour minimum and $40/hour for each additional mover. Most 2–3 bedroom local moves along the Wasatch Front fall between $560 and $1,400 depending on size, access, and specialty items. You'll receive a clear quote up front with no hidden fees.",
  },
  {
    q: "What areas does Utah's Moving and Storage serve?",
    a: "We serve the entire Wasatch Front, including Orem, Provo, Salt Lake City, Lehi, Draper, Sandy, West Jordan, Saratoga Springs, Spanish Fork, and Park City. We also handle long-distance and interstate moves where one endpoint is in Utah.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Utah's Moving and Storage is a fully licensed Utah motor carrier (license #11735591-0160) and carries basic carrier liability on every move, with additional coverage options available. We're a family-owned company, not a broker, so the crew you book is our own trained, full-time team.",
  },
  {
    q: "How far in advance should I book my move?",
    a: "Book 2–4 weeks ahead for the best date selection, especially for moves at month-end or during the busy summer season (May–September). We do accommodate short-notice and last-minute moves when our schedule allows, so it's always worth calling.",
  },
  {
    q: "Do you offer packing services and supplies?",
    a: "Yes. We offer full-service and partial packing, plus quality supplies including small, medium, large, and XL boxes, bubble wrap, packing foam, tape, and specialty boxes for fragile or high-value items. You can pack yourself, have us pack everything, or anything in between.",
  },
  {
    q: "Can you move specialty items like pianos and safes?",
    a: "Yes. We move pianos, gun safes, pool tables, exercise equipment, and other specialty items using the right equipment and trained crews. Specialty items are quoted as a flat rate based on the item, access, and distance.",
  },
];
