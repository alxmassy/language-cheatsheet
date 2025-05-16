import { Language } from './travelTypes';

// Translation data structure
type TranslationMap = {
  [key: string]: {
    [lang in Language]?: {
      translation: string;
      pronunciation?: string;
    }
  }
};

// Actual translations for common phrases
export const translations: TranslationMap = {
  // Greetings
  'Hello': {
    'Spanish': { translation: 'Hola' },
    'French': { translation: 'Bonjour' },
    'Italian': { translation: 'Ciao' },
    'German': { translation: 'Hallo' },
    'Japanese': { translation: 'こんにちは', pronunciation: 'Konnichiwa' },
    'Mandarin': { translation: '你好', pronunciation: 'Nǐ hǎo' }
  },
  'Good morning': {
    'Spanish': { translation: 'Buenos días' },
    'French': { translation: 'Bonjour' },
    'Italian': { translation: 'Buongiorno' },
    'German': { translation: 'Guten Morgen' },
    'Japanese': { translation: 'おはようございます', pronunciation: 'Ohayou gozaimasu' },
    'Mandarin': { translation: '早上好', pronunciation: 'Zǎoshang hǎo' }
  },
  'Good afternoon': {
    'Spanish': { translation: 'Buenas tardes' },
    'French': { translation: 'Bon après-midi' },
    'Italian': { translation: 'Buon pomeriggio' },
    'German': { translation: 'Guten Tag' },
    'Japanese': { translation: 'こんにちは', pronunciation: 'Konnichiwa' },
    'Mandarin': { translation: '下午好', pronunciation: 'Xiàwǔ hǎo' }
  },
  'Good evening': {
    'Spanish': { translation: 'Buenas noches' },
    'French': { translation: 'Bonsoir' },
    'Italian': { translation: 'Buonasera' },
    'German': { translation: 'Guten Abend' },
    'Japanese': { translation: 'こんばんは', pronunciation: 'Konbanwa' },
    'Mandarin': { translation: '晚上好', pronunciation: 'Wǎnshang hǎo' }
  },
  'Goodbye': {
    'Spanish': { translation: 'Adiós' },
    'French': { translation: 'Au revoir' },
    'Italian': { translation: 'Arrivederci' },
    'German': { translation: 'Auf Wiedersehen' },
    'Japanese': { translation: 'さようなら', pronunciation: 'Sayounara' },
    'Mandarin': { translation: '再见', pronunciation: 'Zàijiàn' }
  },
  'Thank you': {
    'Spanish': { translation: 'Gracias' },
    'French': { translation: 'Merci' },
    'Italian': { translation: 'Grazie' },
    'German': { translation: 'Danke' },
    'Japanese': { translation: 'ありがとう', pronunciation: 'Arigatou' },
    'Mandarin': { translation: '谢谢', pronunciation: 'Xièxiè' }
  },
  'You\'re welcome': {
    'Spanish': { translation: 'De nada' },
    'French': { translation: 'De rien' },
    'Italian': { translation: 'Prego' },
    'German': { translation: 'Bitte' },
    'Japanese': { translation: 'どういたしまして', pronunciation: 'Dou itashimashite' },
    'Mandarin': { translation: '不客气', pronunciation: 'Bù kèqì' }
  },
  'Please': {
    'Spanish': { translation: 'Por favor' },
    'French': { translation: 'S\'il vous plaît' },
    'Italian': { translation: 'Per favore' },
    'German': { translation: 'Bitte' },
    'Japanese': { translation: 'お願いします', pronunciation: 'Onegaishimasu' },
    'Mandarin': { translation: '请', pronunciation: 'Qǐng' }
  },
  'Excuse me': {
    'Spanish': { translation: 'Disculpe' },
    'French': { translation: 'Excusez-moi' },
    'Italian': { translation: 'Scusi' },
    'German': { translation: 'Entschuldigung' },
    'Japanese': { translation: 'すみません', pronunciation: 'Sumimasen' },
    'Mandarin': { translation: '对不起', pronunciation: 'Duìbùqǐ' }
  },
  'I\'m sorry': {
    'Spanish': { translation: 'Lo siento' },
    'French': { translation: 'Je suis désolé' },
    'Italian': { translation: 'Mi dispiace' },
    'German': { translation: 'Es tut mir leid' },
    'Japanese': { translation: 'ごめんなさい', pronunciation: 'Gomen nasai' },
    'Mandarin': { translation: '对不起', pronunciation: 'Duìbùqǐ' }
  },

  // Beach
  'Where is the beach?': {
    'Spanish': { translation: '¿Dónde está la playa?' },
    'French': { translation: 'Où est la plage?' },
    'Italian': { translation: 'Dov\'è la spiaggia?' },
    'German': { translation: 'Wo ist der Strand?' },
    'Japanese': { translation: 'ビーチはどこですか？', pronunciation: 'Bīchi wa doko desu ka?' },
    'Mandarin': { translation: '海滩在哪里？', pronunciation: 'Hǎitān zài nǎlǐ?' }
  },
  'I need sunscreen': {
    'Spanish': { translation: 'Necesito protector solar' },
    'French': { translation: 'J\'ai besoin de crème solaire' },
    'Italian': { translation: 'Ho bisogno di protezione solare' },
    'German': { translation: 'Ich brauche Sonnencreme' },
    'Japanese': { translation: '日焼け止めが必要です', pronunciation: 'Hiyake dome ga hitsuyō desu' },
    'Mandarin': { translation: '我需要防晒霜', pronunciation: 'Wǒ xūyào fángshài shuāng' }
  },

  // Restaurant
  'Table for two, please': {
    'Spanish': { translation: 'Una mesa para dos, por favor' },
    'French': { translation: 'Une table pour deux, s\'il vous plaît' },
    'Italian': { translation: 'Un tavolo per due, per favore' },
    'German': { translation: 'Einen Tisch für zwei, bitte' },
    'Japanese': { translation: '二人用のテーブルをお願いします', pronunciation: 'Futari-yō no tēburu o onegaishimasu' },
    'Mandarin': { translation: '请给我们两个人的桌子', pronunciation: 'Qǐng gěi wǒmen liǎng gè rén de zhuōzi' }
  },
  'The menu, please': {
    'Spanish': { translation: 'El menú, por favor' },
    'French': { translation: 'Le menu, s\'il vous plaît' },
    'Italian': { translation: 'Il menu, per favore' },
    'German': { translation: 'Die Speisekarte, bitte' },
    'Japanese': { translation: 'メニューをお願いします', pronunciation: 'Menyū o onegaishimasu' },
    'Mandarin': { translation: '请给我菜单', pronunciation: 'Qǐng gěi wǒ càidān' }
  },

  // Emergency
  'Help!': {
    'Spanish': { translation: '¡Ayuda!' },
    'French': { translation: 'Au secours!' },
    'Italian': { translation: 'Aiuto!' },
    'German': { translation: 'Hilfe!' },
    'Japanese': { translation: '助けて！', pronunciation: 'Tasukete!' },
    'Mandarin': { translation: '救命！', pronunciation: 'Jiùmìng!' }
  },
  'I need a doctor': {
    'Spanish': { translation: 'Necesito un médico' },
    'French': { translation: 'J\'ai besoin d\'un médecin' },
    'Italian': { translation: 'Ho bisogno di un medico' },
    'German': { translation: 'Ich brauche einen Arzt' },
    'Japanese': { translation: '医者が必要です', pronunciation: 'Isha ga hitsuyō desu' },
    'Mandarin': { translation: '我需要医生', pronunciation: 'Wǒ xūyào yīshēng' }
  }
};

// Function to get a translation if it exists, or generate a fallback
export const getTranslation = (phrase: string, language: Language) => {
  if (translations[phrase] && translations[phrase][language]) {
    return translations[phrase][language];
  }
  
  // Fallback for phrases not in our translation database
  return {
    translation: `[${language} translation for "${phrase}"]`,
    pronunciation: language === 'Japanese' || language === 'Mandarin' ? `[Pronunciation for "${phrase}"]` : undefined
  };
}; 