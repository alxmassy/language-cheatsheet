"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { travelTypes } from './data/travelTypes';
import { FaUmbrellaBeach, FaBriefcase, FaHiking, FaCity, FaUtensils, FaArrowRight, FaGlobeAmericas, FaSignInAlt } from 'react-icons/fa';

export default function Home() {
  const [showTravelTypes, setShowTravelTypes] = useState(false);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const travelTypesRef = useRef<HTMLDivElement>(null);

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
    <div className="relative">
      {/* Hero Section - Full Screen */}
      <div className="h-screen flex flex-col relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black z-0 animate-gradient-background"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent blur-xl z-0 animate-pulse-slow"></div>
          <div className="noise-bg absolute inset-0 z-0 opacity-10"></div>
        </div>

        {/* Top navigation with buttons */}
        <div className="container mx-auto px-4 py-6 relative z-20 flex justify-end">
          <div className="flex gap-3">
            <button 
              onClick={() => {}} 
              className="button-outline"
            >
              <FaSignInAlt className="inline mr-2" /> Sign In
            </button>
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
            {/* Logo placeholder */}
            <div className="mb-6">
              <FaGlobeAmericas className="text-indigo-400 text-8xl" />
              {/* When you have your logo, uncomment and use this instead:
              <Image 
                src="/logo.png" 
                alt="Travello Logo" 
                width={150} 
                height={150} 
                className="mx-auto"
              /> */}
            </div>
            <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
              Travello
            </h1>
            
            {/* Smaller, bold tagline with faded white color */}
            <p className="text-lg italic font-bold text-gray-400 max-w-xl text-center mb-32">
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
          <div className="header-section">
            <h2 className="section-title">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Create your perfect travel language companion in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="glass-card p-8 card-hover animation-fade-in animation-delay-100">
              <div className="text-indigo-400 text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-medium mb-3">Select Your Travel Type</h3>
              <p className="text-gray-400">Choose the type of travel that best matches your upcoming adventure</p>
            </div>
            <div className="glass-card p-8 card-hover animation-fade-in animation-delay-200">
              <div className="text-indigo-400 text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-medium mb-3">Choose a Language</h3>
              <p className="text-gray-400">Select from our range of available languages for your destination</p>
            </div>
            <div className="glass-card p-8 card-hover animation-fade-in animation-delay-300">
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
