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
      <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-white min-h-screen flex items-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-indigo-100/30"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/15 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-16 xl:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy with proper margins */}
            <div className="space-y-6 ml-4 lg:ml-8 xl:ml-12">
              {/* Badge/Indicator - Kicker Style */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 text-blue-700 text-base font-medium shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Scientifically Proven Solution
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-[1.1] tracking-tight">
                Are You Tired of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-medium">
                  Constant Bathroom Trips
                </span>
                <span className="block text-gray-900 font-light">
                  and Sleepless Nights?
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-xl font-light">
                  Discover the natural breakthrough for prostate health that could change everything.
                </p>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Finally, a scientifically-backed solution that helps men over 40 reclaim their vitality, enjoy uninterrupted sleep, and support optimal prostate function naturally.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleCTAClick}
                  className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4
                             px-6 sm:px-8 rounded-2xl text-base sm:text-lg // MODIFIED: px-6 for mobile, text-base for mobile
                             shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap" // ADDED: whitespace-nowrap
                >
                  <span className="relative z-10">See Today's Best Price</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <div className="flex items-center gap-2 text-gray-600 text-base">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>180-Day Money-Back Guarantee</span>
                </div>
              </div>

              {/* Stats or Social Proof with more padding */}
              <div className="flex items-center gap-8 pt-12 pb-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900">10,000+</div>
                  <div className="text-sm lg:text-base text-gray-600">Satisfied Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900">180 Days</div>
                  <div className="text-sm lg:text-base text-gray-600">Money-Back Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900">4.9★</div>
                  <div className="text-sm lg:text-base text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-3xl blur-2xl scale-110"></div>

                {/* Main Image - Larger and No Border */}
                <div className="relative">
                  <Image
                    src="/images/Man in blue henley ordering Prostavive Natural Prostate Supplement.png"
                    alt="Concerned middle-aged man"
                    width={600}
                    height={700}
                    className="relative object-cover max-w-full h-auto drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))'
                    }}
                    priority
                  />

                  {/* Floating Elements */}
                  <div className="absolute top-4 -right-4 bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-2xl text-sm font-bold shadow-2xl animate-pulse">
                    ✓ Natural Solution
                  </div>

                  {/* New: Subtle text overlay for target audience */}
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-20 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm font-medium">
                    For Men 40+
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEDICAL PROFESSIONAL STORYTELLING SECTION */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              The Science Behind <span className="text-blue-600 font-medium">ProstaVive</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding the root causes of prostate health challenges and how natural compounds can provide effective relief.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">If you're a man over 40, you understand the frustration.</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg lg:text-xl">
                <p>
                  That constant urge to urinate, interrupted sleep patterns, and the nagging discomfort that affects your daily quality of life. You've likely tried various remedies, dietary modifications, and perhaps even considered invasive medical procedures.
                </p>
                <p>
                  The challenge is that most conventional approaches only address symptoms rather than targeting the underlying physiological processes that contribute to prostate health decline.
                </p>
                <p className="font-medium text-blue-700 text-xl">
                  What if there was a scientifically-formulated solution that worked with your body's natural processes?
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://prostavive.org/home-assets/images/rbc-image.png"
                alt="Scientific illustration"
                width={400}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Clinical Research Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="https://prostavive.org/home-assets/images/image3.png"
                  alt="Clinical research"
                  width={350}
                  height={250}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">Clinical Research & Development</h3>
                <p className="text-gray-700 mb-4 leading-relaxed text-lg lg:text-xl">
                  After years of research and collaboration with leading scientists, we identified a synergistic combination of natural compounds that address multiple pathways involved in prostate health maintenance.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg lg:text-xl">
                  Each ingredient in ProstaVive has been selected based on peer-reviewed research demonstrating its efficacy in supporting optimal prostate function, urinary flow, and overall male wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INGREDIENT SCIENCE SECTION */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              Nature's Most Powerful <span className="text-blue-600 font-medium">Prostate Support Compounds</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Each ingredient is backed by clinical research and carefully dosed for maximum bioavailability and effectiveness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Key Ingredients */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Image
                src="https://prostavive.org/home-assets/images/image4.png"
                alt="Boron compound"
                width={80}
                height={80}
                className="mb-4"
              />
              <h4 className="text-lg lg:text-xl font-medium text-gray-900 mb-2">Boron</h4>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Optimizes detoxification pathways and supports healthy inflammatory response mechanisms critical for prostate wellness.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Image
                src="https://prostavive.org/home-assets/images/image5.png"
                alt="Tongkat Ali"
                width={80}
                height={80}
                className="mb-4"
              />
              <h4 className="text-lg lg:text-xl font-medium text-gray-900 mb-2">Tongkat Ali</h4>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Enhances sexual function, supports fertility parameters, and provides adaptogenic stress management benefits.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Image
                src="https://prostavive.org/home-assets/images/image6.png"
                alt="Ashwagandha"
                width={80}
                height={80}
                className="mb-4"
              />
              <h4 className="text-lg lg:text-xl font-medium text-gray-900 mb-2">Ashwagandha</h4>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Promotes lean muscle development, supports healthy body composition, and enhances sexual performance markers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Image
                src="https://prostavive.org/home-assets/images/image7.png"
                alt="Fenugreek"
                width={80}
                height={80}
                className="mb-4"
              />
              <h4 className="text-lg lg:text-xl font-medium text-gray-900 mb-2">Fenugreek</h4>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Supports prostate function, enhances libido, and contributes to positive mood regulation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Image
                src="https://prostavive.org/home-assets/images/image8.png"
                alt="Panax Ginseng"
                width={80}
                height={80}
                className="mb-4"
              />
              <h4 className="text-lg lg:text-xl font-medium text-gray-900 mb-2">Panax Ginseng</h4>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Enhances cardiovascular health, boosts energy metabolism, and supports immune system function.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Image
                src="https://prostavive.org/home-assets/images/image9.png"
                alt="Nettle Root"
                width={80}
                height={80}
                className="mb-4"
              />
              <h4 className="text-lg lg:text-xl font-medium text-gray-900 mb-2">Nettle Root</h4>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Supports hormone balance and promotes optimal urinary tract health and function.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">Clinical Benefits You Can Experience</h3>
                <ul className="space-y-3 text-gray-700 text-lg lg:text-xl">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Maintain healthy prostate size and function</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Improve urinary tract function and flow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Boost overall energy and vitality levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Promote deep, restorative sleep patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Support cardiovascular and immune health</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://prostavive.org/home-assets/images/Supplement-Facts.png"
                  alt="Supplement Facts - ProstaVive nutritional information and dosage details"
                  width={500}
                  height={650}
                  className="rounded-xl shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER & VALUE STACKING */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
            Limited Time: <span className="font-medium">ProstaVive + Exclusive Bonuses</span>
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Secure your supply today and receive valuable bonuses to accelerate your prostate health journey.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <Image
                  src="https://prostavive.org/home-assets/images/bottles.png"
                  alt="ProstaVive Bottles"
                  width={400}
                  height={350}
                  className="max-w-full h-auto"
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl lg:text-3xl font-light mb-6">Your Complete Prostate Health Package Includes:</h3>
                <ul className="space-y-4 text-blue-100 text-lg lg:text-xl">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-white">ProstaVive Formula</strong> - 30-day supply of our premium blend
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-white">Prostate Health Protocol</strong> - <span className="text-green-300">(Value: $37)</span> Digital wellness guide
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-white">Male Vitality Enhancement Plan</strong> - Performance optimization strategies
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <Image
              src="https://prostavive.org/home-assets/images/money-back-guarantee.png"
              alt="180-Day Money Back Guarantee - Risk-free trial"
              width={400}
              height={200}
              className="mx-auto mb-4 max-w-full h-auto"
            />
            <p className="text-lg lg:text-xl text-blue-100">
              All backed by our comprehensive <strong className="text-white">180-Day Money-Back Guarantee</strong>
            </p>
          </div>

          <button
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 cursor-pointer mb-4"
          >
            Secure Your ProstaVive Today
          </button>

          <p className="text-sm lg:text-base text-blue-200">
            ✓ Fast, discreet shipping (3-5 business days) ✓ Secure encrypted checkout ✓ 180-day satisfaction guarantee
          </p>
        </div>
      </section>

      {/* URGENCY & SCARCITY */}
      <section className="bg-amber-50 border-l-4 border-amber-400 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-amber-100 rounded-xl p-6 mb-6">
            <h3 className="text-2xl lg:text-3xl font-medium text-amber-800 mb-2">Limited Availability Notice</h3>
            <p className="text-amber-700 leading-relaxed text-lg lg:text-xl">
              Due to the premium quality of our ingredients and our commitment to maintaining the highest manufacturing standards,
              ProstaVive is produced in limited batches. This special pricing and bonus package is available only while current inventory lasts.
            </p>
          </div>
          <p className="text-lg lg:text-xl text-gray-700">
            How much longer will you allow prostate health concerns to impact your quality of life?
            Take the first step toward reclaiming your comfort, confidence, and vitality.
          </p>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-white py-12 text-center" id="order">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">
            Ready to Transform Your <span className="text-blue-600 font-medium">Prostate Health?</span>
          </h3>
          <button
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-12 rounded-full text-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 cursor-pointer mb-4"
          >
            YES! I Want to Reclaim My Prostate Health & Vitality
          </button>
          <p className="text-sm lg:text-base text-gray-600">
            Secure checkout • Fast shipping • 180-day satisfaction guarantee
          </p>
        </div>
      </section>
    </>
  )
}
