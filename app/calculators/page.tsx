import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import MainPageCalculators from '@/components/MainPageCalculators'
import { CalculatorDisclaimer } from '@/components/CalculatorDisclaimer'

export default function Calculators() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-blue-600 hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold mb-6">Prostate Health Calculators</h1>
      <p className="text-lg mb-8">
        Use our interactive calculators to assess various aspects of your prostate health and lifestyle factors. 
        Remember, these tools are for informational purposes only and should not replace professional medical advice.
      </p>

      <MainPageCalculators />

      <div className="mt-12 bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Why These Calculators Matter</h2>
        <p className="mb-4">
          Understanding your prostate health is crucial for maintaining overall well-being. 
          Our calculators provide insights into your lifestyle habits and potential symptoms, 
          helping you make informed decisions about your health.
        </p>
        <p className="mb-4">
          Remember, these calculators are not diagnostic tools. Always consult with a healthcare 
          professional for proper evaluation and treatment of prostate-related concerns.
        </p>
        <div className="flex space-x-4">
          <Button asChild className="flex-1">
            <Link href="https://prostavivereview.com/api/vsl">
              Watch Video Presentation
            </Link>
          </Button>
          <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="https://prostavivereview.com/api/sale">
              Learn More About ProstaVive
            </Link>
          </Button>
        </div>
      </div>
      <CalculatorDisclaimer />
    </div>
  )
}

