import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Prostate Exam Preparation: What to Expect and How to Prepare',
  description: 'Comprehensive guide on preparing for a prostate exam. Learn what to expect, how to prepare, and why regular screenings are crucial for men&apos;s health.',
  keywords: 'prostate exam preparation, prostate screening, PSA test, digital rectal exam, men\'s health',
}

export default function ProstateExamPreparation() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Prostate Exam Preparation: What to Expect and How to Prepare</h1>
      
      <div className="mb-8">
        <Image 
          src="/images/prostate-exam-preparation.jpg" 
          alt="Doctor discussing prostate exam with patient" 
          width={800} 
          height={400} 
          className="rounded-lg"
        />
      </div>

      <p className="mb-4">Prostate exams are a crucial part of men's health, especially as they age. Understanding what to expect and how to prepare can help alleviate anxiety and ensure a smooth experience. This guide will walk you through the process, types of exams, and steps you can take to prepare.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Prostate Exams</h2>
      <ol className="list-decimal pl-5 mb-6">
        <li className="mb-2"><strong>Digital Rectal Exam (DRE):</strong> A physical examination where the doctor checks the prostate gland for any abnormalities.</li>
        <li className="mb-2"><strong>Prostate-Specific Antigen (PSA) Test:</strong> A blood test that measures the level of PSA in your bloodstream.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How to Prepare for Your Prostate Exam</h2>
      <ul className="list-disc pl-5 mb-6">
        <li className="mb-2">Inform your doctor about any medications you're taking, including supplements.</li>
        <li className="mb-2">Avoid ejaculation for 48 hours before the exam if you're having a PSA test.</li>
        <li className="mb-2">Empty your bladder before the exam for comfort.</li>
        <li className="mb-2">Wear comfortable, loose-fitting clothing.</li>
        <li className="mb-2">Try to relax and take deep breaths to reduce anxiety.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">What to Expect During the Exam</h2>
      <p className="mb-4">For a Digital Rectal Exam (DRE):</p>
      <ol className="list-decimal pl-5 mb-6">
        <li className="mb-2">You'll be asked to remove clothing from the waist down.</li>
        <li className="mb-2">You'll be positioned either standing and bending forward or lying on your side with knees bent.</li>
        <li className="mb-2">The doctor will gently insert a gloved, lubricated finger into your rectum.</li>
        <li className="mb-2">The exam usually lasts less than a minute.</li>
      </ol>

      <p className="mb-4">For a PSA Test:</p>
      <ol className="list-decimal pl-5 mb-6">
        <li className="mb-2">A small blood sample will be taken from your arm.</li>
        <li className="mb-2">The sample is sent to a laboratory for analysis.</li>
        <li className="mb-2">Results are usually available within a few days.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">After the Exam</h2>
      <p className="mb-4">After your prostate exam, you can immediately return to your normal activities. Your doctor will discuss the results with you and recommend any necessary follow-up steps.</p>

      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 my-4">
        <p className="font-bold">Remember:</p>
        <p>Regular prostate exams are crucial for early detection of prostate issues. Don't hesitate to discuss any concerns with your healthcare provider.</p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Supporting Your Prostate Health</h2>
      <p className="mb-4">While regular check-ups are essential, maintaining good prostate health year-round is equally important. Consider incorporating a prostate health supplement like ProstaVive into your daily routine to support optimal prostate function.</p>

      <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
        <Link href="https://prostavivereview.com/api/sale">Learn More About ProstaVive</Link>
      </Button>
    </div>
  )
}

