import React from 'react';
import { User, Ruler, Weight, Droplet, AlertCircle } from 'lucide-react';
import { UserProfile } from '../types';
import { PrescriptionCard } from './PrescriptionCard';

interface ProfileCardProps {
  profile: UserProfile;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-blue-100 p-3 rounded-full">
          <User className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
          <p className="text-gray-600">Age: {profile.age} years</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <Droplet className="w-5 h-5 text-red-500" />
          <span className="text-gray-700">Blood Group: {profile.bloodGroup}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Ruler className="w-5 h-5 text-green-500" />
          <span className="text-gray-700">Height: {profile.height}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Weight className="w-5 h-5 text-purple-500" />
          <span className="text-gray-700">Weight: {profile.weight}</span>
        </div>
        <div className="flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-yellow-500" />
          <span className="text-gray-700">{profile.conditions.length} Conditions</span>
        </div>
      </div>

      {profile.allergies.length > 0 && (
        <div className="border-t pt-4">
          <h3 className="font-semibold text-gray-800 mb-2">Allergies</h3>
          <div className="flex flex-wrap gap-2">
            {profile.allergies.map((allergy, index) => (
              <span
                key={index}
                className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full"
              >
                {allergy}
              </span>
            ))}
          </div>
        </div>
      )}

      {profile.conditions.length > 0 && (
        <div className="border-t mt-4 pt-4">
          <h3 className="font-semibold text-gray-800 mb-2">Medical Conditions & Prescriptions</h3>
          <div className="space-y-4">
            {profile.conditions.map((condition) => (
              <div key={condition.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {condition.name}
                  </span>
                </div>
                {condition.prescriptions.map((prescription) => (
                  <PrescriptionCard
                    key={prescription.id}
                    prescription={prescription}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};