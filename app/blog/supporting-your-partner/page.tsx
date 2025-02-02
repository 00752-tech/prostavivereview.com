import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function SupportingYourPartner() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Supporting Your Partner's Prostate Health: A Guide for Women</h1>
      
      <div className="relative h-[400px] w-full mb-8">
        <Image 
          src="/images/couple-health-support.jpg" 
          alt="Couple discussing health concerns together"
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>

      <p className="text-lg mb-6">
        As a woman, you play a crucial role in supporting your partner's health, especially when it comes to sensitive issues like prostate health. This guide will help you understand prostate concerns, recognize symptoms, and learn how you can support your partner in maintaining optimal prostate health.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding Prostate Health</h2>
      <p className="mb-4">
        The prostate is a small gland in men that can cause significant health issues as they age. Common problems include enlarged prostate (BPH), prostatitis, and in some cases, prostate cancer. Being informed about these conditions can help you provide better support to your partner.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Signs to Watch For</h2>
      <p className="mb-4">Encourage your partner to see a doctor if you notice:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Frequent urination, especially at night</li>
        <li>Difficulty starting or stopping urination</li>
        <li>Weak urine stream</li>
        <li>Incomplete bladder emptying</li>
        <li>Pain or burning during urination</li>
        <li>Decreased libido or erectile dysfunction</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How You Can Help</h2>
      <ol className="list-decimal pl-6 mb-6">
        <li>Encourage regular check-ups and screenings</li>
        <li>Promote a healthy diet rich in fruits, vegetables, and whole grains</li>
        <li>Support an active lifestyle with regular exercise</li>
        <li>Be open to discussing health concerns</li>
        <li>Consider natural supplements like ProstaVive to support prostate health</li>
      </ol>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">ProstaVive: A Natural Solution</h3>
        <p className="mb-4">
          ProstaVive offers a natural way to support your partner's prostate health. Its carefully selected ingredients work together to promote optimal prostate function and overall well-being.
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="https://prostavivereview.com/api/sale" className="flex items-center">
            Learn More About ProstaVive
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <p className="text-sm text-gray-600 mt-8">
        Remember, open communication and mutual support are key to addressing health concerns together. By being informed and proactive, you can play a significant role in your partner's prostate health and overall well-being.
      </p>
    </article>
  )
}

