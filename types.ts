
export enum ServiceCategory {
  CONSTRUCTION = 'Construction',
  RENOVATION = 'Renovation',
  INTERIOR = 'Interior',
  COMMERCIAL = 'Commercial'
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: ServiceCategory;
  duration: string;
  description: string;
  image: string;
  clientStory?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: ServiceCategory;
  image: string; // New property for specific service imagery
}
