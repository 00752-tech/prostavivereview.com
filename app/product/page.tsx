import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'ProstaVive: Advanced Prostate Health Supplement | Natural Support',
  description: 'Discover ProstaVive, a comprehensive prostate health supplement. Clinically proven ingredients for optimal prostate function, urinary health, and overall male vitality.',
  keywords: 'prostate health supplement, natural prostate support, ProstaVive, urinary health, male vitality',
  alternates: {
    canonical: 'https://www.prostavive.com/product'
  },
}

export default function ProductPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://www.prostavive.com",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://www.prostavive.com/product",
              "name": "ProstaVive Supplement"
            }
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://www.prostavive.com/product#product",
        "name": "ProstaVive",
        "description": "ProstaVive is an advanced natural prostate health supplement designed to support optimal prostate function, improve urinary health, and boost overall male vitality.",
        "image": "https://prostavive.org/home-assets/images/product.png",
        "brand": {
          "@type": "Brand",
          "name": "ProstaVive"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.prostavive.com/product",
          "priceCurrency": "USD",
          "price": "69.99",
          "priceValidUntil": "2024-12-31",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1247"
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">ProstaVive: Advanced Prostate Health Supplement</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image 
              src="https://prostavive.org/home-assets/images/product.png" 
              alt="ProstaVive Bottle - Advanced Prostate Health Supplement" 
              width={400} 
              height={400} 
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">What is ProstaVive?</h2>
            <p className="mb-4">ProstaVive is an advanced natural prostate health supplement designed to support optimal prostate function, improve urinary health, and boost overall male vitality. Our unique blend of powerful, clinically-proven ingredients works synergistically to promote comprehensive prostate care.</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Supports normal urinary flow and frequency</li>
              <li>Promotes prostate health and function</li>
              <li>Enhances overall male vitality</li>
              <li>Made with all-natural, clinically-proven ingredients</li>
              <li>Available in convenient, easily-absorbed powder form</li>
            </ul>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600">4.8/5 (1,247 reviews)</span>
            </div>
            <p className="font-bold mb-4">Price: $69.99</p>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              <Link href="https://prostavivereview.com/api/sale">Order Now</Link>
            </Button>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Why Choose ProstaVive for Your Prostate Health?</h2>
          <p className="mb-4">In the world of prostate health supplements, ProstaVive stands out as a comprehensive solution backed by science and nature. Here's why ProstaVive is the preferred choice for men seeking optimal prostate support:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Clinically-Proven Ingredients:</strong> Each component in ProstaVive is selected based on scientific research for its efficacy in supporting prostate health.</li>
            <li><strong>Holistic Approach:</strong> Unlike many supplements that focus on a single aspect, ProstaVive addresses multiple facets of prostate and urinary health.</li>
            <li><strong>Superior Absorption:</strong> Our unique powder formula ensures maximum bioavailability, allowing your body to utilize the nutrients effectively.</li>
            <li><strong>Natural and Safe:</strong> ProstaVive is made with all-natural ingredients, minimizing the risk of side effects often associated with synthetic compounds.</li>
            <li><strong>Comprehensive Support:</strong> Beyond prostate health, ProstaVive contributes to overall male vitality and well-being.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Key Ingredients in ProstaVive</h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Saw Palmetto Extract:</strong> Helps reduce urinary symptoms associated with benign prostatic hyperplasia (BPH).</li>
            <li><strong>Beta-Sitosterol:</strong> Supports healthy urinary flow and prostate function.</li>
            <li><strong>Pygeum Africanum:</strong> Aids in reducing inflammation and improving urinary symptoms.</li>
            <li><strong>Zinc:</strong> Essential for prostate health and immune function.</li>
            <li><strong>Selenium:</strong> An antioxidant that may help protect prostate cells from damage.</li>
            <li><strong>Vitamin D:</strong> Supports overall prostate health and may help reduce the risk of certain prostate conditions.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">How ProstaVive Compares to Other Prostate Supplements</h2>
          <p className="mb-4">While many prostate supplements focus on one or two key ingredients, ProstaVive offers a comprehensive blend that addresses multiple aspects of prostate health. Our formula is constantly updated based on the latest scientific research, ensuring you're getting the most effective support available.</p>
          <table className="w-full border-collapse border border-gray-300 mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Feature</th>
                <th className="border border-gray-300 p-2">ProstaVive</th>
                <th className="border border-gray-300 p-2">Other Supplements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Comprehensive Formula</td>
                <td className="border border-gray-300 p-2 text-center">✓</td>
                <td className="border border-gray-300 p-2 text-center">Varies</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Clinically-Proven Ingredients</td>
                <td className="border border-gray-300 p-2 text-center">✓</td>
                <td className="border border-gray-300 p-2 text-center">Some</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Easy-to-Absorb Powder Form</td>
                <td className="border border-gray-300 p-2 text-center">✓</td>
                <td className="border border-gray-300 p-2 text-center">Rare</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">60-Day Money-Back Guarantee</td>
                <td className="border border-gray-300 p-2 text-center">✓</td>
                <td className="border border-gray-300 p-2 text-center">Varies</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">How long does it take to see results with ProstaVive?</h3>
              <p>While individual experiences may vary, many users report noticeable improvements in urinary symptoms and overall prostate health within 4-6 weeks of consistent use.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Are there any side effects?</h3>
              <p>ProstaVive is made with natural ingredients and is generally well-tolerated. However, as with any supplement, it's advisable to consult with your healthcare provider before starting, especially if you have any pre-existing conditions or are taking medications.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">How do I take ProstaVive?</h3>
              <p>Mix one scoop of ProstaVive powder with water or your favorite beverage once daily. For best results, take consistently at the same time each day.</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Prostate Health?</h2>
          <p className="mb-4">Join thousands of men who have discovered the ProstaVive difference. With our 60-day money-back guarantee, you can try ProstaVive risk-free and experience the benefits of comprehensive prostate support.</p>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <Link href="https://prostavivereview.com/api/sale">Order ProstaVive Now</Link>
          </Button>
        </section>
      </div>
    </>
  )
}
