import React from 'react';
import { Clock, Calendar, Pill } from 'lucide-react';
import { Prescription } from '../types';

interface PrescriptionCardProps {
  prescription: Prescription;
}

export const PrescriptionCard: React.FC<PrescriptionCardProps> = ({ prescription }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{prescription.medicineName}</h3>
        {prescription.isHomeRemedy && (
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            Home Remedy
          </span>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <Pill className="w-4 h-4 mr-2" />
          <span>Dosage: {prescription.dosage}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>Timing: {prescription.timing}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Duration: {prescription.duration}</span>
        </div>
      </div>
    </div>
  );
};