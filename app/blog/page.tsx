'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Video } from 'lucide-react'
import { useState } from 'react'

const blogPosts = [
{
  slug: "prostate-health-40s-50s",
  title: "Prostate Health for Men in Their 40s and 50s: A Crucial Guide",
  description: "Learn essential strategies for maintaining optimal prostate health during this crucial age period. Discover preventive measures and proactive steps for a healthier future.",
  date: "2024-12-27",
  image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&h=400",
  alt: "Middle-aged man discussing health with a doctor, representing proactive prostate care"
},
{
  slug: "prostate-health-young-men",
  title: "Prostate Health for Young Men: Why It Matters Now",
  description: "Learn why young men should prioritize prostate health and discover preventive measures for long-term prostate wellness.",
  date: "2024-12-26",
  image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&h=400",
  alt: "Young man maintaining an active lifestyle for prostate health"
},
{
  slug: "holistic-prostate-health",
  title: "Holistic Prostate Health: Integrating ProstaVive into Your Wellness Routine",
  description: "Discover how to take a holistic approach to prostate health by combining ProstaVive with lifestyle changes, diet, and natural remedies.",
  date: "2024-12-25",
  image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&h=400",
  alt: "Holistic health concept with natural ingredients and wellness items"
},
{
  slug: "natural-prostate-remedies",
  title: "Natural Prostate Remedies: A Comprehensive Guide",
  description: "Explore effective natural remedies for supporting prostate health and managing common prostate conditions.",
  date: "2024-12-24",
  image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&h=400",
  alt: "Various natural herbs and supplements used for prostate health"
},
{
  slug: "prostate-friendly-foods-list",
  title: "Prostate Friendly Foods List: Nourishing Your Prostate Health",
  description: "Discover a comprehensive list of foods that support prostate health and learn how to incorporate them into your diet.",
  date: "2024-12-23",
  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&h=400",
  alt: "A colorful array of fruits, vegetables, nuts, and fish that are beneficial for prostate health"
},
{
  slug: "prostate-cancer-symptoms",
  title: "Prostate Cancer Symptoms: Early Detection and When to Seek Help",
  description: "Learn about the common symptoms of prostate cancer, risk factors, and when to consult a healthcare professional.",
  date: "2024-12-22",
  image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&h=400",
  alt: "Prostate cancer awareness ribbon and stethoscope"
},
{
  slug: "prostate-health-supplements",
  title: "Prostate Health Supplements: A Comprehensive Guide",
  description: "Explore popular prostate health supplements, their potential benefits, and how to choose the right one for you.",
  date: "2024-12-21",
  image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=800&h=400",
  alt: "Various prostate health supplements and natural ingredients"
},
{
  slug: "understanding-prostate-health",
  title: "Understanding Prostate Health: A Guide for Men",
  description: "Learn about prostate health, common issues, and preventive measures in this comprehensive guide for men's health.",
  date: "2024-12-24",
  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
  alt: "Senior man discussing prostate health with medical professional, demonstrating the importance of regular check-ups"
},
{
  slug: "prostavive-vs-other-supplements",
  title: "ProstaVive vs. Other Prostate Supplements: An In-Depth Comparison",
  description: "Compare ProstaVive with other prostate supplements and discover what makes it stand out in the market.",
  date: "2024-01-14",
  image: "https://prostavive.org/home-assets/images/bottles.png",
  alt: "ProstaVive supplement bottles showing premium natural prostate support formula"
},
{
  slug: "diet-lifestyle-prostate-health",
  title: "The Impact of Diet and Lifestyle on Prostate Health",
  description: "Explore how diet and lifestyle choices affect prostate health and learn practical tips for maintaining optimal prostate function.",
  date: "2024-01-13",
  image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800",
  alt: "Healthy Mediterranean diet foods beneficial for prostate health including nuts, vegetables, and olive oil"
},
// Video content
{
  slug: "video-content/prostate-health-over-50",
  title: "Prostate Health for Men Over 50: Expert Video Guide",
  description: "Watch our expert video on prostate health for men over 50. Learn about prevention, symptoms, and treatment options for common prostate issues.",
  date: "2024-12-20",
  image: "https://img.youtube.com/vi/WnF3ozjMM7I/maxresdefault.jpg",
  alt: "Thumbnail for Prostate Health for Men Over 50 video",
  isVideo: true
},
{
  slug: "video-content/natural-prostate-remedies",
  title: "Natural Prostate Remedies: Expert Video Guide",
  description: "Discover effective natural remedies for prostate health in our expert video guide. Learn about herbs, supplements, and lifestyle changes for better prostate function.",
  date: "2024-12-19",
  image: "https://img.youtube.com/vi/vx42_D5bTas/maxresdefault.jpg",
  alt: "Thumbnail for Natural Prostate Remedies video",
  isVideo: true
}
];

export default function Blog() {
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({})

  const handleImageError = (slug: string) => {
    setImageError(prev => ({
      ...prev,
      [slug]: true
    }))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">ProstaVive Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover expert insights, tips, and information about prostate health. Learn about natural remedies, prevention strategies, and maintaining your vitality as you age.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="hover:shadow-lg transition-all duration-300">
            <Link href={post.isVideo ? `/${post.slug}` : `/blog/${post.slug}`}>
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image 
                  src={imageError[post.slug] ? "/placeholder.svg?height=400&width=600" : post.image}
                  alt={post.alt}
                  fill
                  className="object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
                  onError={() => handleImageError(post.slug)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={post.slug === "prostate-cancer-symptoms"}
                  quality={85}
                />
                {post.isVideo && (
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1">
                    <Video className="h-5 w-5 text-white" />
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-2">{post.description}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

