/**
 * Restaurant details used across the whole site.
 * Edit here once and every page, the footer and the search-engine data update.
 * Anything still `null` is unconfirmed and shows as a clear placeholder.
 */

export const isProduction = import.meta.env.PUBLIC_SITE_MODE === "production";

export const site = {
  name: "Ocho",
  fullName: "OCHO Glasgow",
  tagline: ["Fresh", "Local", "Home made"],
  description:
    "Independent brunch, lunch and cocktail café on the canal at Speirs Wharf, Glasgow. Fresh, local and home made. Fully licensed and dog friendly.",
  address: {
    street: "8 Speirs Wharf",
    locality: "Glasgow",
    postcode: "G4 9TB",
    country: "GB",
  },
  phone: { display: "0141 375 9767", e164: "+441413759767" },
  /** Not confirmed yet. */
  email: null as string | null,
  /** Map link only (no embedded map, so no third-party cookies). */
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Ocho%2C%208%20Speirs%20Wharf%2C%20Glasgow%20G4%209TB",
  /** Add real profile URLs once confirmed by the owner. */
  social: [
    { label: "Instagram", url: null },
    { label: "Facebook", url: null },
  ] as { label: string; url: string | null }[],
  facts: {
    licensed: true,
    dogFriendly: true,
    buildingYear: 1851,
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/menu/", label: "Menu" },
  { href: "/about/", label: "About" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/visit/", label: "Visit" },
] as const;

export const legalNav = [
  { href: "/privacy/", label: "Privacy" },
  { href: "/cookies/", label: "Cookies" },
  { href: "/terms/", label: "Terms" },
  { href: "/accessibility/", label: "Accessibility" },
] as const;

export const fullAddress = `${site.address.street}, ${site.address.locality} ${site.address.postcode}`;
