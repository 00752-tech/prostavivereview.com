import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, FileText, ExternalLink } from 'lucide-react'
import { YouTubeDisclaimer } from '@/components/YouTubeDisclaimer'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Image from 'next/image'
import { VideoSchema } from '@/components/VideoSchema'

export const metadata: Metadata = {
  title: 'Prostate Health for Men Over 50 | Expert Video Guide',
  description: 'Watch our expert video on prostate health for men over 50. Learn about prevention, symptoms, and treatment options for common prostate issues.',
  openGraph: {
    title: 'Prostate Health for Men Over 50 | Expert Video Guide',
    description: 'Watch our expert video on prostate health for men over 50. Learn about prevention, symptoms, and treatment options for common prostate issues.',
    type: 'video.other',
    url: 'https://prostavivereview.com/video-content/prostate-health-over-50',
    videos: [{ url: 'https://www.youtube.com/watch?v=WnF3ozjMM7I' }],
  },
}

export default function ProstateHealthOver50Video() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Videos', href: '/video-content' },
        { label: 'Prostate Health Over 50', href: '/video-content/prostate-health-over-50' }
      ]} />

      <article className="mt-6 space-y-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Prostate Health for Men Over 50: Expert Video Guide</h1>
          <p className="text-gray-600">Published on December 26, 2024</p>
        </header>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-12">
          <p className="text-lg text-gray-700 mb-6">
            In this comprehensive video guide from leading medical experts, discover essential information about 
            prostate health for men over 50. Learn about warning signs, preventive measures, and when to seek 
            professional medical attention.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="#video" className="flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/video-content/prostate-health-over-50/transcript" className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Read Transcript
              </Link>
            </Button>
          </div>
        </div>

        <div id="video" className="space-y-8">
          <div className="relative aspect-video mb-8">
            <Image
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200"
              alt="Medical consultation room showing doctor's desk and equipment"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/WnF3ozjMM7I"
              title="Prostate Health for Men Over 50"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <YouTubeDisclaimer />

        <section className="bg-white rounded-xl shadow-md p-8 my-12">
          <h2 className="text-2xl font-semibold mb-6">Key Topics Covered</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Understanding Prostate Health</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-medium">•</span>
                  The role of the prostate gland
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium">•</span>
                  Common prostate conditions after 50
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium">•</span>
                  Risk factors and prevention strategies
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Proactive Health Measures</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-medium">•</span>
                  Regular screening recommendations
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium">•</span>
                  Lifestyle modifications for better health
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium">•</span>
                  When to seek medical attention
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8 my-12">
          <h2 className="text-2xl font-semibold mb-6">Take Action for Your Prostate Health</h2>
          <p className="mb-6 text-gray-700">
            Don't wait for symptoms to appear. Support your prostate health naturally with ProstaVive's 
            scientifically-formulated supplement, designed specifically for men over 50.
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="https://prostavivereview.com/api/sale" className="flex items-center">
              Try ProstaVive Risk-Free Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
          <div className="space-y-4">
            <a 
              href="https://www.nih.gov/health-information/mens-health" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-blue-600 hover:underline"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Men's Health Resources - National Institutes of Health
            </a>
            <a 
              href="https://www.cdc.gov/cancer/prostate/basic_info/symptoms.htm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-blue-600 hover:underline"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Prostate Cancer Symptoms - CDC
            </a>
          </div>
        </section>
      </article>

      <VideoSchema
        name="Prostate Health for Men Over 50: Expert Video Guide"
        description="Watch our expert video on prostate health for men over 50. Learn about prevention, symptoms, and treatment options for common prostate issues."
        thumbnailUrl="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200"
        uploadDate="2024-12-26"
        contentUrl="https://www.youtube.com/watch?v=WnF3ozjMM7I"
      />
    </div>
  )
}

