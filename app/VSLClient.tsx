"use client";

import Image from 'next/image'

const AFFILIATE_URL = 'https://89be9ug1o83v3s3hwa5f1dbuct.hop.clickbank.net/?&traffic_source=pros_review'

function handleCTAClick(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault()
  window.location.href = AFFILIATE_URL
}

export default function VSLClient() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div className="space-y-8">
              {/* Badge/Indicator */}
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 text-blue-300 text-sm font-medium">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Scientifically Proven Solution
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Are You Tired of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Constant Bathroom Trips
                </span>
                <span className="block text-white">
                  and Sleepless Nights?
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl font-light">
                  Discover the natural breakthrough for prostate health that could change everything.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  Finally, a scientifically-backed solution that helps men over 40 reclaim their vitality, enjoy uninterrupted sleep, and support optimal prostate function naturally.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleCTAClick}
                  className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-2xl text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span className="relative z-10">See Today's Best Price</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>180-Day Money-Back Guarantee</span>
                </div>
              </div>
              
              {/* Stats or Social Proof */}
              <div className="flex items-center gap-8 pt-8 border-t border-gray-700/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10,000+</div>
                  <div className="text-sm text-gray-400">Satisfied Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">180 Days</div>
                  <div className="text-sm text-gray-400">Money-Back Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9★</div>
                  <div className="text-sm text-gray-400">Average Rating</div>
                </div>
              </div>
            </div>
            
            {/* Right: Image */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl scale-110"></div>
                
                {/* Main Image - Larger and No Border */}
                <div className="relative">
                  <Image
                    src="/images/man worried about prostate.png"
                    alt="Concerned middle-aged man"
                    width={600}
                    height={700}
                    className="relative object-cover max-w-full h-auto drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'
                    }}
                    priority
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl animate-pulse">
                    ✓ Natural Solution
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-sm">
                    <div className="text-2xl font-bold">40+</div>
                    <div className="text-sm opacity-90">Men Helped</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VSL-STYLE STORYTELLING */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        {/* The Hook */}
        <div className="mb-8">
          <p className="text-xl font-semibold mb-2">If you're a man over 40, you know the feeling.</p>
          <p>
            That constant urge to go, the interrupted sleep, the nagging discomfort that makes you feel years older than you are. You've tried everything – endless remedies, dietary changes, maybe even expensive treatments – but nothing seems to work. You're not alone. Millions of men are silently suffering, and the medical community often offers solutions that are invasive, come with side effects, or simply don't address the root cause.
          </p>
        </div>
        {/* The Story */}
        <div className="mb-8">
          <p>
            For years, I was one of those men. My quality of life diminished, my sleep shattered, my confidence eroded. I was desperate for a real solution—something natural, effective, and without scary side effects.
          </p>
          <p className="mt-2">
            That's when I embarked on a mission to uncover the truth about prostate health. After countless hours of research, consulting with leading scientists, and testing various compounds, I discovered a powerful combination of natural ingredients that changed everything for me—and for thousands of men just like you.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <img src="/home-assets/images/happy-men.jpg" alt="Happy ProstaVive customers" className="w-20 h-20 rounded-full object-cover" />
            <span className="text-blue-700 font-semibold">Thousands of Satisfied Customers</span>
          </div>
        </div>
        {/* The Solution */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">The Natural Solution: ProstaVive</h2>
          <p>
            What I discovered was a synergy of nature's most potent prostate-supporting ingredients. Nettle Root helps reduce prostate size and improve urinary flow. Cordyceps, a powerful adaptogen, supports male wellness and energy. Panax Ginseng boosts vitality. Each ingredient in ProstaVive is carefully selected and backed by rigorous scientific research, working together to address the core issues—not just mask the symptoms.
          </p>
          <ul className="list-disc list-inside mt-3 mb-3">
            <li><strong>Boron</strong> – Optimizes detoxification and inflammation response</li>
            <li><strong>Tongkat Ali</strong> – Boosts sexual function, fertility, and stress support</li>
            <li><strong>Ashwagandha</strong> – Promotes muscle growth, fat loss, and sexual performance</li>
            <li><strong>Fenugreek</strong> – Supports prostate function, libido, and mood</li>
            <li><strong>Panax Ginseng</strong> – Enhances blood flow, energy, and immune function</li>
            <li><strong>Maca Root</strong> – Increases sex drive, energy, and sperm quality</li>
            <li><strong>Artichoke</strong> – Boosts oxytocin and heart health</li>
            <li><strong>Nettle Root</strong> – Supports hormone balance and urinary tract health</li>
            <li><strong>Zinc, Magnesium, Vitamin D</strong> – Essential minerals for prostate, sleep, and vitality</li>
          </ul>
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <strong>Key Benefits:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>Maintain healthy prostate size</li>
              <li>Improve urinary tract function</li>
              <li>Boost overall energy and vitality</li>
              <li>Wake up refreshed, enjoy your day without discomfort</li>
              <li>Promote deep, satisfying sleep</li>
              <li>Support blood flow and nitric oxide levels for overall wellness</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OFFER & VALUE STACKING */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Special Offer: Get ProstaVive + 2 FREE Bonuses</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
            <img src="/home-assets/images/product.png" alt="ProstaVive Bottle" className="w-40 h-auto mx-auto" />
            <div>
              <p className="mb-2">
                For a limited time, when you secure your supply of ProstaVive today, you'll receive:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Prostate Health Smoothie Recipes</strong> <span className="text-gray-600">(Value: $37)</span> – A digital guide to supercharge your prostate health.
                </li>
                <li>
                  <strong>Healthy Sex Drive Plan</strong> – Tips and tricks to boost endurance, desire, and performance.
                </li>
              </ul>
              <p className="mt-2 font-semibold">
                All backed by our <span className="text-blue-700">180-Day Money-Back Guarantee</span>.
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={handleCTAClick}
              className="inline-block bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:bg-green-700 transition cursor-pointer"
            >
              YES! Show Me Today's Best Price
            </button>
            <p className="mt-2 text-sm text-gray-600">
              Fast US shipping (3–5 business days) • 180-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* URGENCY & SCARCITY */}
      <section className="max-w-2xl mx-auto py-8 px-4 text-center">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
          <strong>Hurry:</strong> This special offer, including both free bonuses, is only available while supplies last. Once we're sold out, we cannot guarantee this pricing or these bonuses will be available again.
        </div>
        <p className="text-lg">
          How much longer will you suffer through restless nights and constant worry? Take control now—your comfort and confidence are just a click away.
        </p>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-8 text-center" id="order">
        <button
          onClick={handleCTAClick}
          className="inline-block bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:bg-blue-800 transition cursor-pointer"
        >
          YES! I Want to Reclaim My Prostate Health & Vitality!
        </button>
        <p className="mt-2 text-sm text-gray-600">
          Secure checkout • Fast shipping • 180-day satisfaction guarantee
        </p>
      </section>

      {/* CONTACT / SUPPORT */}
      <section className="max-w-2xl mx-auto py-8 px-4 text-center text-sm text-gray-500">
        <p>
          Questions? Email <a href="mailto:support@prostavive.org" className="underline">support@prostavive.org</a> or call (863) 591-4284.
        </p>
      </section>
    </>
  )
}
