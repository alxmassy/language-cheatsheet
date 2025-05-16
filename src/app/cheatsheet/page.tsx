"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { travelTypes, languages, getLanguagePhrases, CategoryPhrases, Language, Phrase } from '../data/travelTypes';
import { FaArrowLeft, FaDownload, FaPrint, FaGlobeAmericas } from 'react-icons/fa';
import AudioPlayer from '../components/AudioPlayer';

export default function CheatsheetPage() {
  const searchParams = useSearchParams();
  const travelTypeId = searchParams.get('type') || 'vacation';
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('Spanish');
  const [phrases, setPhrases] = useState<CategoryPhrases[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const travelType = travelTypes.find(t => t.id === travelTypeId);

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const data = getLanguagePhrases(travelTypeId, selectedLanguage);
      setPhrases(data);
      setIsLoading(false);
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

  if (!travelType) {
    return (
      <div className="page-container min-h-screen flex items-center justify-center">
        <div className="glass-card p-8 max-w-md mx-auto animation-fade-in">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              {/* Logo placeholder - replace with your logo */}
              <FaGlobeAmericas className="text-indigo-400 text-6xl" />
              {/* When you have your logo, uncomment and use this instead:
              <Image 
                src="/logo.png" 
                alt="Travello Logo" 
                width={100} 
                height={100} 
                className="mx-auto"
              /> */}
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 animation-fade-in">
          <Link href="/" className="button-outline inline-flex items-center gap-2 self-start">
            <FaArrowLeft /> Back to home
          </Link>
          
          <div className="flex items-center justify-center md:justify-start">
            {/* Logo placeholder - replace with your logo */}
            <FaGlobeAmericas className="text-indigo-400 text-2xl mr-2" />
            {/* When you have your logo, uncomment and use this instead:
            <Image 
              src="/logo.png" 
              alt="Travello Logo" 
              width={30} 
              height={30} 
              className="mr-2"
            /> */}
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Travello
            </h1>
          </div>
          
          <div className="flex gap-3 self-start md:self-auto">
            <button
              onClick={handlePrint}
              className="button-outline"
            >
              <FaPrint className="inline mr-2" /> Print
            </button>
            <button
              onClick={handleDownload}
              className="button-secondary"
            >
              <FaDownload className="inline mr-2" /> Download
            </button>
          </div>
        </div>

        <div className="glass-card p-6 mb-8 animation-slide-up animation-delay-100">
          <h2 className="text-2xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            {travelType.name} Language Cheatsheet
          </h2>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">
            <div>
              <h3 className="font-medium text-lg">Select your language:</h3>
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
          <div className="flex justify-center items-center py-20 animation-fade-in">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-400"></div>
          </div>
        ) : (
          <div className="grid gap-8 mb-12">
            {phrases.map((categoryPhrase, index) => (
              <div 
                key={categoryPhrase.category} 
                className="category-card animation-fade-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="category-header">
                  <h3 className="text-xl font-medium">{categoryPhrase.category}</h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {categoryPhrase.phrases.map((phrase, index) => (
                      <div 
                        key={index} 
                        className="phrase-card"
                      >
                        <div className="text-gray-400 mb-1 text-sm">English</div>
                        <div className="font-medium mb-3 flex items-center">
                          {phrase.english}
                          <AudioPlayer text={phrase.english} language="en-US" />
                        </div>
                        <div className="text-gray-400 mb-1 text-sm">{selectedLanguage}</div>
                        <div className="font-medium text-indigo-400 flex items-center">
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
              </div>
            ))}
          </div>
        )}

        <footer className="py-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Travello | Your Language Travel Companion</p>
        </footer>
      </div>
    </div>
  );
} 