
export type Language = 'vi' | 'en' | 'cn' | 'kr';

export interface LocalizedString {
  vi: string;
  en: string;
  cn: string;
  kr: string;
}

export interface Attraction {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  details: LocalizedString; // Added for modal content
  image: string;
  features: string[];
}

export interface Mountain {
  id: string;
  name: LocalizedString;
  element: LocalizedString;
  description: LocalizedString;
  color: string;
}

export interface Product {
  id: string;
  name: LocalizedString;
  price: number;
  category: 'handicraft' | 'souvenir' | 'fengshui';
  image: string;
}

export interface RedeemItem {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  points: number;
  image: string;
  type: 'stamp' | 'voucher' | 'gift';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface PassportData {
  name: string;
  points: number;
  visitedIds: string[];
  level: 'Explorer' | 'Adventurer' | 'Master';
  redeemedItems: string[]; // Track redeemed item IDs
}