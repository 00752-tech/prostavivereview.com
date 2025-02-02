import Link from 'next/link'

export default function TermsOfUse() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
      <p className="mb-4">Last updated: December 26, 2024</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using the ProstaVive website, including our health calculators, you agree to be bound by these Terms of Use.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Health Calculators</h2>
      <p className="mb-4">
        The health calculators provided on this website are for informational purposes only. They do not constitute medical advice, diagnosis, or treatment. The results are based on general statistics and may not apply to every individual.
      </p>
      <p className="mb-4">
        You should not rely on these calculators as a substitute for professional medical advice. Always consult with a qualified healthcare provider for personalized medical advice, diagnosis, or treatment.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Disclaimer of Warranties</h2>
      <p className="mb-4">
        The information and services provided on this website, including the health calculators, are provided "as is" without any warranties, expressed or implied. ProstaVive does not warrant the accuracy, completeness, or usefulness of this information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Limitation of Liability</h2>
      <p className="mb-4">
        ProstaVive and its affiliates shall not be liable for any damages or injury resulting from your access to, or inability to access, this website or from your reliance on any information or services provided herein, including the health calculators.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify or replace these Terms at any time. Your continued use of the website after any changes constitutes acceptance of the new Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at{' '}
        <Link href="mailto:passiveincomestreaming@gmail.com" className="text-blue-600 hover:underline">
          passiveincomestreaming@gmail.com
        </Link>.
      </p>
    </div>
  )
}

