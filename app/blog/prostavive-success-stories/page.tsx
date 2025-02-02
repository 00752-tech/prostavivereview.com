import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Star, Check, FileText } from 'lucide-react'

export default function ProstaViveSuccessStories() {
  const testimonials = [
    {
      name: "John D., 62",
      location: "Florida",
      rating: 5,
      title: "Life-Changing Results",
      content: "After struggling with frequent nighttime bathroom trips for years, ProstaVive has been a game-changer. Within weeks, I noticed a significant reduction in urgency and improved sleep quality. I feel like I've got my life back!"
    },
    {
      name: "Michael S., 58",
      location: "Texas",
      rating: 5,
      title: "Finally Found Relief",
      content: "I've tried numerous prostate supplements, but ProstaVive is the only one that delivered real results. My urinary flow has improved, and I no longer feel constant discomfort. It's been a huge relief, and I highly recommend it to any man dealing with prostate issues."
    },
    {
      name: "Robert L., 65",
      location: "California",
      rating: 5,
      title: "Impressive Improvement",
      content: "As a skeptic, I was pleasantly surprised by ProstaVive. Not only did it help with my prostate symptoms, but I also noticed an increase in energy and overall well-being. The natural ingredients give me peace of mind, and the results speak for themselves."
    }
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative h-[400px] w-full mb-8">
        <Image 
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200"
          alt="Happy, active senior men enjoying life, representing ProstaVive success stories"
          fill
          className="object-cover rounded-xl"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
        <Button asChild className="w-full mb-4 bg-blue-600 hover:bg-blue-700">
          <Link href="https://hop.clickbank.net/?affiliate=smartdiet3&vendor=provive&pid=20&tid=vsl" className="flex items-center justify-center">
            <Play className="mr-2 h-5 w-5" />
            Watch Video: Real ProstaVive Customer Stories
          </Link>
        </Button>
        <p className="text-sm text-blue-600 text-center">
          Discover how ProstaVive has transformed the lives of thousands of men
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-gray-900">ProstaVive Success Stories: Real Customer Experiences</h1>

      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        Nothing speaks louder than real experiences from men who have found relief and improved quality of life with ProstaVive. 
        In this collection of success stories, we share authentic testimonials from customers who have experienced positive 
        changes in their prostate health and overall well-being.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Featured Success Stories</h2>
      <div className="space-y-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="ml-2 text-xl font-semibold">{testimonial.title}</h3>
            </div>
            <p className="mb-4 text-gray-700 italic">"{testimonial.content}"</p>
            <p className="text-sm text-gray-600">{testimonial.name} - {testimonial.location}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 my-12">
        <div className="relative h-[300px]">
          <Image 
            src="https://prostavive.org/home-assets/images/product.png"
            alt="ProstaVive supplement - the choice of thousands of satisfied customers for improved prostate health"
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Customers Choose ProstaVive</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Clinically proven natural ingredients</p>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Noticeable results within weeks</p>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">Improved urinary function and sleep quality</p>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">No reported side effects</p>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">60-day money-back guarantee</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="my-12">
        <h2 className="text-2xl font-semibold mb-6">Watch: ProstaVive Customer Testimonials</h2>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe 
            src="https://www.youtube.com/embed/O9Wp41nSda4" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
          />
        </div>
        <div className="mt-4">
          <Link href="/video-transcript" className="text-blue-600 hover:underline inline-flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            Read Video Transcript
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white my-12">
        <h2 className="text-3xl font-bold mb-4">Join Thousands of Satisfied Customers</h2>
        <p className="mb-6">Experience the ProstaVive difference and reclaim your quality of life</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Button asChild variant="secondary" className="w-full">
            <Link href="https://hop.clickbank.net/?affiliate=smartdiet3&vendor=provive&pid=20&tid=vsl" className="flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Video Presentation
            </Link>
          </Button>
          <Button asChild className="w-full bg-green-600 hover:bg-green-700">
            <Link href="https://hop.clickbank.net/?affiliate=smartdiet3&vendor=provive&tid=vsl" className="flex items-center justify-center">
              Try ProstaVive Risk-Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="text-sm text-gray-500 mt-8">
        <p className="mb-2">* These statements have not been evaluated by the Food and Drug Administration. 
        This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
        <p>Individual results may vary. The testimonials featured are examples of real customer experiences, 
        but are not intended to represent or guarantee that anyone will achieve the same or similar results.</p>
      </div>
    </article>
  )
}

