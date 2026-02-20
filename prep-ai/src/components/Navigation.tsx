'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-6xl">
        {/* Glassmorphism pill container */}
        <div className="rounded-full bg-white/70 backdrop-blur-md border border-white/40 shadow-md px-6 py-3 md:px-8 md:py-3">
          <div className="flex items-center justify-between">
            {/* Left: Logo + Brand */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src="/bubble-word.png"
                  alt="Prep AI logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="hidden sm:inline font-semibold text-gray-900 text-sm">Prep AI</span>
            </Link>

            {/* Center: Nav Links (hidden on mobile) */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-gray-800 hover:text-gray-600 transition">
                Features
              </a>
              <a href="#pricing" className="text-sm font-medium text-gray-800 hover:text-gray-600 transition">
                Pricing
              </a>
              <a href="#about" className="text-sm font-medium text-gray-800 hover:text-gray-600 transition">
                About
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-800 hover:text-gray-600 transition">
                Contact
              </a>
            </div>

            {/* Right: Sign In + CTA Button */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <button className="hidden sm:block text-sm font-medium text-gray-800 hover:text-gray-600 transition">
                Sign In
              </button>
              <button className="rounded-full bg-[#6FE3C1] text-gray-900 px-6 py-2 font-semibold text-sm hover:shadow-lg hover:shadow-[#6FE3C1]/30 hover:scale-105 transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
