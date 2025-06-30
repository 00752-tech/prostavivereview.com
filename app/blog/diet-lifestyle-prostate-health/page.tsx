import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Check, FileText } from 'lucide-react'

export default function DietLifestyleProstateHealth() {
  const lifestyleTips = [
    {
      tip: "Eat a balanced diet rich in fruits and vegetables",
      description: "Focus on antioxidant-rich foods like berries, leafy greens, and tomatoes."
    },
    {
      tip: "Stay physically active",
      description: "Regular exercise can help maintain a healthy weight and reduce inflammation."
    },
    {
      tip: "Manage stress levels",
      description: "Practice stress-reduction techniques like meditation or yoga."
    },
    {
      tip: "Limit alcohol consumption",
      description: "Excessive alcohol intake may increase the risk of prostate problems."
    },
    {
      tip: "Quit smoking",
      description: "Smoking has been linked to an increased risk of aggressive prostate cancer."
    }
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative h-[400px] w-full mb-8">
        <Image 
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200"
          alt="Healthy Mediterranean diet foods beneficial for prostate health including nuts, vegetables, and olive oil"
          fill
          className="object-cover rounded-xl"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
        <Button asChild className="w-full mb-4 bg-blue-600 hover:bg-blue-700">
          <Link href="https://a2e71-b0p89p8o8i2j3c643zc2.hop.clickbank.net" className="flex items-center justify-center">
            <Play className="mr-2 h-5 w-5" />
            Watch Video: ProstaVive and Healthy Living
          </Link>
        </Button>
        <p className="text-sm text-blue-600 text-center">
          Learn how ProstaVive complements a healthy lifestyle for optimal prostate health
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-gray-900">The Impact of Diet and Lifestyle on Prostate Health</h1>

      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        Maintaining a healthy prostate isn't just about supplements; it's about embracing a holistic approach to wellness. 
        In this comprehensive guide, we'll explore how diet and lifestyle choices can significantly impact your prostate health 
        and overall well-being.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">The Power of Nutrition</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-gray-700 leading-relaxed">
            A diet rich in fruits, vegetables, and whole grains can provide essential nutrients and antioxidants that support 
            prostate health. Foods like tomatoes (rich in lycopene), fatty fish (high in omega-3s), and green tea have been 
            associated with potential prostate health benefits.
          </p>
        </div>
        <div className="relative h-[250px]">
          <Image 
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800"
            alt="Colorful array of fruits and vegetables that support prostate health"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-6">Lifestyle Tips for Prostate Health</h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        {lifestyleTips.map((tip, index) => (
          <div key={index} className="p-6 border-b border-gray-100 last:border-b-0">
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">{tip.tip}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-12">
        <div className="relative h-[300px] mb-6">
          <Image 
            src="https://prostavive.org/home-assets/images/product.png"
            alt="ProstaVive natural prostate supplement - supporting a healthy lifestyle for optimal prostate function"
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Complement Your Healthy Lifestyle with ProstaVive</h2>
          <p className="mb-6 text-gray-700">
            While a healthy diet and lifestyle form the foundation of prostate health, ProstaVive can provide additional 
            support with its blend of natural, scientifically-backed ingredients.
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="https://a2e71-b0p89p8o8i2j3c643zc2.hop.clickbank.net" className="flex items-center">
              Try ProstaVive Risk-Free Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="my-12">
        <h2 className="text-2xl font-semibold mb-6">Watch: The ProstaVive Lifestyle</h2>
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
        <h2 className="text-3xl font-bold mb-4">Empower Your Prostate Health Journey</h2>
        <p className="mb-6">Combine the power of a healthy lifestyle with ProstaVive for comprehensive prostate support</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Button asChild variant="secondary" className="w-full">
            <Link href="https://a2e71-b0p89p8o8i2j3c643zc2.hop.clickbank.net" className="flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Video Presentation
            </Link>
          </Button>
          <Button asChild className="w-full bg-green-600 hover:bg-green-700">
            <Link href="https://a2e71-b0p89p8o8i2j3c643zc2.hop.clickbank.net" className="flex items-center justify-center">
              Get ProstaVive Now
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
            <a href="https://www.cancer.gov/about-cancer/causes-prevention/risk/diet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Diet and Cancer Prevention - National Cancer Institute
            </a>
          </li>
          <li>
            <a href="https://www.cdc.gov/cancer/prostate/basic_info/prevention.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              What Can I Do to Reduce My Risk of Prostate Cancer? - Centers for Disease Control and Prevention (CDC)
            </a>
          </li>
          <li>
            <a href="https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems/eating-diet-nutrition" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Eating, Diet, & Nutrition for Prostate Problems - National Institute of Diabetes and Digestive and Kidney Diseases
            </a>
          </li>
        </ul>
      </div>
    </article>
  )
}

