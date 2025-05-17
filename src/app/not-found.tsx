import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black z-0"></div>
      <div className="noise-bg absolute inset-0 z-0 opacity-10"></div>
      
      <div className="page-container min-h-screen flex items-center justify-center">
        <div className="glass-card p-8 max-w-md mx-auto animation-fade-in">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
            <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Page Not Found</h2>
            <p className="text-gray-300 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/" className="button-primary inline-flex items-center gap-2">
              <FaArrowLeft /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 