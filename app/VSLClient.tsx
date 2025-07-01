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
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[500px]">
      {/* Left: Copy */}
      <div className="order-2 lg:order-1 space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          Are You Tired of Constant Bathroom Trips and 
          <span className="block mt-2">Sleepless Nights?</span>
          <span className="text-blue-700 block mt-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Discover the Natural Breakthrough for Prostate Health That Could Change Everything.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl">
          Finally, a scientifically-backed solution that helps men over 40 reclaim their vitality, enjoy uninterrupted sleep, and support optimal prostate function naturally.
        </p>
        
        <div className="pt-4">
          <button
            onClick={handleCTAClick}
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 md:px-10 rounded-full text-lg md:text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            See Today's Best Price
          </button>
          
          {/* Trust indicators */}
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>180-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Fast US Shipping</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right: Image */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-20 scale-110"></div>
          <Image
            src="/images/man worried about prostate.png"
            alt="Concerned middle-aged man"
            width={450}
            height={550}
            className="relative rounded-2xl shadow-2xl object-cover max-w-full h-auto"
            priority
          />
          {/* Optional: Add a subtle overlay or badge */}
          <div className="absolute -bottom-4 -right-4 bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            Men 40+
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
              YES! Show Me Today’s Best Price
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
