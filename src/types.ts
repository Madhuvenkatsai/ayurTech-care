export interface UserProfile {
  id: string;
  name: string;
  age: number;
  bloodGroup: string;
  height: string;
  weight: string;
  address: string;
  allergies: string[];
  conditions: Disease[];
}

export interface Disease {
  id: string;
  name: string;
  symptoms: string[];
  prescriptions: Prescription[];
}

export interface Prescription {
  id: string;
  medicineName: string;
  dosage: string;
  timing: string;
  duration: string;
  isHomeRemedy: boolean;
}

export interface Medicine {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  inStock: boolean;
}