"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { travelTypes } from './data/travelTypes';
import { FaUmbrellaBeach, FaBriefcase, FaHiking, FaCity, FaUtensils, FaArrowRight, FaGlobeAmericas, FaSignInAlt, FaPlane } from 'react-icons/fa';

// Get the base path for assets
const getAssetPath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/language-cheatsheet' : '';
  return `${basePath}${path}`;
};

export default function Home() {
  const [showTravelTypes, setShowTravelTypes] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 });
  const [showContent, setShowContent] = useState(false);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const travelTypesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowContent(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPrevMousePosition(mousePosition);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mousePosition]);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-drop-down');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToTravelTypes = () => {
    setShowTravelTypes(true);
    setTimeout(() => {
      travelTypesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'umbrella-beach':
        return <FaUmbrellaBeach className="w-8 h-8" />;
      case 'briefcase':
        return <FaBriefcase className="w-8 h-8" />;
      case 'hiking':
        return <FaHiking className="w-8 h-8" />;
      case 'city':
        return <FaCity className="w-8 h-8" />;
      case 'utensils':
        return <FaUtensils className="w-8 h-8" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative cursor-none">
      {/* Mouse follower airplane */}
      <div 
        className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
        }}
      >
        <FaPlane className="w-8 h-8 text-white transform -rotate-45" />
      </div>

      {/* Hero Section - Full Screen */}
      <div className="h-screen flex flex-col relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={getAssetPath('/video-background.mp4')} type="video/mp4" />
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-black/80 z-0"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent blur-xl z-0 animate-pulse-slow"></div>
          <div className="noise-bg absolute inset-0 z-0 opacity-10"></div>
        </div>

        {/* Top navigation with buttons */}
        <div className="container mx-auto px-4 py-6 relative z-20 flex justify-between items-center">
          {/* Logo */}
          <div className="animation-drop-down">
            <Image 
              src={getAssetPath('/logo.png')}
              alt="Travello Logo" 
              width={100} 
              height={100} 
              className="object-cover w-[100px] h-[100px]"
              priority
            />
          </div>
          <div className="flex gap-3">
            <Link 
              href="/signin" 
              className="button-outline"
            >
              <FaSignInAlt className="inline mr-2" /> Sign In
            </Link>
            <button 
              onClick={scrollToTravelTypes} 
              className="button-primary"
            >
              Get Started <FaArrowRight className="inline ml-2" />
            </button>
          </div>
        </div>
        
        {/* Central content */}
        <div className="container mx-auto px-4 relative z-20 flex-grow flex flex-col">
          {/* Logo and name */}
          <div className="flex-grow flex flex-col items-center justify-center">
            <h1 className="text-9xl font-bold text-white mb-2 animation-drop-down animation-delay-100" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Travello
            </h1>
            
            {/* Smaller, bold tagline with faded white color */}
            <p className="text-base font-light tracking-wide text-gray-300 max-w-xl text-center mb-32 animation-drop-down animation-delay-200" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Your personal language companion<br />
              for hassle-free travel
            </p>
          </div>
          
          {/* Centered Learn More button */}
          <div className="flex justify-center mb-20">
            <button 
              onClick={() => howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors duration-300 flex flex-col items-center animation-fade-in animation-delay-100"
            >
              <span className="mb-2 text-lg">Learn more</span>
              <span className="animate-bounce block">↓</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* How It Works Section */}
      <div 
        ref={howItWorksRef} 
        className="min-h-screen flex items-center py-24 relative bg-gray-900"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="header-section scroll-animate">
            <h2 className="section-title">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Create your perfect travel language companion in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="glass-card p-8 card-hover scroll-animate">
              <div className="text-indigo-400 text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-medium mb-3">Select Your Travel Type</h3>
              <p className="text-gray-400">Choose the type of travel that best matches your upcoming adventure</p>
            </div>
            <div className="glass-card p-8 card-hover scroll-animate">
              <div className="text-indigo-400 text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-medium mb-3">Choose a Language</h3>
              <p className="text-gray-400">Select from our range of available languages for your destination</p>
            </div>
            <div className="glass-card p-8 card-hover scroll-animate">
              <div className="text-indigo-400 text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-medium mb-3">Get Your Cheatsheet</h3>
              <p className="text-gray-400">Instantly receive a customized cheatsheet with relevant phrases</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button 
              onClick={scrollToTravelTypes} 
              className="button-primary"
            >
              Get Started <FaArrowRight className="inline ml-2" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Travel Types Section - Only shown after clicking Get Started */}
      {showTravelTypes && (
        <div 
          ref={travelTypesRef}
          className="min-h-screen flex items-center py-24 relative bg-black"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0"></div>
          <div className="noise-bg absolute inset-0 z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="header-section">
              <h2 className="section-title">Choose Your Travel Type</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-16">
                Select the type of travel that best matches your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animation-fade-in">
              {travelTypes.map((type, index) => (
                <Link href={`/cheatsheet?type=${type.id}`} key={type.id} className="block">
                  <div className={`glass-card p-6 card-hover animation-fade-in`} style={{animationDelay: `${index * 100}ms`}}>
                    <div className="flex items-center mb-4">
                      <div className="bg-indigo-900/50 p-4 rounded-full text-indigo-400 mr-4">
                        {getIcon(type.icon)}
                      </div>
                      <h3 className="text-xl font-medium">{type.name}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{type.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {type.categories.slice(0, 3).map((category) => (
                        <span key={category} className="bg-indigo-900/40 text-indigo-300 text-sm px-2 py-1 rounded">
                          {category}
                        </span>
                      ))}
                      {type.categories.length > 3 && (
                        <span className="bg-indigo-900/40 text-indigo-300 text-sm px-2 py-1 rounded">
                          +{type.categories.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <footer className="py-8 text-center text-gray-500 text-sm bg-black relative z-10">
        <p>© {new Date().getFullYear()} Travello | Your Language Travel Companion</p>
      </footer>
    </div>
  );
}
