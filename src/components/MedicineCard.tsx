import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, AlertCircle, Heart } from 'lucide-react';
import { Medicine } from '../types';
import { useCartStore } from '../store/cartStore';
import toast from 'react-hot-toast';

interface MedicineCardProps {
  medicine: Medicine;
}

export const MedicineCard: React.FC<MedicineCardProps> = ({ medicine }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(medicine);
    toast.success(`Added ${medicine.name} to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all"
    >
      <div className="relative">
        <img
          src={medicine.image}
          alt={medicine.name}
          className="w-full h-48 object-cover"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </motion.button>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{medicine.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{medicine.description}</p>
          </div>
          {medicine.isAyurvedic && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              Ayurvedic
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-blue-600">₹{medicine.price}</span>
            {medicine.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ₹{medicine.originalPrice}
              </span>
            )}
          </div>
          
          {medicine.inStock ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:from-green-700 hover:to-blue-700 transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </motion.button>
          ) : (
            <div className="flex items-center text-red-500 space-x-1">
              <AlertCircle className="w-5 h-5" />
              <span>Out of Stock</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};