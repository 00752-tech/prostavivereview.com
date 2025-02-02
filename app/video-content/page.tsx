import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Video Content | ProstaVive',
  description: 'Watch expert videos about prostate health, natural remedies, and maintaining prostate wellness as you age.',
}

const videos = [
  {
    slug: "prostate-health-over-50",
    title: "Prostate Health for Men Over 50: Expert Video Guide",
    description: "Watch our expert video on prostate health for men over 50. Learn about prevention, symptoms, and treatment options for common prostate issues.",
    date: "2024-12-20",
    thumbnail: "https://img.youtube.com/vi/WnF3ozjMM7I/maxresdefault.jpg"
  },
  {
    slug: "natural-prostate-remedies",
    title: "Natural Prostate Remedies: Expert Video Guide",
    description: "Discover effective natural remedies for prostate health in our expert video guide. Learn about herbs, supplements, and lifestyle changes for better prostate function.",
    date: "2024-12-19",
    thumbnail: "https://img.youtube.com/vi/vx42_D5bTas/maxresdefault.jpg"
  }
]

export default function VideoContent() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Video Content</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <Card key={video.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
            <Link href={`/video-content/${video.slug}`}>
              <div className="relative h-48 w-full">
                <Image 
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1">
                  <Video className="h-5 w-5 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2 hover:text-blue-600 transition-colors">
                  {video.title}
                </CardTitle>
                <CardDescription>{video.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-2">{video.description}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

