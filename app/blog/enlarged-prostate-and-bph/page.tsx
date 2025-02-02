import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function EnlargedProstateAndBPH() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Understanding Enlarged Prostate and BPH: A Guide for Men Over 40</h1>
      
      <div className="relative h-[400px] w-full mb-8">
        <Image 
          src="/images/enlarged-prostate-diagram.jpg" 
          alt="Diagram showing normal prostate vs enlarged prostate"
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>

      <p className="text-lg mb-6">
        As men age, particularly after 40, the risk of developing an enlarged prostate or Benign Prostatic Hyperplasia (BPH) increases significantly. This comprehensive guide will help you understand the condition, recognize its symptoms, and explore treatment options, including how ProstaVive can support your prostate health.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">What is BPH?</h2>
      <p className="mb-4">
        Benign Prostatic Hyperplasia (BPH) is a non-cancerous enlargement of the prostate gland. It's a common condition that affects many men as they age, with symptoms typically starting to appear after the age of 40.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Common Symptoms of BPH</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Frequent urination, especially at night</li>
        <li>Difficulty starting urination</li>
        <li>Weak urine stream or a stream that stops and starts</li>
        <li>Dribbling at the end of urination</li>
        <li>Inability to completely empty the bladder</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How ProstaVive Can Help</h2>
      <p className="mb-6">
        ProstaVive is specifically formulated to support prostate health and may help alleviate symptoms associated with BPH. Our natural blend of ingredients works to:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Support normal prostate size</li>
        <li>Promote healthy urinary flow</li>
        <li>Reduce nighttime urination frequency</li>
        <li>Enhance overall prostate function</li>
      </ul>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Take Control of Your Prostate Health</h3>
        <p className="mb-4">
          Don't let BPH symptoms impact your quality of life. ProstaVive offers a natural, effective solution to support your prostate health and overall well-being.
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="https://prostavivereview.com/api/sale" className="flex items-center">
            Try ProstaVive Risk-Free Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <p className="text-sm text-gray-600 mt-8">
        Remember, while ProstaVive can support prostate health, it's important to consult with a healthcare professional if you're experiencing symptoms of BPH. Regular check-ups and prostate screenings are crucial for men over 40.
      </p>
    </article>
  )
}

