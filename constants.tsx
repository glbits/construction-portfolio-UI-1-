
import React from 'react';
import { Project, ServiceCategory, Testimonial, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern 3BHK Duplex',
    location: 'Kolar Road, Bhopal',
    category: ServiceCategory.CONSTRUCTION,
    duration: '14 Months',
    description: 'A ground-up construction project focused on natural ventilation and contemporary Indian aesthetics.',
    image: 'https://thegreenfortune.com/wp-content/uploads/2025/08/30x50-duplex-house-design-_-30x50-west-facing-house-_-30x50-house-plan-3d-_-shorts-youtubeshorts.jpeg',
    clientStory: 'We helped Mr. Sharma build his dream retirement home, ensuring every brick was laid with precision.'
  },
  {
    id: '2',
    title: 'Heritage Home Renovation',
    location: 'Arera Colony, Bhopal',
    category: ServiceCategory.RENOVATION,
    duration: '5 Months',
    description: 'Restoring a 40-year-old family bungalow while integrating modern plumbing and electrical systems.',
    image: 'https://st.hzcdn.com/simgs/1ae1afcf056d4035_14-3439/_.jpg',
    clientStory: 'The Singh family wanted to preserve their legacy while making the home livable for the next generation.'
  },
  {
    id: '3',
    title: 'Luxury Office Interior',
    location: 'MP Nagar, Bhopal',
    category: ServiceCategory.INTERIOR,
    duration: '3 Months',
    description: 'Transforming a bare shell into a high-functioning corporate space for a local startup.',
    image: 'https://officebanao.com/wp-content/uploads/2022/05/36-CLASSICAL-MD-Cabin.webp',
    clientStory: 'Fast-paced execution with zero compromise on the finish and ergonomic design.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Amitabh Verma',
    location: 'Gulmohar Colony',
    text: 'Aman and his team are rare gems. No hidden costs, they pick up the phone every time, and the quality of work is outstanding. They treated my house like their own.',
    rating: 5
  },
  {
    id: '2',
    name: 'Priya Rajawat',
    location: 'Indrapuri',
    text: 'We were worried about renovating our old kitchen, but Bharat Nirman made it so simple. The timelines were respected, which is very rare in construction!',
    rating: 5
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'New House Construction',
    description: 'End-to-end building services from foundation to final paint. We handle all local approvals.',
    icon: '🏠',
    category: ServiceCategory.CONSTRUCTION,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwaG91c2V8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 's2',
    title: 'Renovation & Remodeling',
    description: 'Give your old space a new life. Kitchen, bathroom, or whole-house makeovers.',
    icon: '🏗️',
    category: ServiceCategory.RENOVATION,
    image: 'https://www.planradar.com/wp-content/uploads/2020/01/remodeling-app.png'
  },
  {
    id: 's3',
    title: 'Boundary Walls & Fencing',
    description: 'Secure your property with high-quality boundary walls built for longevity.',
    icon: '🧱',
    category: ServiceCategory.CONSTRUCTION,
    image: 'https://i.pinimg.com/736x/5d/17/ef/5d17ef95f552adc30c172f4fc9fe39f0.jpg'
  },
  {
    id: 's4',
    title: 'Interior Turnkey Work',
    description: 'Ceilings, flooring, and woodwork. We make your interiors look world-class.',
    icon: '✨',
    category: ServiceCategory.INTERIOR,
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/SG/MT/CT/73406029/turnkey-interior-design-projects.jpg'
  }
];
