import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0fdf9] to-[#e8faf6] text-gray-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Hero Image - Mascot */}
            <div className="relative w-full max-w-md h-64 sm:h-80 md:h-96">
              <Image
                src="/bubble-mascot.png"
                alt="Prep AI Bubble Mascot"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-3xl">
              Simplify Your Financial Future
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl leading-relaxed">
              Prep is your AI-powered personal finance assistant &mdash; helping you plan, prepare, and build wealth with clarity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="rounded-full bg-[#6FE3C1] text-gray-900 px-8 py-3 font-semibold text-base hover:shadow-lg hover:shadow-[#6FE3C1]/30 hover:scale-105 transition-all">
                Get Started
              </button>
              <button className="rounded-full border-2 border-gray-800 text-gray-900 px-8 py-3 font-semibold text-base hover:bg-gray-100 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Powerful Features for Your Future
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/70 backdrop-blur rounded-2xl p-8 border border-white/80 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-center w-12 h-12 bg-[#6FE3C1]/20 rounded-xl mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Budget Analysis</h3>
              <p className="text-gray-700">
                AI-powered insights into your spending patterns and personalized recommendations to optimize your budget.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/70 backdrop-blur rounded-2xl p-8 border border-white/80 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-center w-12 h-12 bg-[#6FE3C1]/20 rounded-xl mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Goal Planning</h3>
              <p className="text-gray-700">
                Set and track financial goals with AI assistance. Get personalized strategies to reach your milestones faster.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/70 backdrop-blur rounded-2xl p-8 border border-white/80 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-center w-12 h-12 bg-[#6FE3C1]/20 rounded-xl mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Bank-Level Security</h3>
              <p className="text-gray-700">
                Your data is encrypted and protected with enterprise-grade security standards. Peace of mind guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Circle Section */}
      <section id="founding" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur rounded-3xl p-12 border border-white/80 shadow-md">
            {/* Eyebrow */}
            <div className="text-center mb-6">
              <span className="inline-block text-xs font-bold tracking-widest text-[#6FE3C1] bg-[#6FE3C1]/10 px-4 py-2 rounded-full">
                EARLY ACCESS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Join the Prep Founding Circle
            </h2>

            {/* Body */}
            <p className="text-center text-lg text-gray-700 mb-8 leading-relaxed">
              Early access for the first wave of members building wealth with AI. Limited charter spots available.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mb-6">
              <button className="rounded-full bg-[#6FE3C1] text-gray-900 px-10 py-3 font-semibold text-lg hover:shadow-lg hover:shadow-[#6FE3C1]/30 hover:scale-105 transition-all">
                Become a Founding Member
              </button>
            </div>

            {/* Note */}
            <p className="text-center text-sm text-gray-600">
              Limited charter spots. Once they&rsquo;re gone, enrollment closes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
