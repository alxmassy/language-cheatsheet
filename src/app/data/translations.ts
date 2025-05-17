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
  'Is swimming allowed here?': {
    'Spanish': { translation: '¿Se permite nadar aquí?' },
    'French': { translation: 'La baignade est-elle autorisée ici?' },
    'Italian': { translation: 'Si può nuotare qui?' },
    'German': { translation: 'Ist Schwimmen hier erlaubt?' },
    'Japanese': { translation: 'ここで泳いでもいいですか？', pronunciation: 'Koko de oyoide mo ii desu ka?' },
    'Mandarin': { translation: '这里可以游泳吗？', pronunciation: 'Zhèlǐ kěyǐ yóuyǒng ma?' }
  },
  'Where can I rent beach chairs?': {
    'Spanish': { translation: '¿Dónde puedo alquilar sillas de playa?' },
    'French': { translation: 'Où puis-je louer des chaises de plage?' },
    'Italian': { translation: 'Dove posso noleggiare sedie da spiaggia?' },
    'German': { translation: 'Wo kann ich Strandliegen mieten?' },
    'Japanese': { translation: 'ビーチチェアはどこで借りられますか？', pronunciation: 'Bīchi chea wa doko de karirare masu ka?' },
    'Mandarin': { translation: '哪里可以租沙滩椅？', pronunciation: 'Nǎlǐ kěyǐ zū shātān yǐ?' }
  },
  'Is there a lifeguard?': {
    'Spanish': { translation: '¿Hay un salvavidas?' },
    'French': { translation: 'Y a-t-il un maître-nageur?' },
    'Italian': { translation: 'C\'è un bagnino?' },
    'German': { translation: 'Gibt es einen Rettungsschwimmer?' },
    'Japanese': { translation: 'ライフガードはいますか？', pronunciation: 'Raifu gādo wa imasu ka?' },
    'Mandarin': { translation: '有救生员吗？', pronunciation: 'Yǒu jiùshēngyuán ma?' }
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
  'I would like to order': {
    'Spanish': { translation: 'Me gustaría ordenar' },
    'French': { translation: 'Je voudrais commander' },
    'Italian': { translation: 'Vorrei ordinare' },
    'German': { translation: 'Ich möchte bestellen' },
    'Japanese': { translation: '注文したいです', pronunciation: 'Chūmon shitai desu' },
    'Mandarin': { translation: '我想点菜', pronunciation: 'Wǒ xiǎng diǎn cài' }
  },
  'The bill, please': {
    'Spanish': { translation: 'La cuenta, por favor' },
    'French': { translation: 'L\'addition, s\'il vous plaît' },
    'Italian': { translation: 'Il conto, per favore' },
    'German': { translation: 'Die Rechnung, bitte' },
    'Japanese': { translation: 'お会計をお願いします', pronunciation: 'O-kaikei o onegaishimasu' },
    'Mandarin': { translation: '请结账', pronunciation: 'Qǐng jiézhàng' }
  },
  'That was delicious': {
    'Spanish': { translation: 'Estaba delicioso' },
    'French': { translation: 'C\'était délicieux' },
    'Italian': { translation: 'Era delizioso' },
    'German': { translation: 'Das war köstlich' },
    'Japanese': { translation: 'とても美味しかったです', pronunciation: 'Totemo oishikatta desu' },
    'Mandarin': { translation: '很好吃', pronunciation: 'Hěn hǎochī' }
  },

  // Hotel
  'I have a reservation': {
    'Spanish': { translation: 'Tengo una reserva' },
    'French': { translation: 'J\'ai une réservation' },
    'Italian': { translation: 'Ho una prenotazione' },
    'German': { translation: 'Ich habe eine Reservierung' },
    'Japanese': { translation: '予約があります', pronunciation: 'Yoyaku ga arimasu' },
    'Mandarin': { translation: '我有预订', pronunciation: 'Wǒ yǒu yùdìng' }
  },
  'Where is my room?': {
    'Spanish': { translation: '¿Dónde está mi habitación?' },
    'French': { translation: 'Où est ma chambre?' },
    'Italian': { translation: 'Dov\'è la mia camera?' },
    'German': { translation: 'Wo ist mein Zimmer?' },
    'Japanese': { translation: '私の部屋はどこですか？', pronunciation: 'Watashi no heya wa doko desu ka?' },
    'Mandarin': { translation: '我的房间在哪里？', pronunciation: 'Wǒ de fángjiān zài nǎlǐ?' }
  },
  'Is breakfast included?': {
    'Spanish': { translation: '¿El desayuno está incluido?' },
    'French': { translation: 'Le petit-déjeuner est-il inclus?' },
    'Italian': { translation: 'La colazione è inclusa?' },
    'German': { translation: 'Ist das Frühstück inbegriffen?' },
    'Japanese': { translation: '朝食は含まれていますか？', pronunciation: 'Chōshoku wa fukumarete imasu ka?' },
    'Mandarin': { translation: '包含早餐吗？', pronunciation: 'Bāohán zǎocān ma?' }
  },
  'What time is checkout?': {
    'Spanish': { translation: '¿A qué hora es el check-out?' },
    'French': { translation: 'À quelle heure est le check-out?' },
    'Italian': { translation: 'A che ora è il check-out?' },
    'German': { translation: 'Wann ist der Check-out?' },
    'Japanese': { translation: 'チェックアウトは何時ですか？', pronunciation: 'Chekku auto wa nanji desu ka?' },
    'Mandarin': { translation: '几点退房？', pronunciation: 'Jǐ diǎn tuì fáng?' }
  },
  'Can I get room service?': {
    'Spanish': { translation: '¿Puedo pedir servicio a la habitación?' },
    'French': { translation: 'Puis-je avoir le service en chambre?' },
    'Italian': { translation: 'Posso avere il servizio in camera?' },
    'German': { translation: 'Kann ich Zimmerservice bekommen?' },
    'Japanese': { translation: 'ルームサービスを頼めますか？', pronunciation: 'Rūmu sābisu o tanomemasu ka?' },
    'Mandarin': { translation: '可以叫客房服务吗？', pronunciation: 'Kěyǐ jiào kèfáng fúwù ma?' }
  },

  // Transportation
  'Where is the bus stop?': {
    'Spanish': { translation: '¿Dónde está la parada de autobús?' },
    'French': { translation: 'Où est l\'arrêt de bus?' },
    'Italian': { translation: 'Dov\'è la fermata dell\'autobus?' },
    'German': { translation: 'Wo ist die Bushaltestelle?' },
    'Japanese': { translation: 'バス停はどこですか？', pronunciation: 'Basu tei wa doko desu ka?' },
    'Mandarin': { translation: '公交车站在哪里？', pronunciation: 'Gōngjiāochē zhàn zài nǎlǐ?' }
  },
  'How much is a taxi to...?': {
    'Spanish': { translation: '¿Cuánto cuesta un taxi hasta...?' },
    'French': { translation: 'Combien coûte un taxi jusqu\'à...?' },
    'Italian': { translation: 'Quanto costa un taxi fino a...?' },
    'German': { translation: 'Wie viel kostet ein Taxi nach...?' },
    'Japanese': { translation: '...までのタクシー料金はいくらですか？', pronunciation: '... made no takushī ryōkin wa ikura desu ka?' },
    'Mandarin': { translation: '到...的出租车多少钱？', pronunciation: 'Dào ... de chūzūchē duōshǎo qián?' }
  },
  'Can you call me a taxi?': {
    'Spanish': { translation: '¿Puede llamarme un taxi?' },
    'French': { translation: 'Pouvez-vous m\'appeler un taxi?' },
    'Italian': { translation: 'Può chiamarmi un taxi?' },
    'German': { translation: 'Können Sie mir ein Taxi rufen?' },
    'Japanese': { translation: 'タクシーを呼んでいただけますか？', pronunciation: 'Takushī o yonde itadakemasu ka?' },
    'Mandarin': { translation: '能帮我叫辆出租车吗？', pronunciation: 'Néng bāng wǒ jiào liàng chūzūchē ma?' }
  },
  'When does the train arrive?': {
    'Spanish': { translation: '¿Cuándo llega el tren?' },
    'French': { translation: 'Quand arrive le train?' },
    'Italian': { translation: 'Quando arriva il treno?' },
    'German': { translation: 'Wann kommt der Zug an?' },
    'Japanese': { translation: '電車はいつ到着しますか？', pronunciation: 'Densha wa itsu tōchaku shimasu ka?' },
    'Mandarin': { translation: '火车什么时候到？', pronunciation: 'Huǒchē shénme shíhòu dào?' }
  },
  'Is this the right way to...?': {
    'Spanish': { translation: '¿Es este el camino correcto a...?' },
    'French': { translation: 'Est-ce le bon chemin pour...?' },
    'Italian': { translation: 'È questa la strada giusta per...?' },
    'German': { translation: 'Ist das der richtige Weg nach...?' },
    'Japanese': { translation: '...への道はこれで合っていますか？', pronunciation: '... e no michi wa kore de atte imasu ka?' },
    'Mandarin': { translation: '这是去...的正确方向吗？', pronunciation: 'Zhè shì qù ... de zhèngquè fāngxiàng ma?' }
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