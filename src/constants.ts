import { Project, Exhibition, Testimonial, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '3',
    title: 'World Consumer Rights Day — Campaign Film',
    category: 'Commercial',
    year: '2024',
    imageUrl: 'https://lh3.googleusercontent.com/d/1LW-2jIdRbL701AeuXzRmk7RKxjxQhGDK',
    videoUrl: 'https://youtu.be/g0HRoBcpjpw?si=dWuS-6QoOoyvSzSI',
    description: 'Impactful campaign film highlighting consumer awareness.',
    size: 'small',
    customPosition: 'bottom'
  },
  {
    id: '2',
    title: 'Noor Jewellery — Commercial Film',
    category: 'Commercial',
    year: '2024',
    imageUrl: 'https://lh3.googleusercontent.com/d/1gGsiOArJhp9ddbskGRog-ugFTzLQWdqX',
    videoUrls: [
      'https://youtube.com/shorts/jiLtgM4Iks0',
      'https://youtube.com/shorts/IHo-X1tuQ2M',
      'https://youtube.com/shorts/wSbsdxEstLU',
      'https://youtube.com/shorts/jiLtgM4Iks0'
    ],
    description: 'Elegant visual storytelling for premium jewellery.',
    size: 'medium'
  },
  {
    id: '8',
    title: 'Agrocel — Documentary Film',
    category: 'Documentary',
    year: '2022',
    imageUrl: 'https://lh3.googleusercontent.com/d/1G-N0sLAg2EQFZo8HD5t5voVX5IkT1k10',
    videoUrl: 'https://youtu.be/UT66RH0NjD8',
    description: 'Real stories from the heart of agricultural innovation.',
    size: 'small'
  },
  {
    id: '1',
    title: 'Moonlight Atta — Commercial Film',
    category: 'Commercial',
    year: '2024',
    imageUrl: 'https://lh3.googleusercontent.com/d/16C9m1ZLDxi1JLytG2oMqOEjakSTAJEVu',
    videoUrl: 'https://youtu.be/dJ1cP66zcpA?si=XRscjuOZPHTgeMQl',
    description: 'A cinematic look at the journey of pure ingredients.',
    size: 'large',
    customPosition: 'center'
  },
  {
    id: '5',
    title: 'BMW Joy Fest — Event Film',
    category: 'Event Films',
    year: '2023',
    imageUrl: 'https://lh3.googleusercontent.com/d/19wrDXAXuKYnixr27OMTi53nr9mk7LIof',
    videoUrl: 'https://www.youtube.com/watch?v=nIYh7XkPOqo',
    description: 'Capturing the precision and excitement of BMW Joy Fest.',
    size: 'large',
    customPosition: 'center'
  },
  {
    id: '7',
    title: 'Laxmi Constructions — Brand Story',
    category: 'Documentary',
    year: '2022',
    imageUrl: 'https://lh3.googleusercontent.com/d/16ySzTZKlX1I8sYHVPmK9SZomIYKSUDBT',
    videoUrl: 'https://www.youtube.com/watch?v=AsGgktzyX7M',
    description: 'A documentary-style look at architectural excellence.',
    size: 'medium'
  },
  {
    id: '6',
    title: 'Want A Santa — Event Film',
    category: 'Event Films',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://www.youtube.com/watch?v=60ItHLz5WEA',
    description: 'Documenting the festive spirit and community joy.',
    size: 'medium'
  },
  {
    id: '4',
    title: 'MINI Infinity — Event Film',
    category: 'Event Films',
    year: '2023',
    imageUrl: 'https://lh3.googleusercontent.com/d/1NtbH_SoSEtN38XJuieJUtfB69yB5eghz',
    videoUrl: 'https://youtu.be/UW-AUGyGrBQ',
    description: 'High-energy coverage of the MINI Infinity experience.',
    size: 'medium',
    customPosition: 'center'
  }
];

export const EXHIBITIONS: Exhibition[] = [];

export const TESTIMONIALS: Testimonial[] = [];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'COMMERCIAL',
    description: 'Cinematic visual storytelling for brands and high-end commercials.'
  },
  {
    id: '2',
    title: 'EVENT FILMS',
    description: 'High-energy coverage focused on movement, scale, and atmosphere.'
  },
  {
    id: '3',
    title: 'DOCUMENTARY',
    description: 'Real-world storytelling and brand narratives with a cinematic approach.'
  }
];
