import { getTranslation } from './translations';

export type Language = 'Spanish' | 'French' | 'Italian' | 'German' | 'Japanese' | 'Mandarin';

export interface Phrase {
  english: string;
  translation: string;
  pronunciation?: string;
}

export interface CategoryPhrases {
  category: string;
  phrases: Phrase[];
}

export interface TravelType {
  id: string;
  name: string;
  description: string;
  icon: string;
  categories: string[];
}

// Define travel types
export const travelTypes: TravelType[] = [
  {
    id: 'vacation',
    name: 'Beach Vacation',
    description: 'Relaxing phrases for your beach getaway',
    icon: 'umbrella-beach',
    categories: ['Greetings', 'Beach', 'Restaurant', 'Hotel', 'Transportation', 'Emergency']
  },
  {
    id: 'business',
    name: 'Business Trip',
    description: 'Essential phrases for professional interactions',
    icon: 'briefcase',
    categories: ['Greetings', 'Business Meeting', 'Dining', 'Hotel', 'Transportation', 'Emergency']
  },
  {
    id: 'adventure',
    name: 'Adventure Travel',
    description: 'Helpful phrases for outdoor adventures',
    icon: 'hiking',
    categories: ['Greetings', 'Outdoor Activities', 'Directions', 'Food', 'Accommodation', 'Emergency']
  },
  {
    id: 'city',
    name: 'City Exploration',
    description: 'Urban phrases for exploring cities and cultural sites',
    icon: 'city',
    categories: ['Greetings', 'Directions', 'Cultural Sites', 'Dining', 'Transportation', 'Shopping', 'Emergency']
  },
  {
    id: 'food',
    name: 'Culinary Tour',
    description: 'Food-focused phrases for gastronomic adventures',
    icon: 'utensils',
    categories: ['Greetings', 'Restaurant', 'Food Preferences', 'Market', 'Compliments', 'Emergency']
  }
];

// Categories for each travel type
export const categories = {
  'Greetings': [
    'Hello', 'Good morning', 'Good afternoon', 'Good evening', 'Goodbye', 'Thank you', 'You\'re welcome', 'Please', 'Excuse me', 'I\'m sorry'
  ],
  'Beach': [
    'Where is the beach?', 'I need sunscreen', 'Is swimming allowed here?', 'Where can I rent beach chairs?', 'Is there a lifeguard?'
  ],
  'Restaurant': [
    'Table for two, please', 'The menu, please', 'I would like to order', 'The bill, please', 'That was delicious'
  ],
  'Hotel': [
    'I have a reservation', 'Where is my room?', 'Is breakfast included?', 'What time is checkout?', 'Can I get room service?'
  ],
  'Transportation': [
    'Where is the bus stop?', 'How much is a taxi to...?', 'Can you call me a taxi?', 'When does the train arrive?', 'Is this the right way to...?'
  ],
  'Emergency': [
    'Help!', 'I need a doctor', 'Call the police', 'Where is the hospital?', 'I lost my passport'
  ],
  'Business Meeting': [
    'Nice to meet you', 'Let me introduce myself', 'I work for...', 'Can we schedule a meeting?', 'Do you have a business card?'
  ],
  'Dining': [
    'Do you have a reservation?', 'Can you recommend something?', 'Is this dish spicy?', 'I have food allergies', 'Can I have the check?'
  ],
  'Outdoor Activities': [
    'Where can I rent equipment?', 'Is it safe to hike here?', 'How difficult is this trail?', 'Where can I find a guide?', 'What wildlife might I see?'
  ],
  'Directions': [
    'How do I get to...?', 'Is it far from here?', 'Can you show me on the map?', 'I am lost', 'Which direction is...?'
  ],
  'Food': [
    'Is this vegetarian?', 'What is a local specialty?', 'This is delicious', 'Can I have more water?', 'How spicy is this?'
  ],
  'Accommodation': [
    'Do you have any vacancies?', 'How much per night?', 'Is breakfast included?', 'Is there Wi-Fi?', 'Where are the restrooms?'
  ],
  'Cultural Sites': [
    'When does it open?', 'How much is the entrance fee?', 'Is photography allowed?', 'Are there guided tours?', 'What is the history of this place?'
  ],
  'Shopping': [
    'How much does this cost?', 'Do you accept credit cards?', 'That\'s too expensive', 'Can you give me a discount?', 'Where can I find...?'
  ],
  'Food Preferences': [
    'I am vegetarian', 'I am allergic to...', 'No spicy food, please', 'Can you recommend a local dish?', 'What ingredients are in this?'
  ],
  'Market': [
    'How much is this?', 'Can I taste it?', 'I will take this', 'That\'s too expensive', 'Do you have anything fresher?'
  ],
  'Compliments': [
    'This is delicious', 'Compliments to the chef', 'What a wonderful meal', 'The service was excellent', 'I enjoyed this very much'
  ]
};

// Language data organized by travel type and language
export function getLanguagePhrases(travelTypeId: string, language: Language): CategoryPhrases[] {
  const relevantTravelType = travelTypes.find(t => t.id === travelTypeId);
  if (!relevantTravelType) return [];

  const result: CategoryPhrases[] = [];

  for (const category of relevantTravelType.categories as (keyof typeof categories)[]) {
    const phrases: Phrase[] = categories[category].map(englishPhrase => {
      const translationData = getTranslation(englishPhrase, language);
      
      return {
        english: englishPhrase,
        translation: translationData.translation,
        pronunciation: translationData.pronunciation
      };
    });
    
    result.push({
      category,
      phrases
    });
  }

  return result;
}

export const languages: Language[] = ['Spanish', 'French', 'Italian', 'German', 'Japanese', 'Mandarin']; 