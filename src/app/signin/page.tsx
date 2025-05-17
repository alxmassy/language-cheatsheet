"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaEnvelope, FaLock } from 'react-icons/fa';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPrevMousePosition(mousePosition);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mousePosition]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative">
      {/* Mouse follower circle */}
      <div 
        className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
        }}
      >
        <div className="w-8 h-8 border-2 border-white rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top navigation */}
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors">
            <FaArrowLeft className="mr-2" /> Back to Home
          </Link>
        </div>

        {/* Sign In Form */}
        <div className="flex-grow flex items-center justify-center px-4">
          <div className="w-full max-w-sm">
            {/* Title */}
            <div className="text-center mb-6">
              <h1 className="text-3xl mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Welcome Back
              </h1>
              <p className="text-gray-400 text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Sign in to continue your journey
              </p>
            </div>

            {/* Form */}
            <div className="glass-card p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 bg-white/5 border-white/10 rounded focus:ring-indigo-500"
                    />
                    <label className="ml-2 block text-sm text-gray-300">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full button-primary py-2.5"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-400">
                  Don't have an account?{' '}
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 