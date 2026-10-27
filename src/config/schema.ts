import { site } from "./site";

/** schema.org Restaurant data. Only verified facts; hours are added once confirmed. */
export function restaurantSchema(siteUrl: URL | undefined) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.fullName,
    alternateName: site.name,
    description: site.description,
    url: siteUrl?.href,
    telephone: site.phone.e164,
    servesCuisine: ["Brunch", "Breakfast", "Lunch", "Cocktails"],
    acceptsReservations: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      postalCode: site.address.postcode,
      addressCountry: site.address.country,
    },
    amenityFeature: [{ "@type": "LocationFeatureSpecification", name: "Dog friendly", value: true }],
  };
}
