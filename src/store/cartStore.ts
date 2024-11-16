import { create } from 'zustand';
import { Medicine } from '../types';

interface CartStore {
  items: { medicine: Medicine; quantity: number }[];
  addToCart: (medicine: Medicine) => void;
  removeFromCart: (medicineId: string) => void;
  updateQuantity: (medicineId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addToCart: (medicine) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.medicine.id === medicine.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.medicine.id === medicine.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { medicine, quantity: 1 }] };
    }),
  removeFromCart: (medicineId) =>
    set((state) => ({
      items: state.items.filter((item) => item.medicine.id !== medicineId),
    })),
  updateQuantity: (medicineId, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.medicine.id === medicineId ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ items: [] }),
}));