/**
 * Opening hours. Fill these in once the owner confirms them.
 * Dining (sit-in) hours and collection/delivery hours are kept separate on purpose,
 * because they are often not the same.
 *
 * Use a string like "9am – 4pm" or "Closed". `null` shows "To be confirmed".
 */

export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;
export type Day = (typeof days)[number];

export type Hours = Record<Day, string | null>;

const unconfirmed = (): Hours =>
  Object.fromEntries(days.map((d) => [d, null])) as Hours;

export const diningHours: Hours = unconfirmed();
export const collectionHours: Hours = unconfirmed();

/** Optional note, e.g. "Kitchen closes 30 minutes before close". */
export const hoursNote: string | null = null;

export const hoursConfirmed = (h: Hours) => days.every((d) => h[d] !== null);
