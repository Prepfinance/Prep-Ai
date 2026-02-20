'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-300/30 bg-white/50 backdrop-blur-sm py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Copyright */}
          <p className="text-sm text-gray-800">
            &copy; {currentYear} Prep AI. All rights reserved.
          </p>

          {/* Right: Links */}
          <div className="flex gap-8">
            <a href="#" className="text-sm text-gray-800 hover:text-gray-600 transition">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-gray-600 transition">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-gray-600 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
