import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | ProstaVive',
  description: 'Find answers to common questions about prostate health, exams, symptoms, and ProstaVive supplements.',
}

export default function FAQPage() {
  const faqs = [
    {
      question: "What is ProstaVive?",
      answer: "ProstaVive is a natural prostate health supplement designed to support optimal prostate function and overall male health. It contains a blend of clinically-proven ingredients that work synergistically to promote prostate health."
    },
    {
      question: "What are common symptoms of prostate issues?",
      answer: "Common symptoms include frequent urination (especially at night), weak urine flow, difficulty starting or stopping urination, and in some cases, pain or discomfort in the pelvic area. If you experience these symptoms, it's important to consult with a healthcare professional."
    },
    {
      question: "How often should I have a prostate exam?",
      answer: "The frequency of prostate exams depends on various factors, including age and risk factors. Generally, men should start discussing prostate screening with their doctor at age 50, or earlier if they have risk factors like family history. Your doctor can provide personalized recommendations."
    },
    {
      question: "Can lifestyle changes improve prostate health?",
      answer: "Yes, certain lifestyle changes can support prostate health. These include maintaining a healthy diet rich in fruits and vegetables, regular exercise, limiting alcohol consumption, and managing stress. Supplements like ProstaVive can also complement a healthy lifestyle."
    },
    {
      question: "How long does it take to see results with ProstaVive?",
      answer: "While individual experiences may vary, many users report noticeable improvements in urinary symptoms and overall prostate health within 4-6 weeks of consistent use. For optimal results, we recommend using ProstaVive for at least 3 months."
    },
    {
      question: "Are there any side effects of using ProstaVive?",
      answer: "ProstaVive is made with natural ingredients and is generally well-tolerated. However, as with any supplement, some individuals may experience mild side effects. If you have any concerns, we recommend consulting with your healthcare provider before starting any new supplement regimen."
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="mb-4">Have more questions about ProstaVive or prostate health?</p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}

