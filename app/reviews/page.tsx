import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ProstaVive Reviews - Real Customer Experiences',
  description: 'Read real ProstaVive reviews from customers who have experienced the benefits. Discover how ProstaVive has helped improve prostate health and overall well-being.',
}

export default function ReviewsPage() {
  return (
    <div>
      <h1>ProstaVive Reviews</h1>
      <p>
        Read real ProstaVive reviews from customers who have experienced the benefits.
        Discover how ProstaVive has helped improve prostate health and overall well-being.
      </p>
      {/* Add your reviews content here */}
    </div>
  )
}
