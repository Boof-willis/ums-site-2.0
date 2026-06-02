import type { Faq } from "@/data/faqs";

export interface PricingTier {
  name: string;
  price: string;
  unit?: string;
  note?: string;
  features: string[];
}

export interface ServiceContent {
  key: string;
  title: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  /** AEO direct-answer lead paragraph (stands alone, quotable). */
  lead: string;
  intro: string[];
  highlights: { icon: string; title: string; text: string }[];
  sections: { h2: string; body: string[] }[];
  pricing?: PricingTier[];
  faqs: Faq[];
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  residential: {
    key: "residential",
    title: "Residential Moving",
    h1: "Residential moving company in Utah",
    seoTitle: "Residential Moving Company in Utah | Local Home Movers",
    seoDescription:
      "Full-service residential movers serving the Wasatch Front. Local home moves from $140/hour with a fully equipped truck, careful crews, and no hidden fees.",
    lead: "Utah's Moving and Storage provides full-service residential moving across the Wasatch Front starting at $140/hour for two movers and a fully equipped truck, including blankets, disassembly, reassembly, and a free virtual walkthrough, with no hidden fees.",
    intro: [
      "Most people rank residential moving right up there with root canals on the discomfort index. There are supplies to procure, furniture to protect, and the nagging stress that the curio cabinet you inherited from your great-grandmother may not survive the trip.",
      "We know there's a better way. We handle residential moves of every size, from a dorm room to a 10,000 square foot home, treating your belongings like our own so you can focus on the excitement of your new place instead of the dread of moving day.",
    ],
    highlights: [
      { icon: "truck", title: "Industry's largest trucks", text: "Fewer trips, faster moves, and everything arrives together." },
      { icon: "shield", title: "Full protection", text: "Moving blankets, plastic wrap, tie-downs, and basic carrier liability on every move." },
      { icon: "users", title: "Disassembly & reassembly", text: "We take apart beds and furniture and put them back together at your new home." },
      { icon: "check-circle", title: "Free virtual walkthrough", text: "An accurate quote up front so there are no surprises on moving day." },
    ],
    sections: [
      {
        h2: "Full-service or labor-only, your call",
        body: [
          "If you have the time and patience (and the back and knees of a younger person), you can pack and provide your own truck, our crew will load, transport, and unload. Prefer to hand off the whole thing? We'll pack, load, move, and unload your entire home.",
          "Professional-packing or self-packing, your truck or ours: our residential movers provide whatever level of service you need.",
        ],
      },
      {
        h2: "What's included in every local move",
        body: [
          "Every local residential move includes two movers, the industry's largest moving truck, moving blankets for your furniture, disassembly and reassembly, plastic wrap, dollies and hand trucks, lifting straps, tools, and tie-downs to secure your load, plus a free virtual walkthrough and basic carrier liability.",
        ],
      },
      {
        h2: "Specialty, delivery & single-item moves",
        body: [
          "Need just one heavy or awkward item moved? We handle specialty items including pianos, safes, exercise equipment, and pool tables, as well as deliveries and single-item moves, priced as a flat rate.",
        ],
      },
    ],
    pricing: [
      {
        name: "Local Moves",
        price: "$140",
        unit: "/hour + truck charge",
        note: "2 movers · 3-hour minimum · $40/hr per additional mover",
        features: [
          "Industry's largest moving truck",
          "Moving blankets for furniture",
          "Disassembly & reassembly",
          "Plastic wrap, dollies, straps & tools",
          "Free virtual walkthrough",
          "Basic carrier liability · No hidden fees",
        ],
      },
      {
        name: "Labor-Only Moves",
        price: "$140",
        unit: "/hour + dispatch fee",
        note: "2 movers · 3-hour minimum · $40/hr per additional mover",
        features: [
          "You provide the truck",
          "Moving blankets for furniture",
          "Disassembly & reassembly",
          "Plastic wrap, dollies, straps & tools",
          "Free virtual walkthrough",
          "Basic carrier liability · No hidden fees",
        ],
      },
      {
        name: "Specialty & Single-Item",
        price: "Flat rate",
        unit: "personalized quote",
        note: "Pianos, safes, exercise equipment, pool tables & more",
        features: [
          "Right equipment for heavy items",
          "Trained specialty crews",
          "Delivery & single-item moves",
          "Flat-rate pricing",
          "Free quote",
        ],
      },
    ],
    faqs: [
      { q: "How much do local movers cost in Utah?", a: "Local residential moves start at <strong>$140/hour</strong> for two movers and a fully equipped truck, with a 3-hour minimum and $40/hour per additional mover. Most 2-3 bedroom moves run $560-$1,400 depending on size and access." },
      { q: "Do you disassemble and reassemble furniture?", a: "Yes. Disassembly and reassembly of beds and standard furniture is included in every residential move at no extra charge." },
      { q: "Can I pack myself to save money?", a: "Absolutely. You can pack yourself and we'll load and move everything (labor-only or full truck), or we can handle the packing for you. You choose the level of service." },
      { q: "Is there a minimum charge?", a: "Yes, there's a 3-hour minimum on local moves. This covers the typical small-to-mid-size move and ensures your crew has time to do the job right." },
    ],
  },

  "long-distance": {
    key: "long-distance",
    title: "Long-Distance Moving",
    h1: "Long-distance & interstate movers in Utah",
    seoTitle: "Long-Distance Moving Company in Utah | Interstate Movers",
    seoDescription:
      "Long-distance and interstate movers based in Utah. Set travel costs, no cargo transfers, and one trained crew from pickup to delivery. Get a personalized quote.",
    lead: "Utah's Moving and Storage handles long-distance and interstate moves with set travel costs, no cargo transfers, and the same trained crew from pickup to delivery, whether you're moving from Utah to Florida or anywhere in between.",
    intro: [
      "A long-distance move adds a layer of logistics that a local move doesn't have. The biggest worries customers tell us about are surprise costs, belongings being transferred between trucks and crews, and not knowing who will actually show up.",
      "We solve all three. You get a personalized quote with set travel costs, your items stay on one truck with no cargo transfers, and our own trained crew handles the move end to end.",
    ],
    highlights: [
      { icon: "route", title: "Set travel costs", text: "Travel is quoted up front, no mystery mileage charges at the end." },
      { icon: "shield", title: "No cargo transfers", text: "Your belongings stay on one truck the entire trip, reducing loss and damage." },
      { icon: "users", title: "One trained crew", text: "The same professionals load and deliver, no handing off to strangers." },
      { icon: "check-circle", title: "Personalized quotes", text: "Pricing built around your exact inventory, distance, and timeline." },
    ],
    sections: [
      {
        h2: "Moving out of state? We make it simple",
        body: [
          "Need a long-distance moving company to take you from Utah to warmer winters? We can help. As long as one end of your move touches Utah, we can plan and execute it with the same care we bring to local moves.",
          "We'll walk through your inventory, map out timing, and give you a clear, personalized quote so you know exactly what to expect before the first box is loaded.",
        ],
      },
      {
        h2: "Why customers trust us for long hauls",
        body: [
          "Long-distance moves are where shortcuts hurt the most. Our crews are trained to crew-leader level, your furniture is wrapped and secured for the long haul, and we keep your shipment together so nothing gets lost in a warehouse transfer.",
        ],
      },
    ],
    faqs: [
      { q: "Do you do interstate / out-of-state moves?", a: "Yes. We handle long-distance and interstate moves as long as one endpoint of the move is in Utah. Common routes include Utah to neighboring states and beyond." },
      { q: "How is long-distance pricing calculated?", a: "Long-distance moves are quoted as a personalized rate based on your inventory, distance, and timeline, with <strong>set travel costs</strong> agreed up front, not open-ended mileage billing." },
      { q: "Will my belongings be transferred between trucks?", a: "No. We keep your shipment on one truck with no cargo transfers, which reduces the risk of loss or damage that comes with warehouse-to-warehouse handoffs." },
    ],
  },

  commercial: {
    key: "commercial",
    title: "Commercial & Office Moving",
    h1: "Commercial & office movers in Utah",
    seoTitle: "Commercial & Office Moving Company in Utah | Business Movers",
    seoDescription:
      "Commercial and office movers in Utah. We relocate businesses fast to minimize downtime, protecting equipment, files, and furniture. Get a free business quote.",
    lead: "Utah's Moving and Storage relocates offices and businesses with a focus on speed and minimal downtime, protecting your equipment, files, and furniture so you're back to work as quickly as possible.",
    intro: [
      "Because we run a business ourselves, we understand that you lose money every day you aren't operating. That's why our commercial moving service is built around quick, seamless transitions that get your team back to work fast.",
      "From a single office suite to a multi-floor relocation, we plan around your schedule, including after-hours and weekend moves, to keep disruption to a minimum.",
    ],
    highlights: [
      { icon: "clock", title: "Minimal downtime", text: "We plan around your hours so your business keeps running." },
      { icon: "shield", title: "Equipment protected", text: "Computers, servers, and sensitive equipment moved with care." },
      { icon: "users", title: "Competent, vetted staff", text: "Trained, professional crews, never day-labor." },
      { icon: "box", title: "Organized & labeled", text: "Systematic packing and labeling so setup at the new space is fast." },
    ],
    sections: [
      {
        h2: "Planned around your business, not ours",
        body: [
          "We start by determining what goes where: what moves to the new space, what goes into storage, and what can be retired. Then we build a move plan around your operating hours so your team experiences as little disruption as possible.",
          "Our movers protect your equipment and furniture, keep everything organized and labeled, and get you set up so you can reopen on schedule.",
        ],
      },
      {
        h2: "Protecting your data and equipment",
        body: [
          "Office moves involve sensitive equipment and information. We handle electronics and files with care and keep your move organized from start to finish so nothing goes missing in the shuffle.",
        ],
      },
    ],
    faqs: [
      { q: "Can you move our office after hours or on weekends?", a: "Yes. We schedule commercial moves around your business hours, including evenings and weekends, to minimize downtime and keep your operation running." },
      { q: "Do you move IT equipment and servers?", a: "Yes. We move computers, servers, and other sensitive equipment with appropriate protection and care, and keep everything organized and labeled for a fast setup." },
      { q: "How is a commercial move quoted?", a: "Commercial moves are quoted individually based on the size of your space, the equipment involved, timing, and any storage needs. Contact us for a free, personalized business quote." },
    ],
  },

  packing: {
    key: "packing",
    title: "Packing Services & Supplies",
    h1: "Professional packing services & supplies in Utah",
    seoTitle: "Professional Packing Services & Moving Supplies in Utah",
    seoDescription:
      "Professional packing services and quality moving supplies in Utah. Full-home or partial packing, plus boxes, bubble wrap, and specialty boxes for fragile items.",
    lead: "Utah's Moving and Storage offers professional packing services and quality moving supplies, from full-home packing to specialty boxes for fragile and high-value items, so your belongings are protected before they ever reach the truck.",
    intro: [
      "Packing is the part of moving nobody enjoys. The tape that never comes off the dispenser right, the endless bubble wrap, the boxes to assemble. But we love this stuff, we adore finding the right way to protect your household items and the perfect box for every piece.",
      "Whether you want us to pack your entire home, just the kitchen and fragile items, or simply supply you with quality materials, we've got you covered.",
    ],
    highlights: [
      { icon: "box", title: "Quality boxes, all sizes", text: "Small, medium, large, and XL boxes built to protect your belongings." },
      { icon: "shield", title: "Specialty protection", text: "Bubble wrap, packing foam, and specialty boxes for fragile, high-value items." },
      { icon: "users", title: "Professional packers", text: "Trained crews who pack efficiently and label everything clearly." },
      { icon: "check-circle", title: "Pack as much or as little as you want", text: "Full-service, partial, or supplies only." },
    ],
    sections: [
      {
        h2: "Full-service and partial packing",
        body: [
          "Have us pack your whole home, or just the rooms you'd rather not handle, like the kitchen, the garage, or a room full of fragile keepsakes. Our packers work efficiently and label everything so unpacking at your new place is simple.",
        ],
      },
      {
        h2: "Moving supplies for DIY packers",
        body: [
          "Prefer to pack yourself? We supply quality materials: small, medium, large, and XL boxes, bubble wrap, tape, packing foam, and specialty boxes for items like dishes, mirrors, and electronics.",
        ],
      },
    ],
    faqs: [
      { q: "Do you offer full packing services?", a: "Yes. We offer full-service packing (we pack your entire home), partial packing (just the rooms or items you choose), and moving supplies for those who prefer to pack themselves." },
      { q: "What packing supplies do you sell?", a: "We provide small, medium, large, and XL boxes, bubble wrap, tape, packing foam, and specialty boxes for fragile and high-value items like dishes, mirrors, and electronics." },
      { q: "Should I pay for packing or do it myself?", a: "If you're short on time or moving fragile, high-value items, professional packing is worth it, it's faster and reduces the risk of damage. If you have time and mostly sturdy items, packing yourself with quality supplies can save money." },
    ],
  },
};
