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

const item = (name: string, price: string, extra: Partial<MenuItem> = {}): MenuItem => ({ name, price, ...extra });

/** Source: Ocho's current Flipdish ordering menu (supplied by Bastian Studio). */
export const menu: MenuCategory[] = [
  {
    id: "food",
    title: "Breakfast, brunch & lunch",
    intro: "Made fresh in house by our team of chefs.",
    items: [
      item("Full Breakfast", "£15.00", { description: "Veggie breakfast also available." }),
      item("Soup & Toastie of the Day", "£7.00"),
      item("Soup of the Day & Homemade Bread", "£4.00", { description: "Gluten free available." }),
      item("Homemade Granola Pot", "£8.00", {
        description:
          "Natural or vegan yoghurt, homemade granola with mango, raspberry or strawberry compote and fresh berries.",
        dietary: ["V", "VG"],
      }),
      item("OCHO French Toast Stacks", "from £14.00", { description: "Homemade French toast, made to order." }),
      item("Traditional Spanish Omelette", "£13.00", {
        description: "Served with rocket, pickled red onion, balsamic dressing and garlic aioli.",
        dietary: ["V"],
      }),
      item("Desayuno de Filete y Huevos", "£19.00", {
        description: "Grass-fed beef steak, homemade potato pavé with fried eggs and chimichurri.",
      }),
      item("Breakfast Rolls", "from £3.50", { description: "Available until 13:00." }),
      item("Deli Sandwiches or Wraps", "from £10.00", { description: "Gluten free available." }),
      item("Huevos Rancheros", "from £15.00", {
        description: "Chorizo with chilli salsa brava, baked eggs with toasted sourdough.",
      }),
      item("Eggs Español", "£14.00", {
        description: "Black pudding, chorizo, poached egg and sriracha hollandaise espuma with toasted sourdough.",
      }),
      item("OCHO Pancake Stacks", "from £14.00", { description: "Homemade pancakes, made to order." }),
      item("Ocho Paella", "£16.00", {
        description: "Arbroath smokie paella with poached egg, crispy kale and pickled fennel.",
      }),
    ],
  },
  {
    id: "hot-drinks",
    title: "Coffee & tea",
    intro: "Coffee, tea and hot chocolate.",
    items: [
      item("Latte", "from £4.50"),
      item("Cappuccino", "from £4.40"),
      item("Flat White", "from £4.00"),
      item("Americano", "from £3.80"),
      item("Mocha", "from £4.70"),
      item("Espresso", "£3.70"),
      item("Hot Chocolate", "from £4.50"),
      item("Tea", "from £3.70", { description: "Decaf available." }),
      item("Herbal Tea", "£4.25"),
    ],
  },
  {
    id: "specials",
    title: "Speciality hot drinks",
    intro: "Something a little sweeter.",
    items: [
      item("London Fog", "£4.50"),
      item("Nutella Hot Choc", "£5.00"),
      item("Biscoff Latte", "£5.40"),
      item("Cinnamon Bun Latte", "£5.35"),
    ],
  },
  {
    id: "cold-drinks",
    title: "Cold drinks",
    intro: "Juices and soft drinks.",
    items: [
      item("Fresh Fruit Juices", "£3.90"),
      item("Big Toms Tomato Juice", "£3.00"),
      item("Coke", "£2.50"),
      item("Diet Coke", "£2.50"),
      item("Irn Bru", "£2.50"),
      item("Diet Irn Bru", "£2.50"),
      item("Fever-Tree Lemonade", "£3.00"),
      item("Fever-Tree Tonic Water", "£3.00"),
      item("Fever-Tree Ginger Beer", "£3.20"),
      item("LemonAID Passionfruit", "£4.10"),
      item("LemonAID Lime", "£4.10"),
      item("LemonAID Blood Orange", "£4.10"),
      item("Highland Spring Water", "£2.50"),
    ],
  },
];

/** Shown under the menu. */
export const menuNote =
  "This is our current online ordering menu. Our menu changes with the seasons, so dishes and prices may vary. Adults need around 2000 kcal a day.";

/** Shown at the bottom of the menu page. Replace with the kitchen's wording. */
export const allergenNote =
  "Allergen and dietary information to be confirmed. Please speak to our team about allergies before ordering.";
