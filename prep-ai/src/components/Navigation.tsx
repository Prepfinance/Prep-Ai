'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl">
        {/* Glassmorphism pill container */}
        <div className="rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg px-6 py-3 md:px-8 md:py-4">
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                <Image
                  src="/bubble-word.png"
                  alt="Prep AI logo"
                  width={56}
                  height={56}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Center: Nav Links (hidden on mobile) */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-center ml-8">
              <a href="#" className="text-xs font-semibold text-gray-900 tracking-widest hover:text-gray-600 transition">
                Individuals
              </a>
              <a href="#" className="text-xs font-semibold text-gray-900 tracking-widest hover:text-gray-600 transition">
                Couples
              </a>
              <a href="#" className="text-xs font-semibold text-gray-900 tracking-widest hover:text-gray-600 transition">
                Families
              </a>
            </div>

            {/* Right: Login + CTA Buttons */}
            <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
              <button className="hidden sm:block text-xs font-semibold text-gray-900 hover:text-gray-600 transition">
                LOG IN
              </button>
              <Link
                href="/dashboard"
                className="rounded-full bg-[#6FE3C1] text-gray-900 px-5 py-2 md:px-6 md:py-2.5 font-semibold text-xs md:text-sm hover:shadow-xl hover:shadow-[#6FE3C1]/40 hover:scale-105 transition-all"
              >
                GET STARTED →
              </Link>

              {/* Mobile hamburger menu */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex flex-col gap-1.5 ml-2"
              >
                <span className={`w-5 h-0.5 bg-gray-900 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-gray-900 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-gray-900 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-white/30 flex flex-col gap-3">
              <a href="#" className="text-xs font-semibold text-gray-900 tracking-widest hover:text-gray-600 transition">
                Individuals
              </a>
              <a href="#" className="text-xs font-semibold text-gray-900 tracking-widest hover:text-gray-600 transition">
                Couples
              </a>
              <a href="#" className="text-xs font-semibold text-gray-900 tracking-widest hover:text-gray-600 transition">
                Families
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
