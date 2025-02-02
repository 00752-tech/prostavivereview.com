import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About ProstaVive | Natural Prostate Health Supplement Company',
  description: 'Learn about ProstaVive, a leading natural prostate health supplement company. Discover our mission, research team, and commitment to men\'s health through clinically-proven ingredients.',
  openGraph: {
    title: 'About ProstaVive | Natural Prostate Health Supplement Company',
    description: 'Learn about ProstaVive, a leading natural prostate health supplement company. Discover our mission, research team, and commitment to men\'s health through clinically-proven ingredients.',
    images: [{
      url: 'https://prostavive.org/home-assets/images/product.png',
      width: 1200,
      height: 630,
      alt: 'ProstaVive natural prostate health supplement'
    }]
  }
}

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About ProstaVive: Revolutionizing Prostate Health</h1>
      

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-6">
          At ProstaVive, we're on a mission to empower men to take control of their prostate health and reclaim their vitality. We believe that every man deserves to live life to the fullest, free from the burdens of prostate issues.
        </p>
        <p className="text-lg mb-6">
          Our revolutionary supplement is more than just a product – it's a commitment to your well-being, backed by cutting-edge science and the power of nature.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The ProstaVive Story</h2>
        <p className="text-lg mb-6">
          Founded by a team of dedicated health experts and researchers, ProstaVive was born out of a simple yet powerful idea: that men deserve a natural, effective solution to prostate problems.
        </p>
        <p className="text-lg mb-6">
          We've seen too many men suffer in silence, their quality of life diminished by nagging prostate issues. That's why we've dedicated ourselves to creating a formula that truly works, combining the best of nature with the latest scientific advancements.
        </p>
      </section>

      <section className="mb-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">The ProstaVive Difference</h2>
        <ul className="space-y-4">
          {[
            "Clinically proven ingredients in their most potent forms",
            "A unique blend that targets multiple aspects of prostate health",
            "Rigorous quality control and third-party testing",
            "Manufactured in FDA-registered, GMP-certified facilities in the USA",
            "Free from artificial additives, fillers, or harmful chemicals"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Commitment to You</h2>
        <p className="text-lg mb-6">
          At ProstaVive, we're not just selling a product – we're offering a pathway to better health and improved quality of life. We stand behind our formula with a 60-day, 100% money-back guarantee. If you don't feel a difference, we don't want your money. It's that simple.
        </p>
        <p className="text-lg mb-6">
          We're committed to ongoing research and development, ensuring that ProstaVive remains at the forefront of prostate health solutions. Your well-being is our top priority, and we're dedicated to supporting you every step of the way on your journey to optimal prostate health.
        </p>
      </section>

      <div className="bg-green-50 border border-green-100 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Join the ProstaVive Revolution</h2>
        <p className="text-lg mb-6">
          Don't let prostate problems control your life. With ProstaVive, you can take charge of your health and enjoy life to the fullest. Experience the power of ProstaVive for yourself and join thousands of men who have already transformed their prostate health.
        </p>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="https://prostavivereview.com/api/sale" className="flex items-center">
            Try ProstaVive Risk-Free Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      <p className="text-sm text-gray-600 mt-8">
        Remember, your health is your most valuable asset. Invest in it wisely with ProstaVive.
      </p>
    </div>
  )
}

