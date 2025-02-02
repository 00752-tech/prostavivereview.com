import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, AlertTriangle, ExternalLink } from 'lucide-react'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export default function ProstateHealthYoungMen() {
const preventiveSteps = [
{
  title: "Maintain a Healthy Diet",
  description: "Focus on antioxidant-rich foods, lean proteins, and plenty of vegetables.",
  tips: [
    "Eat plenty of fruits and vegetables, especially tomatoes and leafy greens",
    "Choose whole grains over refined carbohydrates",
    "Include healthy fats from sources like olive oil, avocados, and nuts",
    "Limit processed foods and red meat consumption"
  ]
},
{
  title: "Regular Exercise",
  description: "Stay active with both cardio and strength training exercises.",
  tips: [
    "Aim for at least 150 minutes of moderate exercise per week",
    "Include pelvic floor exercises in your routine",
    "Practice regular strength training",
    "Maintain a healthy weight"
  ]
},
{
  title: "Lifestyle Choices",
  description: "Make smart choices that support long-term prostate health.",
  tips: [
    "Quit smoking or never start",
    "Limit alcohol consumption",
    "Manage stress through meditation or yoga",
    "Get adequate sleep each night"
  ]
},
{
  title: "Early Prevention",
  description: "Take proactive steps to support prostate health.",
  tips: [
    "Consider natural supplements like ProstaVive",
    "Stay hydrated throughout the day",
    "Practice good sexual health",
    "Schedule regular check-ups with your healthcare provider"
  ]
}
]

return (
<article className="max-w-4xl mx-auto px-4 py-8">
  <div className="relative h-[400px] w-full mb-8">
    <Image 
      src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200"
      alt="Young man maintaining an active lifestyle through exercise, crucial for early prostate health maintenance"
      fill
      className="object-cover rounded-xl"
      priority
      sizes="(max-width: 1200px) 100vw, 1200px"
      loading="eager"
    />
  </div>

  <h1 className="text-4xl font-bold mb-6 text-gray-900">Prostate Health for Young Men: Why It Matters Now</h1>

  <p className="text-lg mb-6 text-gray-700 leading-relaxed">
    While prostate health is often associated with older men, taking care of your prostate should start early. 
    Understanding and maintaining prostate health in your younger years can lead to better outcomes later in life. 
    This guide explores why young men should prioritize prostate health and what steps they can take now.
  </p>

  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
    <div className="flex items-start">
      <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
      <div>
        <h2 className="text-xl font-semibold mb-2">Why Start Early?</h2>
        <p className="text-gray-700">
          While serious prostate issues are less common in young men, establishing healthy habits early can significantly 
          reduce your risk of developing problems later in life. Prevention and awareness are key to long-term prostate health.
        </p>
      </div>
    </div>
  </div>

  <h2 className="text-2xl font-semibold mt-8 mb-6">Key Steps for Young Men's Prostate Health</h2>
  
  {preventiveSteps.map((step, index) => (
    <div key={index} className="mb-8 bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
      <p className="text-gray-700 mb-4">{step.description}</p>
      <ul className="space-y-2">
        {step.tips.map((tip, tipIndex) => (
          <li key={tipIndex} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  ))}

  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
    <h2 className="text-2xl font-semibold mb-4">Common Misconceptions</h2>
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-lg mb-2">"I'm too young to worry about prostate health"</h3>
        <p className="text-gray-700">
          Prevention is always better than cure. Establishing healthy habits in your younger years can significantly 
          reduce your risk of developing prostate issues later in life.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">"Prostate problems only affect older men"</h3>
        <p className="text-gray-700">
          While prostate issues are more common in older men, factors affecting prostate health begin accumulating 
          early in life. Young men can experience prostate-related issues too.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">"There's nothing I can do to prevent prostate problems"</h3>
        <p className="text-gray-700">
          Many lifestyle factors and choices made in your younger years can significantly impact your prostate 
          health as you age. Taking action now can make a difference.
        </p>
      </div>
    </div>
  </div>

  <div className="bg-green-50 border border-green-100 rounded-xl p-6 mb-8">
    <h2 className="text-2xl font-semibold mb-4">Start Your Prostate Health Journey with ProstaVive</h2>
    <p className="mb-6 text-gray-700">
      While it's never too early to start caring for your prostate health, it's also never too late. ProstaVive 
      offers a natural, comprehensive approach to supporting prostate health at any age. Our carefully selected 
      ingredients work together to promote optimal prostate function and overall well-being.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <Button asChild className="bg-blue-600 hover:bg-blue-700">
        <Link href="https://prostavivereview.com/api/vsl" className="flex items-center justify-center">
          Learn More About ProstaVive
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
      <Button asChild className="bg-green-600 hover:bg-green-700">
        <Link href="https://prostavivereview.com/api/sale" className="flex items-center justify-center">
          Try ProstaVive Risk-Free
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </div>

  <h2 className="text-2xl font-semibold mt-8 mb-4">When to Seek Medical Advice</h2>
  <p className="mb-4 text-gray-700">
    While prostate issues are less common in young men, it's important to be aware of potential warning signs. 
    Consult a healthcare provider if you experience:
  </p>
  <ul className="list-disc pl-6 mb-6 text-gray-700">
    <li>Difficulty or pain during urination</li>
    <li>Blood in urine or semen</li>
    <li>Pain in the lower back, hips, or pelvic area</li>
    <li>Erectile dysfunction</li>
    <li>Frequent urination, especially at night</li>
  </ul>

  <div className="bg-gray-100 rounded-xl p-6 mb-8">
    <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
    <p className="mb-4 text-gray-700">For more information on prostate health for young men, check out these authoritative sources:</p>
    <ul className="space-y-2">
      <li>
        <a href="https://www.urologyhealth.org/urology-a-z/p/prostate-cancer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
          Prostate Cancer - Urology Care Foundation
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </li>
      <li>
        <a href="https://www.cancer.gov/types/prostate/patient/prostate-prevention-pdq" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
          Prostate Cancer Prevention (PDQ®)–Patient Version - National Cancer Institute
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </li>
      <li>
        <a href="https://www.mayoclinic.org/diseases-conditions/prostatitis/symptoms-causes/syc-20355766" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
          Prostatitis - Mayo Clinic
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </li>
      <li>
        <a href="https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
          Prostate Problems - National Institute of Diabetes and Digestive and Kidney Diseases
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </li>
    </ul>
  </div>

  <div className="mt-8 text-sm text-gray-500">
    <p className="mb-2">* These statements have not been evaluated by the Food and Drug Administration. 
    This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
    <p>Individual results may vary. Consult with your healthcare provider before starting any supplement regimen.</p>
  </div>

  <div className="mt-8 border-t pt-6">
    <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <Link href="/blog/holistic-prostate-health" className="text-blue-600 hover:underline">
          Holistic Prostate Health: Integrating ProstaVive into Your Wellness Routine
        </Link>
      </li>
      <li>
        <Link href="/blog/prostate-friendly-foods-list" className="text-blue-600 hover:underline">
          Prostate-Friendly Foods List: Nourishing Your Prostate Health
        </Link>
      </li>
      <li>
        <Link href="/blog/natural-prostate-remedies" className="text-blue-600 hover:underline">
          Natural Prostate Remedies: A Comprehensive Guide
        </Link>
      </li>
    </ul>
  </div>
  <BlogPostSchema
    title="Prostate Health for Young Men: Why It Matters Now"
    description="Learn why young men should prioritize prostate health and discover preventive measures for long-term prostate wellness."
    datePublished="2024-12-26"
    imageUrl="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200"
    authorName="ProstaVive Team"
  />
</article>
)
}

