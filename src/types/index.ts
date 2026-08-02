export interface Artist {
  slug: string;
  name: string;
  title: string;
  signatureStyle: string;
  bio: string;
  yearsActive: number;
  image: string;
  portfolio: string[];
}

export interface TattooStyle {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export interface GalleryPiece {
  id: string;
  image: string;
  artistSlug: string;
  styleSlug: string;
  height: "short" | "medium" | "tall";
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export interface ProcessStep {
  index: string;
  slug?: string;
  title: string;
  description: string;
  fullDescription?: string[];
}

export interface BookingFormValues {
  name: string;
  email: string;
  phone: string;
  service?: string;
  colorPreference?: string;
  artistSlug?: string;
  styleSlug?: string;
  size?: string;
  placement?: string;
  canVisit?: string;
  budget?: string;
  message?: string;
}

export interface ApiResponse<T = undefined> {
  success: boolean;
  message: string;
  data?: T;
}
