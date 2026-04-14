export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  videoUrl?: string;
  videoUrls?: string[];
  description: string;
  size: 'small' | 'medium' | 'large';
  customPosition?: string;
}

export interface Exhibition {
  id: string;
  title: string;
  location: string;
  date: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}
