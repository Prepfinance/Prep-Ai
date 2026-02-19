'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-transparent bg-[var(--mint-bg)] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#6FE3C1] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PA</span>
              </div>
              <span className="font-semibold text-gray-900">Prep AI</span>
            </div>
            <p className="text-sm text-gray-600">
              Modern financial preparation tools powered by AI.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-gray-900 hover:text-gray-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-gray-900 hover:text-gray-900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-900 hover:text-gray-900">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-900 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-900 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-900 hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-900 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-900 hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-900 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-transparent pt-8">
          <p className="text-sm text-gray-900 text-center">
            &copy; 2026 Prep AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
