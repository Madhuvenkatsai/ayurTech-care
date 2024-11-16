import { Medicine } from './types';

export const medicines: Medicine[] = [
  {
    id: "1",
    name: "AllergyCare Plus",
    description: "24-hour relief from seasonal allergies",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
    inStock: true
  },
  {
    id: "2",
    name: "BP Control",
    description: "Natural blood pressure management supplement",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400",
    inStock: true
  },
  {
    id: "3",
    name: "Immune Boost",
    description: "Daily immune system support",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=400",
    inStock: false
  }
];