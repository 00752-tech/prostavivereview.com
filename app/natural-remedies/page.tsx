import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Natural Remedies for Prostate Health | ProstaVive',
  description: 'Explore natural remedies and lifestyle changes to support prostate health. Learn how ProstaVive complements a natural approach to prostate care.',
}

export default function NaturalRemediesPage() {
  const naturalRemedies = [
    {
      name: "Saw Palmetto",
      description: "A popular herb that may help reduce symptoms of benign prostatic hyperplasia (BPH).",
    },
    {
      name: "Pygeum",
      description: "An extract from African cherry tree bark that may improve urinary symptoms related to BPH.",
    },
    {
      name: "Beta-sitosterol",
      description: "A plant compound that may help improve urine flow and reduce BPH symptoms.",
    },
    {
      name: "Stinging Nettle",
      description: "An herb that may help reduce inflammation and improve urinary symptoms in men with BPH.",
    },
    {
      name: "Pumpkin Seed Extract",
      description: "Rich in zinc and fatty acids, may support prostate health and reduce BPH symptoms.",
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Natural Remedies for Prostate Health</h1>
      
      <div className="relative h-[300px] w-full mb-8">
        <Image 
          src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&h=400"
          alt="Various natural herbs and supplements used for prostate health"
          fill
          className="object-cover rounded-xl"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>
      
      <p className="mb-6 text-lg text-gray-700">Discover natural ways to support your prostate health through diet, lifestyle changes, and supplements. Natural remedies offer a gentle, holistic approach to maintaining prostate health and managing symptoms of common prostate conditions.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Popular Natural Remedies for Prostate Health</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {naturalRemedies.map((remedy, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">{remedy.name}</h3>
            <p className="text-gray-700">{remedy.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">ProstaVive: A Comprehensive Natural Solution</h2>
        <p className="text-gray-700 mb-4">
          ProstaVive combines the power of multiple natural ingredients to provide comprehensive support for prostate health. Our unique formula includes many of the natural remedies mentioned above, carefully blended to maximize their benefits.
        </p>
        <ul className="list-none pl-0 space-y-2 mb-4">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <span>Scientifically formulated blend of natural ingredients</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <span>Supports overall prostate health and urinary function</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
            <span>Complements a healthy lifestyle and diet</span>
          </li>
        </ul>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="https://prostavivereview.com/api/vsl" className="flex items-center">
            Discover ProstaVive's Natural Approach
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Lifestyle Changes for Prostate Health</h2>
      <p className="mb-4 text-gray-700">In addition to natural supplements, certain lifestyle changes can significantly impact prostate health:</p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Maintain a balanced diet rich in fruits, vegetables, and whole grains</li>
        <li>Stay hydrated by drinking plenty of water</li>
        <li>Exercise regularly, focusing on both cardio and strength training</li>
        <li>Manage stress through relaxation techniques like meditation or yoga</li>
        <li>Limit alcohol consumption and avoid smoking</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Learn More About Natural Prostate Health</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li><Link href="/blog/natural-prostate-remedies" className="text-blue-600 hover:underline">Natural Prostate Remedies Guide</Link></li>
        <li><Link href="/blog/prostate-friendly-foods-list" className="text-blue-600 hover:underline">Prostate-Friendly Foods</Link></li>
        <li><Link href="/blog/diet-lifestyle-prostate-health" className="text-blue-600 hover:underline">Diet and Lifestyle for Prostate Health</Link></li>
        <li><Link href="/blog/holistic-prostate-health" className="text-blue-600 hover:underline">Holistic Approach to Prostate Health</Link></li>
      </ul>

      <div className="bg-green-50 border border-green-100 rounded-xl p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4">Start Your Natural Prostate Health Journey with ProstaVive</h2>
        <p className="mb-4 text-gray-700">
          Embrace a holistic approach to prostate health with ProstaVive. Our natural supplement works in harmony with your body and complements a healthy lifestyle to support optimal prostate function.
        </p>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="https://prostavivereview.com/api/sale" className="flex items-center">
            Try ProstaVive Risk-Free Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Disclaimer: This information is for educational purposes only and does not constitute medical advice. Always consult with a qualified healthcare professional before starting any new supplement or treatment regimen.
      </p>
    </div>
  )
}

