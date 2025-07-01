import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'ProstaVive Reviews - Real Customer Experiences',
  description: 'Read real ProstaVive reviews from customers who have experienced the benefits. Discover how ProstaVive has helped improve prostate health, urinary flow, energy, and confidence.',
}

// Affiliate link for all CTA buttons
const AFFILIATE_URL = 'https://89be9ug1o83v3s3hwa5f1dbuct.hop.clickbank.net/?&traffic_source=pros_review'

// JSON-LD Schemas
const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ProstaVive",
  "url": "https://www.prostavive.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.prostavive.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ProstaVive",
  "url": "https://www.prostavive.com",
  "logo": "https://www.prostavive.com/images/logo.png",
  "sameAs": [
    "https://facebook.com/prostavive",
    "https://twitter.com/prostavive"
  ]
}

// CTA redirect handler
function handleCTAClick(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault()
  window.location.href = AFFILIATE_URL
}

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* SCHEMA.ORG JSON-LD SCRIPTS */}
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* HERO SECTION */}
      <section className="py-12 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Tired of Constant Bathroom Trips and Sleepless Nights?
          <br />
          <span className="text-blue-700">Discover the Natural Prostate Breakthrough Backed by Science</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Thousands of men are reclaiming restful sleep, strong flow, and renewed confidence with ProstaVive’s unique blend of powerful, all-natural nutrients.
        </p>
        <button
          onClick={handleCTAClick}
          className="inline-block bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-blue-800 transition cursor-pointer"
        >
          See Today’s Best Price
        </button>
      </section>

      {/* VSL-STYLE STORYTELLING */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        {/* The Hook */}
        <div className="mb-8">
          <p className="text-xl font-semibold mb-2">If you’re a man over 40, you know the feeling.</p>
          <p>
            That constant urge, interrupted sleep, and nagging discomfort that makes you feel years older. You’ve tried everything—endless remedies, diets, maybe even expensive treatments—but nothing seems to work. You’re not alone. Millions of men silently suffer, and most solutions don’t address the real cause.
          </p>
        </div>
        {/* The Story */}
        <div className="mb-8">
          <p>
            After years of frustration, I discovered a breakthrough backed by a 2023 study from Fukushima Medical University in Japan: supporting healthy blood flow in and around the prostate is key to metabolizing cells and maintaining prostate size. 
          </p>
          <p className="mt-2">
            That’s why ProstaVive was formulated—with a unique blend of ingredients that support prostate blood circulation, healthy nitric oxide levels, and optimal urinary flow. Thousands of men are now enjoying deeper sleep, more energy, and a revitalized love life.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <img src="/home-assets/images/happy-men.jpg" alt="Happy ProstaVive customers" className="w-20 h-20 rounded-full object-cover" />
            <span className="text-blue-700 font-semibold">Thousands of Satisfied Customers</span>
          </div>
        </div>
        {/* The Solution */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">What Makes ProstaVive Different?</h2>
          <p>
            ProstaVive’s formula combines rare and powerful nutrients:
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
              <li>Maintain healthy prostate size and strong urine flow</li>
              <li>Boost sexual performance and energy</li>
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
                Order a 3 or 6 pack today and you’ll receive:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Prostate Health Smoothie Recipes</strong> <span className="text-gray-600">(Value: $37)</span> – Delicious, science-backed recipes to accelerate your results.
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
          <strong>Hurry:</strong> This exclusive offer and free bonuses are only available while supplies last. Don’t wait—secure your supply now.
        </div>
        <p className="text-lg">
          How much longer will you let prostate issues control your life? Take the first step toward comfort and confidence today.
        </p>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-8 text-center" id="order">
        <button
          onClick={handleCTAClick}
          className="inline-block bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:bg-blue-800 transition cursor-pointer"
        >
          YES! I Want ProstaVive Now
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
    </main>
  )
}
