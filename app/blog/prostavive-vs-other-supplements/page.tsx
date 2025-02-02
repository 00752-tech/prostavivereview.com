import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Check, FileText } from 'lucide-react'

export default function ProstaviveVsOtherSupplements() {
  const comparisonPoints = [
    {
      prostavive: "Clinically proven natural ingredients",
      others: "Variable ingredient quality and sources",
      advantage: true
    },
    {
      prostavive: "Powder form for maximum absorption",
      others: "Typically hard pills or capsules",
      advantage: true
    },
    {
      prostavive: "Complete formula with all essential nutrients",
      others: "Often missing key ingredients",
      advantage: true
    },
    {
      prostavive: "60-day money-back guarantee",
      others: "Limited or no guarantees",
      advantage: true
    },
    {
      prostavive: "Manufactured in FDA-approved facility",
      others: "Manufacturing standards vary",
      advantage: true
    }
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative h-[400px] w-full mb-8">
        <Image 
          src="https://prostavive.org/home-assets/images/bottles.png"
          alt="ProstaVive premium prostate supplement bottles compared to other supplements - showing superior quality and formulation"
          fill
          className="object-contain rounded-xl bg-gradient-to-r from-blue-50 to-white"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
        <Button asChild className="w-full mb-4 bg-blue-600 hover:bg-blue-700">
          <Link href="https://hop.clickbank.net/?affiliate=smartdiet3&vendor=provive&pid=20&tid=vsl" className="flex items-center justify-center">
            <Play className="mr-2 h-5 w-5" />
            Watch Video: Why ProstaVive Stands Out
          </Link>
        </Button>
        <p className="text-sm text-blue-600 text-center">
          Discover what makes ProstaVive the leading choice for prostate health
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-gray-900">ProstaVive vs. Other Prostate Supplements: An In-Depth Comparison</h1>

      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        With countless prostate supplements on the market, choosing the right one can be overwhelming. 
        In this comprehensive comparison, we'll examine how ProstaVive stands out from other supplements 
        and why it's becoming the preferred choice for men seeking natural prostate support.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="relative h-[400px]">
          <Image 
            src="https://prostavive.org/home-assets/images/product.png"
            alt="ProstaVive's unique powder formula showing superior absorption and bioavailability"
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">The ProstaVive Advantage</h2>
          <div className="space-y-4">
            {comparisonPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{point.prostavive}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6">Head-to-Head Comparison</h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="grid grid-cols-3 gap-4 p-6 bg-blue-50">
          <div className="font-semibold">Feature</div>
          <div className="font-semibold text-blue-600">ProstaVive</div>
          <div className="font-semibold text-gray-600">Other Supplements</div>
        </div>
        {comparisonPoints.map((point, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 p-6 border-t border-gray-100">
            <div className="font-medium">{point.prostavive.split(' ').slice(0, 2).join(' ')}</div>
            <div className="text-green-600 flex items-center gap-2">
              <Check className="h-4 w-4" />
              Yes
            </div>
            <div className="text-gray-500">{point.others}</div>
          </div>
        ))}
      </div>

      <div className="my-12">
        <h2 className="text-2xl font-semibold mb-6">Scientific Evidence</h2>
        <div className="relative h-[300px] mb-6">
          <Image 
            src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800"
            alt="Scientific laboratory research showing ProstaVive's evidence-based approach to prostate health"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <p className="text-gray-700 mb-6">
          ProstaVive's formula is backed by extensive clinical research on each ingredient. Our commitment 
          to scientific evidence sets us apart from competitors who may use untested or ineffective ingredients.
        </p>
      </div>

      <div className="my-12">
        <h2 className="text-2xl font-semibold mb-6">Watch: ProstaVive Customer Testimonials</h2>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe 
            src="https://www.youtube.com/embed/O9Wp41nSda4" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
          />
        </div>
        <div className="mt-4">
          <Link href="/video-transcript" className="text-blue-600 hover:underline inline-flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            Read Video Transcript
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white my-12">
        <h2 className="text-3xl font-bold mb-4">Experience the ProstaVive Difference</h2>
        <p className="mb-6">Join thousands of satisfied customers who have chosen the superior prostate support of ProstaVive</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Button asChild variant="secondary" className="w-full">
            <Link href="https://hop.clickbank.net/?affiliate=smartdiet3&vendor=provive&pid=20&tid=vsl" className="flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Video Presentation
            </Link>
          </Button>
          <Button asChild className="w-full bg-green-600 hover:bg-green-700">
            <Link href="https://hop.clickbank.net/?affiliate=smartdiet3&vendor=provive&tid=vsl" className="flex items-center justify-center">
              Try ProstaVive Risk-Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="text-sm text-gray-500 mt-8">
        <p className="mb-2">* These statements have not been evaluated by the Food and Drug Administration. 
        This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
        <p>Individual results may vary. Consult your healthcare provider before starting any supplement regimen.</p>
      </div>
      <div className="mt-8 border-t pt-6">
        <h2 className="text-2xl font-semibold mb-4">Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="https://www.fda.gov/consumers/consumer-updates/prostate-cancer-treatments" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Prostate Cancer Treatments - U.S. Food and Drug Administration (FDA)
            </a>
          </li>
          <li>
            <a href="https://www.cancer.gov/about-cancer/treatment/cam/patient/prostate-supplements-pdq" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Prostate Cancer, Nutrition, and Dietary Supplements - National Cancer Institute
            </a>
          </li>
          <li>
            <a href="https://www.nccih.nih.gov/health/dietary-and-herbal-supplements" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Dietary and Herbal Supplements - National Center for Complementary and Integrative Health
            </a>
          </li>
        </ul>
      </div>
    </article>
  )
}

