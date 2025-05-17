"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { travelTypes, languages, getLanguagePhrases, CategoryPhrases, Language, Phrase } from '../data/travelTypes';
import { FaArrowLeft, FaDownload, FaPrint } from 'react-icons/fa';
import AudioPlayer from '../components/AudioPlayer';

export default function CheatsheetPage() {
  const searchParams = useSearchParams();
  const travelTypeId = searchParams.get('type') || 'vacation';
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('Spanish');
  const [phrases, setPhrases] = useState<CategoryPhrases[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showTranslateModal, setShowTranslateModal] = useState(false);
  const [translateInput, setTranslateInput] = useState('');
  const [translateResult, setTranslateResult] = useState('');
  const [translateTarget, setTranslateTarget] = useState<Language>('Spanish');
  const [isTranslating, setIsTranslating] = useState(false);

  // Initial page load animation
  useEffect(() => {
    setShowContent(true);
  }, []);

  const travelType = travelTypes.find(t => t.id === travelTypeId);

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const data = getLanguagePhrases(travelTypeId, selectedLanguage);
      setPhrases(data);
      setIsLoading(false);
      // Reset selected category when language changes
      setSelectedCategory(null);
    }, 500);
  }, [travelTypeId, selectedLanguage]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Creating PDF logic would go here in a real app
    // For now, we'll just alert
    alert('In a complete app, this would download a PDF of your cheatsheet');
  };

  // Get appropriate text to play for audio based on language
  const getAudioText = (phrase: Phrase, language: Language): string => {
    // For languages that use Latin alphabet, use the translation
    if (['Spanish', 'French', 'Italian', 'German'].includes(language)) {
      return phrase.translation;
    }
    
    // For languages with different scripts, use pronunciation if available
    if (phrase.pronunciation && ['Japanese', 'Mandarin'].includes(language)) {
      return phrase.pronunciation;
    }
    
    // Default fallback to translation
    return phrase.translation;
  };

  // Google Translate API call (replace with your API key and endpoint)
  const handleTranslate = async () => {
    setIsTranslating(true);
    setTranslateResult('');
    try {
      // Example using Google Translate API v2 (replace YOUR_API_KEY)
      const res = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            q: translateInput,
            target: getGoogleLangCode(translateTarget),
          }),
        }
      );
      const data = await res.json();
      setTranslateResult(data.data.translations[0].translatedText);
    } catch (err) {
      setTranslateResult('Translation failed.');
    }
    setIsTranslating(false);
  };

  // Helper to map Language to Google Translate codes
  function getGoogleLangCode(lang: Language) {
    switch (lang) {
      case 'Spanish': return 'es';
      case 'French': return 'fr';
      case 'Italian': return 'it';
      case 'German': return 'de';
      case 'Japanese': return 'ja';
      case 'Mandarin': return 'zh-CN';
      default: return 'en';
    }
  }

  if (!travelType) {
    return (
      <div className="page-container min-h-screen flex items-center justify-center">
        <div className="glass-card p-8 max-w-md mx-auto animation-fade-in">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              {/* Logo placeholder - replace with your logo */}
            </div>
            <h1 className="text-2xl font-bold mb-6">Travel Type Not Found</h1>
            <Link href="/" className="button-primary inline-flex items-center gap-2">
              <FaArrowLeft /> Go back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black z-0"></div>
      <div className="noise-bg absolute inset-0 z-0 opacity-10"></div>
      
      <div className="page-container">
        <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <Link href="/" className="button-outline inline-flex items-center gap-2 self-start">
            <FaArrowLeft /> Back to home
          </Link>
          
          <div className="flex items-center justify-center md:justify-start">
            <h1 className="text-3xl font-bold text-white">
              Travello
            </h1>
          </div>
          
          <div className="flex gap-3 self-start md:self-auto">
            <button
              onClick={() => {
                const langMap: Record<Language, string> = {
                  'Spanish': 'es',
                  'French': 'fr',
                  'Italian': 'it',
                  'German': 'de',
                  'Japanese': 'ja',
                  'Mandarin': 'zh-CN',
                };
                const target = langMap[selectedLanguage] || 'es';
                window.open(`https://translate.google.com/?sl=en&tl=${target}`, '_blank');
              }}
              className="button-outline"
            >
              🌐 Translate on your own
            </button>
            <button
              onClick={handleDownload}
              className="button-secondary"
            >
              <FaDownload className="inline mr-2" /> Download
            </button>
          </div>
        </div>

        <div className={`glass-card p-6 mb-8 transition-all duration-700 delay-100 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            {travelType.name} Language Cheatsheet
          </h2>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">
            <div>
              <h3 className="font-medium text-lg text-white">Select your language:</h3>
              <p className="text-gray-400">Customize your {travelType.name.toLowerCase()} phrases</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`button-language ${
                    selectedLanguage === lang 
                      ? 'active'
                      : 'inactive'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className={`flex justify-center items-center py-20 transition-all duration-700 delay-200 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-400"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Category Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              {phrases.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setSelectedCategory(category.category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>

            {/* Selected Category Content */}
            {selectedCategory && (
              <div className={`glass-card p-6 transition-all duration-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                <h3 className="text-xl font-semibold mb-6 text-indigo-400">
                  {selectedCategory}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {phrases
                    .find(cat => cat.category === selectedCategory)
                    ?.phrases.map((phrase, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="text-gray-400 mb-1 text-sm">English</div>
                        <div className="font-medium mb-3 flex items-center text-white">
                          {phrase.english}
                          <AudioPlayer text={phrase.english} language="en-US" />
                        </div>
                        <div className="text-gray-400 mb-1 text-sm">{selectedLanguage}</div>
                        <div className="font-medium text-white flex items-center">
                          {phrase.translation}
                          <AudioPlayer 
                            text={getAudioText(phrase, selectedLanguage)} 
                            language={selectedLanguage} 
                          />
                        </div>
                        {phrase.pronunciation && (
                          <>
                            <div className="text-gray-400 mb-1 text-sm mt-2">Pronunciation</div>
                            <div className="text-gray-300 italic">{phrase.pronunciation}</div>
                          </>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Translate Modal */}
        {showTranslateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
                onClick={() => setShowTranslateModal(false)}
              >
                ×
              </button>
              <h2 className="text-lg font-bold mb-4 text-indigo-700">Translate</h2>
              <input
                className="w-full border rounded px-3 py-2 mb-3"
                value={translateInput}
                onChange={e => setTranslateInput(e.target.value)}
                placeholder="Enter text to translate"
              />
              <select
                className="w-full border rounded px-3 py-2 mb-3"
                value={translateTarget}
                onChange={e => setTranslateTarget(e.target.value as Language)}
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
              <button
                className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700 transition mb-3"
                onClick={handleTranslate}
                disabled={isTranslating}
              >
                {isTranslating ? 'Translating...' : 'Translate'}
              </button>
              {translateResult && (
                <div className="mt-2 p-3 bg-indigo-50 rounded text-indigo-800">
                  {translateResult}
                </div>
              )}
            </div>
          </div>
        )}

        <footer className={`py-8 text-center text-gray-500 text-sm transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '800ms'}}>
          <p>© {new Date().getFullYear()} Travello | Your Language Travel Companion</p>
        </footer>
      </div>
    </div>
  );
} 