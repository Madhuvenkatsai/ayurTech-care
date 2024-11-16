import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { Disease, Prescription } from '../types';

interface AddDiseaseModalProps {
  onClose: () => void;
  onAdd: (disease: Disease) => void;
}

export const AddDiseaseModal: React.FC<AddDiseaseModalProps> = ({ onClose, onAdd }) => {
  const [disease, setDisease] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);

  const generatePrescription = async (diseaseName: string, symptomsList: string[]): Promise<Prescription[]> => {
    setLoading(true);
    try {
      // Simulated AI response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const prescriptions: Prescription[] = [
        {
          id: '1',
          medicineName: 'Ayurvedic Herbal Mix',
          dosage: '2 tablets',
          timing: 'Twice daily after meals',
          duration: '15 days',
          isHomeRemedy: true
        },
        {
          id: '2',
          medicineName: 'Modern Medicine',
          dosage: '1 tablet',
          timing: 'Once daily before bed',
          duration: '7 days',
          isHomeRemedy: false
        }
      ];
      
      return prescriptions;
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const symptomsList = symptoms.split(',').map(s => s.trim());
    const prescriptions = await generatePrescription(disease, symptomsList);
    
    onAdd({
      id: Date.now().toString(),
      name: disease,
      symptoms: symptomsList,
      prescriptions
    });
    
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-xl p-6 max-w-md w-full relative"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <h2 className="text-xl font-bold text-gray-800 mb-4">Add Health Concern</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Condition Name</label>
              <input
                type="text"
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="e.g., Migraine, Back Pain"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Symptoms (comma-separated)</label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                rows={3}
                placeholder="e.g., Headache, Nausea, Sensitivity to light"
                required
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Analyzing & Generating Prescription...</span>
                </>
              ) : (
                <span>Get Personalized Treatment</span>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};