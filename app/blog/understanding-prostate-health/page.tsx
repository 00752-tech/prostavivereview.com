import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, FileText } from 'lucide-react'

export default function UnderstandingProstateHealth() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative h-[400px] w-full mb-8">
        <Image 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200"
          alt="Senior man consulting with doctor about prostate health - medical consultation and preventive healthcare"
          fill
          className="object-cover rounded-xl"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
        <Button asChild className="w-full mb-4 bg-blue-600 hover:bg-blue-700">
          <Link href="https://prostavivereview.com/api/vsl" className="flex items-center justify-center">
            <Play className="mr-2 h-5 w-5" />
            Watch Video: The ProstaVive Solution
          </Link>
        </Button>
        <p className="text-sm text-blue-600 text-center">
          Learn how ProstaVive is helping thousands of men improve their prostate health
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-gray-900">Understanding Prostate Health: A Guide for Men</h1>

      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        Prostate health is a crucial aspect of men's overall well-being. As men age, the prostate gland can undergo changes 
        that may lead to various health issues. In this comprehensive guide, we'll explore the importance of prostate health, 
        common problems that can arise, and steps you can take to maintain a healthy prostate.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">What is the Prostate?</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-gray-700 leading-relaxed">
            The prostate is a small, walnut-sized gland located just below the bladder in men. It plays a vital role in 
            reproductive health by producing seminal fluid, which nourishes and transports sperm. As men age, the prostate 
            can undergo changes that may lead to various health concerns.
          </p>
        </div>
        <div className="relative h-[250px]">
          <Image 
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800"
            alt="Medical illustration showing prostate gland location and anatomy"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Common Prostate Issues</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Benign Prostatic Hyperplasia (BPH)</h3>
          <p className="text-gray-700">
            BPH is a non-cancerous enlargement of the prostate gland, often leading to urinary symptoms such as frequent 
            urination and weak flow.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Prostatitis</h3>
          <p className="text-gray-700">
            Inflammation of the prostate gland that can cause pain and urinary symptoms, affecting men of all ages.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Prostate Cancer</h3>
          <p className="text-gray-700">
            One of the most common cancers in men, requiring regular screening for early detection and treatment.
          </p>
        </div>
      </div>

      <div className="my-12">
        <div className="relative h-[300px] mb-6">
          <Image 
            src="https://prostavive.org/home-assets/images/product.png"
            alt="ProstaVive natural prostate supplement - clinically proven ingredients for optimal prostate health"
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Support Your Prostate Health Naturally</h2>
          <p className="mb-6 text-gray-700">
            ProstaVive combines nature's most powerful ingredients to support optimal prostate function and overall male health.
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="https://prostavivereview.com/api/sale" className="flex items-center">
              Try ProstaVive Risk-Free Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="my-12">
        <h2 className="text-2xl font-semibold mb-6">Watch: Real Customer Reviews</h2>
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
        <h2 className="text-3xl font-bold mb-4">Take Control of Your Prostate Health Today</h2>
        <p className="mb-6">Join thousands of men who have discovered the natural power of ProstaVive</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Button asChild variant="secondary" className="w-full">
            <Link href="https://prostavivereview.com/api/vsl" className="flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Video Presentation
            </Link>
          </Button>
          <Button asChild className="w-full bg-green-600 hover:bg-green-700">
            <Link href="https://prostavivereview.com/api/sale" className="flex items-center justify-center">
              Claim Special Offer Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="text-sm text-gray-500 mt-8">
        <p className="mb-2">* These statements have not been evaluated by the Food and Drug Administration. 
        This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
        <p>Individual results may vary. Consult your healthcare provider before starting any supplement regimen.</p>
      </div>
      <div className="mt-8 border-t pt-6">
        <h2 className="text-2xl font-semibold mb-4">Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Prostate Problems - National Institute of Diabetes and Digestive and Kidney Diseases
            </a>
          </li>
          <li>
            <a href="https://www.cancer.gov/types/prostate" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Prostate Cancer - National Cancer Institute
            </a>
          </li>
          <li>
            <a href="https://www.cdc.gov/cancer/prostate/basic_info/index.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Basic Information About Prostate Cancer - Centers for Disease Control and Prevention (CDC)
            </a>
          </li>
        </ul>
      </div>
    </article>
  )
}

