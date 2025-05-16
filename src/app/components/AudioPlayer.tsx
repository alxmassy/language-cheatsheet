'use client';

import { useState, useEffect } from 'react';
import { FaVolumeUp } from 'react-icons/fa';

interface AudioPlayerProps {
  text: string;
  language: string;
}

const languageVoiceMap: Record<string, string> = {
  'Spanish': 'es-ES',
  'French': 'fr-FR',
  'Italian': 'it-IT',
  'German': 'de-DE',
  'Japanese': 'ja-JP',
  'Mandarin': 'zh-CN',
  'en-US': 'en-US'
};

export default function AudioPlayer({ text, language }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Check if speech synthesis is supported in this browser
    setIsSupported(typeof window !== 'undefined' && 'speechSynthesis' in window);
  }, []);

  const playAudio = () => {
    if (!isSupported) {
      alert('Text-to-speech is not supported in your browser.');
      return;
    }

    try {
      setIsPlaying(true);
      
      // Stop any currently playing audio
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set the language based on the provided language prop
      const langCode = languageVoiceMap[language] || 'en-US';
      utterance.lang = langCode;
      
      // Event handlers
      utterance.onend = () => {
        setIsPlaying(false);
      };
      
      utterance.onerror = (event) => {
        console.error('SpeechSynthesis error', event);
        
        // If it fails with the specific language, try with English as fallback
        if (langCode !== 'en-US' && text) {
          try {
            console.log('Attempting fallback to English');
            const fallbackUtterance = new SpeechSynthesisUtterance(text);
            fallbackUtterance.lang = 'en-US';
            fallbackUtterance.onend = () => setIsPlaying(false);
            fallbackUtterance.onerror = () => setIsPlaying(false);
            window.speechSynthesis.speak(fallbackUtterance);
          } catch (err) {
            console.error('Fallback speech synthesis failed', err);
            setIsPlaying(false);
          }
        } else {
          setIsPlaying(false);
        }
      };
      
      // Play the audio
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error('Error during speech synthesis', error);
      setIsPlaying(false);
      alert('An error occurred while trying to play the audio.');
    }
  };

  if (!isSupported) {
    return null; // Don't render the button if speech synthesis isn't supported
  }

  return (
    <button
      onClick={playAudio}
      disabled={isPlaying}
      className={`audio-button ${
        isPlaying 
          ? 'audio-button-playing' 
          : 'audio-button-active'
      }`}
      title={`Listen to pronunciation${isPlaying ? ' (playing...)' : ''}`}
    >
      <FaVolumeUp className="w-4 h-4" />
    </button>
  );
} 