/**
 * Third-party booking and ordering.
 *
 * Nothing here is guessed. Every value stays `null` until it is copied from the
 * official Flipdish or Dojo dashboard / embed snippet. While a value is `null`,
 * the page shows a clear "not connected" placeholder and never fakes a booking
 * or an order.
 */

export interface FlipdishConfig {
  /**
   * The official Flipdish web ordering embed, copied from Flipdish.
   * `containerId` and `containerAttributes` are the id and data-* attributes of the
   * <div> in the snippet; `scriptSrc` and `scriptAttributes` are the <script> tag's.
   * Flipdish must also whitelist the domain the site runs on, or the widget won't load.
   */
  embed: {
    containerId: string;
    containerAttributes: Record<string, string>;
    scriptSrc: string;
    scriptAttributes?: Record<string, string>;
  } | null;
  /** A genuine page where guests can already order (e.g. the current Flipdish-hosted site). */
  fallbackUrl: string | null;
  fallbackLabel: string;
}

export interface DojoConfig {
  /**
   * The official Dojo booking widget, copied from Dojo.
   * Use `iframe` when Dojo gives an <iframe> URL. Styling inside the iframe can only
   * be changed through Dojo's own settings, not from this site's CSS.
   */
  embed: { type: "iframe"; src: string; title: string; minHeight?: number } | null;
  /** A genuine page where guests can already book a table. */
  bookingUrl: string | null;
  bookingLabel: string;
}

export const flipdish: FlipdishConfig = {
  embed: null,
  // The current live site is run by Flipdish. Once the domain moves to this site,
  // replace this with Flipdish's own ordering link so it doesn't point back here.
  fallbackUrl: "https://www.ochoglasgow.co.uk/",
  fallbackLabel: "Order on our current ordering site",
};

export const dojo: DojoConfig = {
  embed: null,
  // The existing booking page on the current live site. Replace with the direct
  // Dojo link from the owner before launch, so it doesn't point back to this site.
  bookingUrl: "https://www.ochoglasgow.co.uk/booktable",
  bookingLabel: "Book on our current booking page",
};
