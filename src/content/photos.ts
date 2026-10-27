/**
 * The photo library. Every photo on the site is listed here once.
 *
 * To add a real photo: copy it into src/assets/photos/ and set `file` to its file name,
 * e.g. file: "brunch-plate.jpg". Until then a labelled placeholder is shown.
 * Write `alt` as a short description of what is in the photo.
 */

export type PhotoCategory = "food" | "drinks" | "interiors" | "exterior" | "canal";

export interface Photo {
  /** File name in src/assets/photos/, or null for a placeholder. */
  file: string | null;
  alt: string;
  /** What the photographer should capture (shown on the placeholder). */
  brief: string;
  category: PhotoCategory;
  caption?: string;
  /** Photographer / owner credit, shown in the gallery lightbox. */
  credit?: string;
  /** Show in the gallery page. */
  gallery?: boolean;
}

export const categoryLabels: Record<PhotoCategory, string> = {
  food: "Food",
  drinks: "Drinks",
  interiors: "Interiors",
  exterior: "Exterior",
  canal: "Canal & surroundings",
};

export const photos = {
  heroBrunch: {
    file: null,
    alt: "A colourful brunch plate on a navy Ocho plate",
    brief: "Hero: signature brunch plate, overhead, natural light",
    category: "food",
    gallery: true,
  },
  shopfront: {
    file: null,
    alt: "The navy-blue Ocho shopfront with white lettering at Speirs Wharf",
    brief: "Exterior: the navy shopfront and sign, straight on",
    category: "exterior",
    caption: "The navy shopfront at 8 Speirs Wharf",
    gallery: true,
  },
  canalView: {
    file: null,
    alt: "The canal basin at Speirs Wharf with the historic warehouse buildings",
    brief: "Canal: Speirs Wharf basin and the 1851 building from the water",
    category: "canal",
    caption: "Speirs Wharf on the canal",
    gallery: true,
  },
  interiorBar: {
    file: null,
    alt: "Inside Ocho: the bar and counter",
    brief: "Interior: bar and counter, warm evening light",
    category: "interiors",
    gallery: true,
  },
  interiorTables: {
    file: null,
    alt: "Wooden tables by the tall windows inside Ocho",
    brief: "Interior: tables by the tall windows, daytime",
    category: "interiors",
    gallery: true,
  },
  brunchSpread: {
    file: null,
    alt: "Several brunch dishes shared across a table",
    brief: "Food: a full table of brunch dishes, overhead",
    category: "food",
    gallery: true,
  },
  lunchPlate: {
    file: null,
    alt: "A lunch dish at Ocho",
    brief: "Food: a lunch dish, 45° angle",
    category: "food",
    gallery: true,
  },
  sweetPlate: {
    file: null,
    alt: "A sweet brunch dish at Ocho",
    brief: "Food: a sweet brunch dish, close up",
    category: "food",
    gallery: true,
  },
  cocktail: {
    file: null,
    alt: "A cocktail on the bar at Ocho",
    brief: "Drinks: a cocktail on the bar, low angle",
    category: "drinks",
    gallery: true,
  },
  coffee: {
    file: null,
    alt: "Coffee served at Ocho",
    brief: "Drinks: coffee on a wooden table",
    category: "drinks",
    gallery: true,
  },
  dogFriendly: {
    file: null,
    alt: "A dog settled under a table at Ocho",
    brief: "Interior: a guest's dog relaxing (with the owner's permission)",
    category: "interiors",
    gallery: true,
  },
  wharfEvening: {
    file: null,
    alt: "Speirs Wharf in the evening, lights reflected in the canal",
    brief: "Canal: evening reflections along the wharf",
    category: "canal",
    gallery: true,
  },
  doorDetail: {
    file: null,
    alt: "Detail of Ocho's navy door and windows",
    brief: "Exterior: close detail of the navy door and pilasters",
    category: "exterior",
    gallery: true,
  },
} satisfies Record<string, Photo>;

export type PhotoId = keyof typeof photos;

export const galleryPhotos: (Photo & { id: PhotoId })[] = (Object.entries(photos) as [PhotoId, Photo][])
  .filter(([, p]) => p.gallery)
  .map(([id, p]) => ({ id, ...p }));
