/**
 * The menu. Menus change with the seasons, so this file is the only place to edit.
 *
 * Each item: name, optional description, price as text (e.g. "£9.50") or null,
 * and dietary labels only when confirmed by the kitchen.
 * Items marked `placeholder: true` show a "to be confirmed" tag. Delete them when
 * the real menu is added. Never guess prices or allergens.
 */

export type DietaryLabel = "V" | "VG" | "GF" | "DF";

export const dietaryLabels: Record<DietaryLabel, string> = {
  V: "Vegetarian",
  VG: "Vegan",
  GF: "Gluten free",
  DF: "Dairy free",
};

export interface MenuItem {
  name: string;
  description?: string;
  price: string | null;
  dietary?: DietaryLabel[];
  placeholder?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  intro: string;
  /** e.g. served times, once confirmed. */
  note?: string;
  items: MenuItem[];
}

const placeholderItems = (count: number): MenuItem[] =>
  Array.from({ length: count }, (_, i) => ({
    name: `Dish ${i + 1}: name to be confirmed`,
    description: "Description to be supplied by Ocho.",
    price: null,
    placeholder: true,
  }));

export const menu: MenuCategory[] = [
  {
    id: "brunch",
    title: "Breakfast & brunch",
    intro: "Made fresh in our kitchen with local produce.",
    items: placeholderItems(6),
  },
  {
    id: "lunch",
    title: "Lunch",
    intro: "Home-made lunch plates to eat in by the canal.",
    items: placeholderItems(5),
  },
  {
    id: "drinks",
    title: "Drinks",
    intro: "The full drinks list is to be confirmed.",
    items: placeholderItems(4),
  },
  {
    id: "cocktails",
    title: "Cocktails",
    intro: "We are fully licensed. Ask about the cocktail list.",
    items: placeholderItems(4),
  },
];

/** Shown at the bottom of the menu page. Replace with the kitchen's wording. */
export const allergenNote =
  "Allergen and dietary information to be confirmed. Please speak to our team about allergies before ordering.";
