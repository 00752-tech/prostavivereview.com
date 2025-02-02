import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Benign Prostatic Hyperplasia (BPH) Information | ProstaVive',
  description: 'Learn about BPH symptoms, diagnosis, and treatment options. Discover how ProstaVive supports prostate health for men with BPH.',
}

export default function BPHPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Benign Prostatic Hyperplasia (BPH) Information</h1>
      <p className="mb-4">Benign Prostatic Hyperplasia, or BPH, is a common condition in men as they age. Understanding BPH and its management is crucial for maintaining quality of life.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Key Topics</h2>
      <ul className="list-disc pl-5 mb-6">
        <li><Link href="/blog/natural-prostate-remedies" className="text-blue-600 hover:underline">Natural Prostate Remedies</Link></li>
        <li><Link href="/blog/prostate-friendly-foods-list" className="text-blue-600 hover:underline">Prostate-Friendly Foods</Link></li>
        <li><Link href="/blog/prostate-health-supplements" className="text-blue-600 hover:underline">Prostate Health Supplements</Link></li>
      </ul>

      <p className="mb-4">Discover how ProstaVive's natural formula can help support prostate health and potentially alleviate BPH symptoms.</p>

      <Button asChild className="bg-blue-600 hover:bg-blue-700">
        <Link href="https://prostavivereview.com/api/vsl">Learn About ProstaVive for BPH</Link>
      </Button>
    </div>
  )
}

