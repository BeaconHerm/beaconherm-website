export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductImage {
  src: string;
  alt: string;
  primary?: boolean;
}

export type ProductCategory = 'backpacking' | 'family-camping' | 'expedition' | 'shelter';

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  category: ProductCategory;
  images: ProductImage[];
  specs: ProductSpec[];
  features: string[];
  capacity: number; // number of people
  weight: string; // e.g. "2.4 kg / 5.3 lbs"
  seasons: '2-season' | '3-season' | '4-season';
  badges?: ('New' | 'Best Seller' | 'Sale')[];
  inventory: number;
  createdAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: 'shield' | 'leaf' | 'truck' | 'heart' | 'compass' | 'mountain';
}

export interface SocialLink {
  platform: 'instagram' | 'facebook' | 'twitter' | 'youtube' | 'pinterest';
  url: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: string;
}
