// Per-guide AI-optimization data: a direct-answer "quick answer" (40-60 words,
// citable) and accurate HowTo steps (aligned to each guide's real content).

export interface GuideMeta {
  quickAnswer: string;
  howToName: string;
  steps: { name: string; text: string }[];
}

export const GUIDE_META: Record<string, GuideMeta> = {
  "preparing-for-a-residential-move": {
    quickAnswer:
      "Start preparing for a local move three to four months out: declutter room by room, get quotes from licensed movers, and create a moving binder. In the final weeks, confirm your crew, gather quality supplies, and label boxes by room so unloading is fast and nothing gets lost.",
    howToName: "How to prepare for a residential move",
    steps: [
      { name: "Declutter early", text: "Three to four months out, go room by room and donate, sell, or toss what you won't move." },
      { name: "Get quotes", text: "Request estimates from licensed movers and book your moving date." },
      { name: "Create a moving binder", text: "Track quotes, receipts, and a room-by-room inventory in one place." },
      { name: "Gather supplies", text: "Order quality boxes and packing materials, or schedule professional packing help." },
      { name: "Pack by room", text: "Label every box by room and contents to speed up unloading." },
      { name: "Confirm details", text: "Reconfirm crew, parking, and building access a few days before moving day." },
    ],
  },
  "preparing-for-a-long-distance-move": {
    quickAnswer:
      "To prepare for a long-distance move, book a licensed mover with set travel costs early, create a detailed inventory, and downsize before you pay to ship items. Keep documents, valuables, and essentials with you, and get pickup and delivery windows in writing so there are no surprises.",
    howToName: "How to prepare for a long-distance move",
    steps: [
      { name: "Book early", text: "Reserve a licensed long-distance mover with set travel costs well ahead of your date." },
      { name: "Inventory everything", text: "Create a detailed list for tracking and valuation coverage." },
      { name: "Downsize first", text: "Don't pay to ship items you won't keep — sell or donate them." },
      { name: "Protect essentials", text: "Keep documents, valuables, and a personal bag with you, not on the truck." },
      { name: "Confirm delivery", text: "Get pickup and delivery windows in writing." },
      { name: "Prepare the new place", text: "Arrange utilities and access before your shipment arrives." },
    ],
  },
  "preparing-to-move-company-offices": {
    quickAnswer:
      "Plan an office move two to three months ahead: assign a move coordinator, inventory equipment, and decide what moves, stores, or gets retired. Schedule the move after hours or on a weekend, back up data first, and label everything by department to minimize business downtime.",
    howToName: "How to prepare for an office move",
    steps: [
      { name: "Assign a coordinator", text: "Put one person in charge of the move plan and vendor communication." },
      { name: "Inventory and triage", text: "Decide what moves to the new space, what goes to storage, and what's retired." },
      { name: "Schedule off-hours", text: "Plan the move after hours or on a weekend to limit downtime." },
      { name: "Back up data", text: "Secure and back up systems before any equipment is moved." },
      { name: "Label by department", text: "Tag everything so setup at the new office is fast." },
      { name: "Test before reopening", text: "Verify IT, phones, and workstations run before staff return." },
    ],
  },
  "moving-week-checklist": {
    quickAnswer:
      "In the week before your move, confirm your movers and arrival window, finish packing non-essentials, and pack a clearly labeled essentials box. Defrost the fridge, dispose of hazardous items movers can't take, and keep documents, medications, and valuables with you for moving day.",
    howToName: "How to prepare the week before your move",
    steps: [
      { name: "Confirm your movers", text: "Verify the date, arrival window, and crew size in writing." },
      { name: "Finish packing non-essentials", text: "Box everything except what you'll need the last few days." },
      { name: "Pack an essentials box", text: "Clothes, toiletries, chargers, documents, and first-night basics." },
      { name: "Prep appliances", text: "Defrost and dry the fridge and freezer; disconnect and drain washers." },
      { name: "Dispose of hazardous items", text: "Movers can't take propane, paint, or chemicals — handle these separately." },
      { name: "Set aside valuables", text: "Keep jewelry, documents, and irreplaceables with you." },
    ],
  },
  "moving-day-checklist": {
    quickAnswer:
      "On moving day, set an alarm, eat breakfast, and be ready before your crew's arrival window. Do a final walkthrough, keep essentials and valuables with you, point out fragile or specialty items to the crew, and check every room and closet before you leave the old home.",
    howToName: "How to have a smooth moving day",
    steps: [
      { name: "Set your alarm", text: "Wake early so you're ready before the crew's arrival window." },
      { name: "Eat breakfast", text: "Fuel up — your kitchen may already be packed, so plan ahead." },
      { name: "Do a final walkthrough", text: "Check every room, closet, and cabinet for anything left behind." },
      { name: "Keep essentials with you", text: "Documents, medications, valuables, and a first-night box travel with you." },
      { name: "Brief the crew", text: "Point out fragile, specialty, and do-not-pack items before loading starts." },
      { name: "Verify before leaving", text: "Confirm the home is empty before you lock up." },
    ],
  },
  "packing-supplies-and-advice": {
    quickAnswer:
      "Pack with quality supplies — sturdy small-to-XL boxes, bubble wrap, packing paper, and strong tape. Put heavy items in small boxes, wrap fragile items individually, and use specialty boxes for dishes, mirrors, and electronics. Label every box by room and contents so unpacking is simple.",
    howToName: "How to pack for a move",
    steps: [
      { name: "Get quality supplies", text: "Sturdy boxes (S–XL), bubble wrap, packing paper, and strong tape." },
      { name: "Heavy in small boxes", text: "Books and dense items go in small boxes; lighter items in large ones." },
      { name: "Wrap fragiles individually", text: "Use paper and bubble wrap, and fill gaps so nothing shifts." },
      { name: "Use specialty boxes", text: "Dish barrels, mirror boxes, and wardrobe boxes protect best." },
      { name: "Label everything", text: "Mark each box by room and contents, and flag fragile boxes clearly." },
      { name: "Keep an essentials box", text: "Pack first-night items you'll open right away." },
    ],
  },
};
