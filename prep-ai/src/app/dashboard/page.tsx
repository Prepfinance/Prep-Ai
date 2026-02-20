'use client';

import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#6FE3C1] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PA</span>
            </div>
            <span className="font-semibold text-gray-900">Prep AI</span>
          </Link>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to Prep AI! The full dashboard experience is coming soon.
          </p>
          <p className="text-gray-600 mb-8">
            This is a placeholder page. We&rsquo;re building out the complete dashboard with:
          </p>
          <ul className="text-left max-w-md mx-auto space-y-2 text-gray-600 mb-8">
            <li className="flex items-center gap-2">
              <span className="text-[#6FE3C1]">✓</span>
              <span>Real-time financial overview</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#6FE3C1]">✓</span>
              <span>Budget management tools</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#6FE3C1]">✓</span>
              <span>Goal tracking and progress</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#6FE3C1]">✓</span>
              <span>AI-powered insights and recommendations</span>
            </li>
          </ul>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-[#6FE3C1] text-gray-900 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#6FE3C1]/30 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
