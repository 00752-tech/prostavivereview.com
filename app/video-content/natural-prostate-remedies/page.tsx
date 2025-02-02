import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, FileText, ExternalLink } from 'lucide-react'
import { YouTubeDisclaimer } from '@/components/YouTubeDisclaimer'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Image from 'next/image'
import { VideoSchema } from '@/components/VideoSchema'

export const metadata: Metadata = {
  title: 'Natural Prostate Remedies: Expert Video Guide',
  description: 'Watch our expert video on natural remedies for prostate health. Learn about herbs, supplements, and lifestyle changes for better prostate function.',
  openGraph: {
    title: 'Natural Prostate Remedies: Expert Video Guide',
    description: 'Watch our expert video on natural remedies for prostate health. Learn about herbs, supplements, and lifestyle changes for better prostate function.',
    type: 'video.other',
    url: 'https://prostavivereview.com/video-content/natural-prostate-remedies',
    videos: [{ url: 'https://www.youtube.com/watch?v=vx42_D5bTas' }],
  },
}

export default function NaturalProstateRemediesVideo() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Videos', href: '/video-content' },
        { label: 'Natural Prostate Remedies', href: '/video-content/natural-prostate-remedies' }
      ]} />

      <article className="mt-6 space-y-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Natural Prostate Remedies: Expert Video Guide</h1>
          <p className="text-gray-600">Published on December 27, 2024</p>
        </header>

        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8 mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Discover powerful natural remedies for supporting prostate health in this comprehensive video guide. 
            Learn about scientifically-backed herbs, supplements, and lifestyle changes that can make a real 
            difference in your prostate health journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="#video" className="flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/video-content/natural-prostate-remedies/transcript" className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Read Transcript
              </Link>
            </Button>
          </div>
        </div>

        <div id="video" className="space-y-8">
          <div className="relative aspect-video mb-8">
            <Image
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200"
              alt="Natural herbs and supplements for prostate health"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/vx42_D5bTas"
              title="Natural Prostate Remedies"
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
              <h3 className="font-semibold text-lg">Natural Remedies</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-medium">•</span>
                  Powerful herbs for prostate health
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium">•</span>
                  Essential nutrients and supplements
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium">•</span>
                  Scientific research behind natural remedies
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Lifestyle Modifications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-medium">•</span>
                  Diet and nutrition tips
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium">•</span>
                  Exercise recommendations
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium">•</span>
                  Stress management techniques
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 my-12">
          <h2 className="text-2xl font-semibold mb-6">Support Your Prostate Health Naturally</h2>
          <p className="mb-6 text-gray-700">
            Enhance your prostate health with ProstaVive's natural, scientifically-formulated supplement. 
            Our unique blend of ingredients works in harmony with the natural remedies discussed in this video.
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
              href="https://www.nccih.nih.gov/health/prostate-disease" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-blue-600 hover:underline"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Prostate Disease - National Center for Complementary and Integrative Health
            </a>
            <a 
              href="https://www.mayoclinic.org/diseases-conditions/prostate-cancer/in-depth/prostate-cancer-prevention/art-20045641" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-blue-600 hover:underline"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Prostate Cancer Prevention - Mayo Clinic
            </a>
          </div>
        </section>
      </article>

      <VideoSchema
        name="Natural Prostate Remedies: Expert Video Guide"
        description="Watch our expert video on natural remedies for prostate health. Learn about herbs, supplements, and lifestyle changes for better prostate function."
        thumbnailUrl="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200"
        uploadDate="2024-12-27"
        contentUrl="https://www.youtube.com/watch?v=vx42_D5bTas"
      />
    </div>
  )
}

