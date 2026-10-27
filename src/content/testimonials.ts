/**
 * Guest reviews. Only add real, verified quotes that Ocho has permission to use,
 * with the source and a link. The reviews section stays hidden while this list is empty.
 */

export interface Testimonial {
  quote: string;
  author: string;
  source: string;
  url?: string;
  date?: string;
}

export const testimonials: Testimonial[] = [];
