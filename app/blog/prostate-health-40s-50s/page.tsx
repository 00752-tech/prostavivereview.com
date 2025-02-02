import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import { BlogPostSchema } from '@/components/BlogPostSchema'

export default function ProstateHealth40s50s() {
  const keyPoints = [
    {
      title: "Regular Check-ups",
      description: "Start annual prostate exams and discuss PSA testing with your doctor.",
      tips: [
        "Schedule yearly physical exams",
        "Discuss family history of prostate issues with your doctor",
        "Consider baseline PSA test in your early 40s",
        "Track any changes in urinary patterns"
      ]
    },
    {
      title: "Diet and Nutrition",
      description: "Adopt a prostate-friendly diet rich in fruits, vegetables, and healthy fats.",
      tips: [
        "Increase intake of tomatoes and lycopene-rich foods",
        "Add more cruciferous vegetables to your diet",
        "Include omega-3 rich fish like salmon",
        "Limit red meat and dairy consumption"
      ]
    },
    {
      title: "Exercise and Lifestyle",
      description: "Maintain an active lifestyle with regular exercise and healthy habits.",
      tips: [
        "Aim for 150 minutes of moderate exercise weekly",
        "Include both cardio and strength training",
        "Practice pelvic floor exercises",
        "Maintain a healthy weight"
      ]
    },
    {
      title: "Stress Management",
      description: "Implement stress-reduction techniques for overall health.",
      tips: [
        "Practice mindfulness or meditation",
        "Get adequate sleep (7-9 hours)",
        "Stay socially connected",
        "Consider yoga or tai chi"
      ]
    }
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative h-[400px] w-full mb-8">
        <Image 
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200"
          alt="Middle-aged man discussing health with a doctor, representing proactive prostate care"
          fill
          className="object-cover rounded-xl"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6">Prostate Health for Men in Their 40s and 50s: A Crucial Guide</h1>

      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        The decades of your 40s and 50s are crucial for establishing and maintaining good prostate health. 
        This comprehensive guide explores essential strategies and preventive measures to ensure optimal 
        prostate function during these vital years.
      </p>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Focus on Prostate Health Now?</h2>
        <p className="text-gray-700 mb-4">
          During your 40s and 50s, the prostate gland may begin to undergo changes that can affect your 
          health and quality of life. Taking proactive steps during these decades can help prevent or 
          minimize future problems and maintain optimal prostate function.
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="https://prostavivereview.com/api/vsl" className="flex items-center">
            Watch Video: Understanding Prostate Health
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-6">Essential Strategies for Prostate Health</h2>
      
      {keyPoints.map((point, index) => (
        <div key={index} className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
          <p className="text-gray-700 mb-4">{point.description}</p>
          <ul className="space-y-2">
            {point.tips.map((tip, tipIndex) => (
              <li key={tipIndex} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="bg-green-50 border border-green-100 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Support Your Prostate Health with ProstaVive</h2>
        <p className="mb-6 text-gray-700">
          In addition to lifestyle changes, ProstaVive offers a natural, scientifically-formulated supplement 
          designed to support optimal prostate function during these crucial years. Our unique blend of 
          ingredients works synergistically to promote prostate health and overall male vitality.
        </p>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="https://prostavivereview.com/api/sale" className="flex items-center">
            Try ProstaVive Risk-Free Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Warning Signs to Watch For</h2>
      <p className="mb-4 text-gray-700">
        While some changes in prostate function are normal with age, certain symptoms warrant medical attention:
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Frequent urination, especially at night</li>
        <li>Difficulty starting or maintaining urination</li>
        <li>Weak urine stream or dribbling</li>
        <li>Pain or burning during urination</li>
        <li>Blood in urine or semen</li>
        <li>Pain in the lower back, hips, or pelvic area</li>
      </ul>

      <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-6 my-8">
        <h3 className="text-xl font-semibold mb-4">When to See a Doctor</h3>
        <p className="text-gray-700">
          If you experience any of these symptoms, consult with your healthcare provider. Early detection 
          and treatment of prostate issues can lead to better outcomes and maintain your quality of life.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
      <p className="mb-6 text-gray-700">
        Taking care of your prostate health in your 40s and 50s is a vital investment in your long-term 
        well-being. By implementing these strategies, staying vigilant about potential symptoms, and 
        considering supportive supplements like ProstaVive, you're taking proactive steps towards 
        maintaining a healthy prostate throughout your life.
      </p>

      <div className="mt-8 text-sm text-gray-500">
        <p className="mb-2">* These statements have not been evaluated by the Food and Drug Administration. 
        This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
        <p>Individual results may vary. Consult with your healthcare provider before starting any new health regimen.</p>
      </div>

      <BlogPostSchema
        title="Prostate Health for Men in Their 40s and 50s: A Crucial Guide"
        description="Learn essential strategies for maintaining optimal prostate health during this crucial age period. Discover preventive measures and proactive steps for a healthier future."
        datePublished="2024-12-27"
        imageUrl="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200"
        authorName="ProstaVive Team"
      />
    </article>
  )
}

