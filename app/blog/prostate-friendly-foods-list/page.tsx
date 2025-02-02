import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Check } from 'lucide-react'

export default function ProstateFriendlyFoodsList() {
  const foodCategories = [
    {
      category: "Fruits and Vegetables",
      foods: [
        { name: "Tomatoes", benefit: "Rich in lycopene, which may reduce prostate cancer risk" },
        { name: "Broccoli", benefit: "Contains sulforaphane, which may target and kill prostate cancer cells" },
        { name: "Pomegranate", benefit: "High in antioxidants that may slow prostate cancer growth" },
        { name: "Berries", benefit: "Packed with antioxidants and vitamin C for overall prostate health" }
      ]
    },
    {
      category: "Nuts and Seeds",
      foods: [
        { name: "Pumpkin Seeds", benefit: "High in zinc, essential for prostate health" },
        { name: "Brazil Nuts", benefit: "Excellent source of selenium, which may reduce prostate cancer risk" },
        { name: "Walnuts", benefit: "Rich in omega-3 fatty acids, beneficial for prostate health" }
      ]
    },
    {
      category: "Fish",
      foods: [
        { name: "Salmon", benefit: "High in omega-3 fatty acids, may reduce inflammation" },
        { name: "Sardines", benefit: "Rich in vitamin D, which may help prevent prostate cancer" },
        { name: "Mackerel", benefit: "Contains omega-3s and vitamin D for prostate health" }
      ]
    },
    {
      category: "Herbs and Spices",
      foods: [
        { name: "Turmeric", benefit: "Contains curcumin, which may inhibit prostate cancer cell growth" },
        { name: "Green Tea", benefit: "Rich in antioxidants that may prevent prostate cancer development" },
        { name: "Garlic", benefit: "May help reduce BPH symptoms and lower PSA levels" }
      ]
    }
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Prostate Friendly Foods List: Nourishing Your Prostate Health",
  "description": "Discover a comprehensive list of foods that support prostate health and learn how to incorporate them into your diet.",
  "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200",
  "datePublished": "2024-03-23",
  "author": {
    "@type": "Organization",
    "name": "ProstaVive"
  }
}) }} />
      <div className="relative h-[400px] w-full mb-8">
        <Image 
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&h=400"
          alt="A colorful array of fruits, vegetables, nuts, and fish that are beneficial for prostate health"
          fill
          className="object-cover rounded-xl"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6 text-gray-900">Prostate Friendly Foods List: Nourishing Your Prostate Health</h1>

      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        Maintaining a healthy diet is crucial for overall well-being, and it plays a significant role in prostate health. Certain foods have been shown to support prostate function, reduce inflammation, and potentially lower the risk of prostate-related issues. In this comprehensive guide, we'll explore a list of prostate-friendly foods that you can incorporate into your diet for optimal prostate health.
      </p>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Focus on Prostate-Friendly Foods?</h2>
        <p className="text-gray-700 mb-4">
          A diet rich in prostate-friendly foods can offer numerous benefits:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Support overall prostate function</li>
          <li>Potentially reduce the risk of prostate cancer</li>
          <li>Help manage symptoms of benign prostatic hyperplasia (BPH)</li>
          <li>Promote general urinary health</li>
          <li>Contribute to overall well-being and vitality</li>
        </ul>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="https://prostavivereview.com/api/vsl" className="flex items-center">
            Learn How ProstaVive Complements a Healthy Diet
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Prostate-Friendly Foods List</h2>
      {foodCategories.map((category, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {category.foods.map((food, foodIndex) => (
              <div key={foodIndex} className="bg-white rounded-lg shadow-md p-4">
                <h4 className="font-semibold mb-2">{food.name}</h4>
                <p className="text-gray-700">{food.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <h2 className="text-2xl font-semibold mt-8 mb-4">Tips for Incorporating Prostate-Friendly Foods</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Aim for a colorful plate with a variety of fruits and vegetables</li>
        <li>Include fatty fish in your diet at least twice a week</li>
        <li>Snack on a handful of nuts or seeds daily</li>
        <li>Use herbs and spices liberally in your cooking</li>
        <li>Consider green tea as a healthy alternative to sugary drinks</li>
        <li>Experiment with new recipes that feature prostate-friendly ingredients</li>
      </ul>

      <div className="bg-green-50 border border-green-100 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">ProstaVive: Supporting Your Prostate-Friendly Diet</h3>
        <p className="text-gray-700 mb-4">
          While a healthy diet is crucial, sometimes it's challenging to get all the necessary nutrients from food alone. ProstaVive offers a natural supplement that complements your prostate-friendly diet:
        </p>
        <ul className="mb-4">
          <li className="flex items-start gap-2 mb-2">
            <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Contains key ingredients found in prostate-friendly foods</span>
          </li>
          <li className="flex items-start gap-2 mb-2">
            <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Supports overall prostate function</span>
          </li>
          <li className="flex items-start gap-2 mb-2">
            <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
            <span className="text-gray-700">Complements a prostate-friendly diet</span>
          </li>
        </ul>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="https://prostavivereview.com/api/sale" className="flex items-center">
            Try ProstaVive to Support Your Prostate Health
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
      <p className="mb-6 text-gray-700">
        Incorporating prostate-friendly foods into your diet is a simple yet effective way to support your prostate health. By focusing on nutrient-rich fruits, vegetables, nuts, seeds, and fish, you can provide your body with the essential vitamins, minerals, and antioxidants it needs to maintain optimal prostate function. Remember, a balanced diet, combined with regular exercise and appropriate supplements like ProstaVive, can go a long way in promoting overall prostate health and well-being.
      </p>

      <div className="mt-8 text-sm text-gray-500">
        <p className="mb-2">Disclaimer: This article is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare professional before making significant changes to your diet or starting any new supplement regimen.</p>
      </div>
      <div className="mt-8 border-t pt-6">
        <h2 className="text-2xl font-semibold mb-4">Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="https://www.cancer.gov/about-cancer/causes-prevention/risk/diet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Diet and Cancer Prevention - National Cancer Institute
            </a>
          </li>
          <li>
            <a href="https://www.health.harvard.edu/mens-health/10-diet-and-exercise-tips-for-prostate-health" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              10 diet and exercise tips for prostate health - Harvard Health Publishing
            </a>
          </li>
          <li>
            <a href="https://www.nccih.nih.gov/health/prostate-disease" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Prostate Disease - National Center for Complementary and Integrative Health
            </a>
          </li>
        </ul>
      </div>
    </article>
  )
}

