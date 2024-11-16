import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LoginForm } from './components/LoginForm';
import { ProfileForm } from './components/ProfileForm';
import { ProfileCard } from './components/ProfileCard';
import { MedicineCard } from './components/MedicineCard';
import { AddDiseaseModal } from './components/AddDiseaseModal';
import { LandingPage } from './components/LandingPage';
import { Stethoscope, Plus } from 'lucide-react';
import { UserProfile, Disease } from './types';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [showAddDisease, setShowAddDisease] = useState(false);

  if (!isLoggedIn) {
    return <LandingPage onLogin={() => setIsLoggedIn(true)} />;
  }

  const handleProfileSubmit = (profileData: Partial<UserProfile>) => {
    setProfile({
      id: '1',
      allergies: [],
      conditions: [],
      ...profileData
    } as UserProfile);
  };

  const handleAddDisease = (disease: Disease) => {
    if (profile) {
      setProfile({
        ...profile,
        conditions: [...profile.conditions, disease]
      });
    }
  };

  if (!profile) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-pink-50"
      >
        <ProfileForm onSubmit={handleProfileSubmit} />
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-pink-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center space-x-3"
            >
              <Stethoscope className="w-8 h-8 text-green-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-pink-600 text-transparent bg-clip-text">
                AyurTech Care
              </h1>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLoggedIn(false)}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Logout
            </motion.button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="lg:col-span-1"
          >
            <ProfileCard profile={profile} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAddDisease(true)}
              className="mt-4 w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:from-green-700 hover:to-blue-700 transition-all shadow-lg"
            >
              <Plus className="w-5 h-5" />
              <span>Add Health Concern</span>
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Ayurvedic & Modern Solutions</h2>
              <p className="text-gray-600">Personalized recommendations based on your health profile</p>
            </div>
          </motion.div>
        </div>
      </main>

      {showAddDisease && (
        <AddDiseaseModal
          onClose={() => setShowAddDisease(false)}
          onAdd={handleAddDisease}
        />
      )}
    </div>
  );
}

export default App;