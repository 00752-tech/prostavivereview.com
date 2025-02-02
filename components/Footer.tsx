import Link from 'next/link'
import { YouTubeDisclaimer } from '@/components/YouTubeDisclaimer'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-bold">ProstaVive</Link>
            <p className="text-gray-400 text-sm max-w-md">
              Supporting men's prostate health naturally with clinically proven ingredients. Our mission is to help men maintain optimal prostate function and improve their quality of life through science-backed natural solutions.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/" className="text-base text-gray-300 hover:text-white">Home</Link></li>
                  <li><Link href="/prostate-cancer" className="text-base text-gray-300 hover:text-white">Prostate Cancer</Link></li>
                  <li><Link href="/bph" className="text-base text-gray-300 hover:text-white">BPH</Link></li>
                  <li><Link href="/natural-remedies" className="text-base text-gray-300 hover:text-white">Natural Remedies</Link></li>
                  <li><Link href="/blog" className="text-base text-gray-300 hover:text-white">Blog</Link></li>
                  <li><Link href="/calculators" className="text-base text-gray-300 hover:text-white">Calculators</Link></li>
                  <li><Link href="/faq" className="text-base text-gray-300 hover:text-white">FAQ</Link></li>
                  <li><Link href="/about" className="text-base text-gray-300 hover:text-white">About</Link></li>
                  <li><Link href="/contact" className="text-base text-gray-300 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/privacy-policy" className="text-base text-gray-300 hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="text-base text-gray-300 hover:text-white">Terms of Service</Link></li>
                  <li><Link href="/disclaimer" className="text-base text-gray-300 hover:text-white">Disclaimer</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="text-base text-gray-400">
            <p className="mb-4">
              © 2025 ProstaViveReview.com. All rights reserved.
            </p>
            <p className="mb-4">
              <strong>Medical Disclaimer:</strong> The information provided on this website is for general informational purposes only and is not intended as, nor should it be considered a substitute for, professional medical advice. Do not use the information on this website for diagnosing or treating any medical or health condition. If you have or suspect you have a medical problem, promptly contact your professional healthcare provider.
            </p>
            <p className="mb-4">
              <strong>FDA Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p className="mb-4">
              <strong>Affiliate Disclaimer:</strong> This website contains affiliate links, which means we may receive a commission if you click a link and purchase something that we have recommended. While clicking these links won't cost you any extra money, they will help us keep this site up and running. Please check out our disclosure policy for more details. Thank you for your support!
            </p>
            <p>
              <strong>Results Disclaimer:</strong> Individual results may vary. The testimonials featured on this site are examples of results some people have achieved, but are not intended to represent or guarantee that anyone will achieve the same or similar results.
            </p>
          </div>
        </div>
      <YouTubeDisclaimer />
      </div>
    </footer>
  )
}

