import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Prostate Cancer Information | ProstaVive',
  description: 'Learn about prostate cancer symptoms, diagnosis, and treatment options. Discover how ProstaVive supports prostate health.',
}

export default function ProstateCancerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Prostate Cancer Information</h1>
      <p className="mb-4">Prostate cancer is one of the most common cancers affecting men. Early detection and proper management are crucial for successful treatment.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Key Topics</h2>
      <ul className="list-disc pl-5 mb-6">
        <li><Link href="/blog/prostate-cancer-symptoms" className="text-blue-600 hover:underline">Prostate Cancer Symptoms</Link></li>
        <li><Link href="/prostate-exam-preparation" className="text-blue-600 hover:underline">Prostate Exam Preparation</Link></li>
        <li><Link href="/blog/prostate-health-supplements" className="text-blue-600 hover:underline">Prostate Health Supplements</Link></li>
      </ul>

      <p className="mb-4">Learn how ProstaVive can support your prostate health as part of a comprehensive approach to prostate cancer prevention and management.</p>

      <Button asChild className="bg-blue-600 hover:bg-blue-700">
        <Link href="https://prostavivereview.com/api/vsl">Watch ProstaVive Video Presentation</Link>
      </Button>
    </div>
  )
}

