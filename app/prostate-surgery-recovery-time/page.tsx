import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prostate Surgery Recovery Time: What to Expect and How to Heal',
  description: 'Comprehensive guide on prostate surgery recovery time. Learn about the healing process, tips for faster recovery, and how to manage post-surgery symptoms.',
  keywords: 'prostate surgery recovery time, prostate surgery healing, post-prostate surgery care, prostate cancer recovery',
}

export default function ProstateSurgeryRecoveryTime() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Prostate Surgery Recovery Time: What to Expect and How to Heal</h1>
      
      <div className="mb-8 relative h-[400px] w-full">
        <Image 
          src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&h=800"
          alt="Medical consultation room showing doctor's desk and equipment, representing a professional healthcare setting for prostate surgery recovery discussion"
          fill
          className="rounded-lg object-cover"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <p className="mb-4">Undergoing prostate surgery can be a significant life event, and understanding the recovery process is crucial for optimal healing. This comprehensive guide will walk you through what to expect during your recovery period, provide tips for faster healing, and offer insights on managing post-surgery symptoms.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Typical Recovery Timeline</h2>
      <p className="mb-4">Recovery time can vary depending on the type of prostate surgery you've undergone and your overall health. Here's a general timeline:</p>
      <ul className="list-disc pl-5 mb-6">
        <li className="mb-2"><strong>1-2 weeks:</strong> Initial recovery period. You'll likely need to rest and avoid strenuous activities.</li>
        <li className="mb-2"><strong>2-4 weeks:</strong> Gradual return to light activities. Many men can return to work if it's not physically demanding.</li>
        <li className="mb-2"><strong>4-6 weeks:</strong> Most men can resume normal activities, but should still avoid heavy lifting.</li>
        <li className="mb-2"><strong>6-8 weeks:</strong> Full recovery for most men. You may be cleared for all activities, including exercise and sexual activity.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Post-Surgery Symptoms</h2>
      <p className="mb-4">After prostate surgery, you may experience several symptoms. Here's how to manage them:</p>
      <ol className="list-decimal pl-5 mb-6">
        <li className="mb-2">
          <strong>Urinary Incontinence:</strong> This is common after surgery and usually improves over time.
          <ul className="list-disc pl-5 mt-2">
            <li>Do pelvic floor exercises (Kegels) to strengthen bladder control</li>
            <li>Use incontinence pads as needed</li>
            <li>Avoid caffeine and alcohol, which can irritate the bladder</li>
          </ul>
        </li>
        <li className="mb-2">
          <strong>Erectile Dysfunction:</strong> This may persist for several months or longer.
          <ul className="list-disc pl-5 mt-2">
            <li>Be patient - function often improves over time</li>
            <li>Discuss medication options with your doctor</li>
            <li>Consider counseling or support groups</li>
          </ul>
        </li>
        <li className="mb-2">
          <strong>Pain or Discomfort:</strong> Some discomfort is normal during recovery.
          <ul className="list-disc pl-5 mt-2">
            <li>Take prescribed pain medications as directed</li>
            <li>Use ice packs to reduce swelling</li>
            <li>Avoid sitting for long periods</li>
          </ul>
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Tips for Faster Recovery</h2>
      <ul className="list-disc pl-5 mb-6">
        <li className="mb-2">Follow your doctor's instructions carefully</li>
        <li className="mb-2">Get plenty of rest, especially in the first few weeks</li>
        <li className="mb-2">Stay hydrated and eat a balanced diet rich in fruits, vegetables, and lean proteins</li>
        <li className="mb-2">Walk regularly to promote circulation and prevent blood clots</li>
        <li className="mb-2">Do pelvic floor exercises as recommended by your doctor</li>
        <li className="mb-2">Avoid heavy lifting and strenuous activities until cleared by your doctor</li>
        <li className="mb-2">Attend all follow-up appointments and be honest about your recovery progress</li>
      </ul>

      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 my-4">
        <p className="font-bold">Remember:</p>
        <p>Every person's recovery is unique. Don't hesitate to contact your healthcare provider if you have concerns or experience unexpected symptoms during your recovery.</p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Supporting Your Prostate Health Post-Surgery</h2>
      <p className="mb-4">After recovering from prostate surgery, maintaining good prostate health is crucial. Consider incorporating a prostate health supplement like ProstaVive into your daily routine to support optimal prostate function and overall well-being.</p>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 my-8">
        <h2 className="text-2xl font-semibold mb-4">Learn More About Prostate Health</h2>
        <p className="mb-4">Watch our educational video to discover how ProstaVive can support your prostate health during recovery and beyond.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
            <Link href="https://prostavivereview.com/api/vsl" className="flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Video Presentation
            </Link>
          </Button>
          <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
            <Link href="https://prostavivereview.com/api/sale" className="flex items-center justify-center">
              Learn More About ProstaVive
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">When to Seek Medical Attention</h2>
      <p className="mb-4">While some discomfort is normal during recovery, contact your doctor immediately if you experience:</p>
      <ul className="list-disc pl-5 mb-6">
        <li className="mb-2">Fever or chills</li>
        <li className="mb-2">Increased pain or swelling</li>
        <li className="mb-2">Heavy bleeding or blood clots in urine</li>
        <li className="mb-2">Inability to urinate</li>
        <li className="mb-2">Signs of infection at the incision site</li>
      </ul>

      <p className="mt-8 text-sm text-gray-600">Disclaimer: This information is for educational purposes only and should not be considered medical advice. Always consult with your healthcare provider for personalized guidance on your recovery process.</p>
    </div>
  )
}

