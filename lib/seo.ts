// ── Central SEO / structured-data source of truth ───────────────────────────
// Everything an answer engine (Google AI Overviews, ChatGPT, Gemini, Perplexity)
// needs to understand and cite Swyft. Nairobi-focused.

export const SITE_URL = "https://swyft.africa";
export const SUPPORT_EMAIL = "support@swyft.africa";
export const SUPPORT_PHONE = "+254796652112";

// Store links — keep in sync with app/page.tsx constants.
export const PLAY_STORE_URL = "#"; // TODO: real Google Play URL
export const APP_STORE_URL = "#"; // TODO: real App Store URL

// Ratings shown as schema stars. Leave count at 0 until you have REAL
// Play Store / App Store numbers — aggregateRating is omitted while count is 0,
// so we never publish a fabricated rating (Google penalises that).
export const APP_RATING = "4.8";
export const APP_RATING_COUNT = 0;

// ── FAQ (answer-first, the exact questions Nairobians ask) ───────────────────
// Used for BOTH the visible accordion and the FAQPage JSON-LD, so they always match.
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How does finding a house on Swyft work?",
    a: "Swyft turns house hunting into a video feed. You swipe through short property videos filmed by verified Scouts across Nairobi, save the ones you like to your Bucket List, then pay a small viewing fee to unlock the full details — building name, directions, caretaker's phone, deposit and availability — and go view the place yourself. No agents, no scams, no wasted trips. Browsing the feed is free.",
  },
  {
    q: "What is a Swyft Scout?",
    a: "Scouts are KYC-verified locals who film short (up to 90-second) video tours of vacant properties around Nairobi. They earn for every approved upload and keep 90% of the viewing fee whenever someone unlocks a property they filmed. Anyone can apply to become a Scout from inside the app.",
  },
  {
    q: "How much does it cost to view a house on Swyft?",
    a: "The viewing fee is 6% of the unit's monthly rent — so unlocking a KES 25,000/month flat costs KES 1,500. That reveals the building name, directions, caretaker contact, deposit and availability so you can go and view it yourself. Swiping and saving listings in the feed is completely free.",
  },
  {
    q: "How do I move house in Nairobi with Swyft?",
    a: "Open the Move tab and either pick Transport — a single vehicle from a van to a 10-tonne lorry — or a Moving package by home size, from Studio to 5+ bedroom, bundled with the right truck and loaders. You get an upfront price, pay by M-Pesa or cash, and track your driver live. You can also schedule the move for a later date.",
  },
  {
    q: "Is the Swyft feed only about renting houses?",
    a: "No. Your feed is personalised to your interests — House Hunting, Furniture, Appliances, or Building & Construction — so you can discover a home and the things that go in it, all in the same swipe.",
  },
  {
    q: "Can Swyft handle deliveries for my business?",
    a: "Yes. Swyft for Business lets companies book verified trucks with live GPS tracking, manage every delivery in one dashboard, and receive monthly KRA-compliant invoices — from around KES 4,500 a trip, with no fixed fleet costs. It runs on the same driver network as the consumer app.",
  },
  {
    q: "Is the Swyft app free, and what areas does it cover?",
    a: "The app is free to download on both Android and iPhone, and browsing the feed is free. Swyft operates across Nairobi and its metro area — Kilimani, Westlands, Kasarani, Ruaka, Rongai and surrounding neighbourhoods.",
  },
];

// ── JSON-LD builders ─────────────────────────────────────────────────────────
const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Swyft",
  legalName: "Barak Labs LTD",
  url: SITE_URL,
  logo: `${SITE_URL}/swyft-logo.png`,
  description:
    "Swyft is a housing and moving super-app for Nairobi, Kenya. Discover homes in a video feed filmed by verified Scouts, unlock verified details, and book trusted movers — all in one app.",
  areaServed: { "@type": "City", name: "Nairobi", containedInPlace: { "@type": "Country", name: "Kenya" } },
  address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SUPPORT_PHONE,
      email: SUPPORT_EMAIL,
      contactType: "customer support",
      areaServed: "KE",
      availableLanguage: ["en", "sw"],
    },
  ],
  sameAs: ["https://www.instagram.com/_.swyft._"],
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Swyft",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-KE",
};

// Site-wide graph (safe on every page).
export const siteLd = {
  "@context": "https://schema.org",
  "@graph": [organization, website],
};

// Homepage-only graph (app, services, FAQ).
export const homepageLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      "@id": `${SITE_URL}/#app`,
      name: "Swyft",
      operatingSystem: "ANDROID, IOS",
      applicationCategory: "LifestyleApplication",
      url: SITE_URL,
      ...(PLAY_STORE_URL !== "#" || APP_STORE_URL !== "#"
        ? { downloadUrl: [PLAY_STORE_URL, APP_STORE_URL].filter((u) => u !== "#") }
        : {}),
      offers: { "@type": "Offer", price: "0", priceCurrency: "KES" },
      publisher: { "@id": `${SITE_URL}/#organization` },
      description:
        "Find a home and move into it, all in one app. Swipe a video feed of Scout-verified Nairobi properties, unlock the details, and book trusted movers with upfront pricing and live tracking.",
      ...(APP_RATING_COUNT > 0
        ? {
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: APP_RATING,
              ratingCount: String(APP_RATING_COUNT),
              bestRating: "5",
            },
          }
        : {}),
    },
    {
      "@type": "Service",
      name: "Swyft — house hunting video feed for Nairobi",
      serviceType: "Property discovery",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "City", name: "Nairobi" },
      description:
        "Discover Nairobi rentals in a personalised video feed filmed by verified Scouts. Save homes to a bucket list and unlock verified details — building, directions, caretaker contact and availability — then view independently. No agents, no scams.",
    },
    {
      "@type": "Service",
      name: "Swyft Move — book trusted movers in Nairobi",
      serviceType: "Moving and relocation service",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "City", name: "Nairobi" },
      description:
        "Book vetted movers in Nairobi with upfront pricing and live driver tracking. Move furniture, relocate a home, or send business deliveries.",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};
