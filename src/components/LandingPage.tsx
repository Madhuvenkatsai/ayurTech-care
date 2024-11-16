import React from 'react';
import { motion } from 'framer-motion';
import { LoginForm } from './LoginForm';
import { Heart, Shield, Leaf } from 'lucide-react';

interface LandingPageProps {
  onLogin: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-6">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-between items-center"
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-pink-600 text-transparent bg-clip-text">
              AyurTech Care
            </h1>
            <button 
              onClick={onLogin}
              className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-gray-800 hover:bg-white/30 transition-all"
            >
              Login
            </button>
          </motion.div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-bold text-gray-800 leading-tight">
              Blend of <span className="text-green-600">Ayurveda</span> and{' '}
              <span className="text-blue-600">Modern Medicine</span>
            </h2>
            <p className="text-xl text-gray-600">
              Experience personalized healthcare that combines ancient wisdom with modern technology
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg"
              >
                <Heart className="w-8 h-8 text-pink-600 mb-4" />
                <h3 className="font-semibold text-gray-800">Holistic Care</h3>
                <p className="text-gray-600 text-sm mt-2">Complete wellness solutions for mind and body</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg"
              >
                <Leaf className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-800">Natural Remedies</h3>
                <p className="text-gray-600 text-sm mt-2">Traditional healing with modern convenience</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg"
              >
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-800">AI Powered</h3>
                <p className="text-gray-600 text-sm mt-2">Smart health recommendations</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center justify-center"
          >
            <LoginForm onLogin={onLogin} onShowRegister={() => {}} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};