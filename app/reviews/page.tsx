import { Metadata } from 'next'
import { StarIcon } from '@heroicons/react/20/solid'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'ProstaVive Reviews | Customer Testimonials and Ratings',
  description: 'Read real ProstaVive customer reviews and testimonials. See how our natural prostate supplement has helped thousands of men improve their prostate health.',
  alternates: {
    canonical: 'https://www.prostavive.com/reviews'
  },
  other: {
    'schema:review': JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Review",
      "itemReviewed": {
        "@type": "Product",
        "name": "ProstaVive",
        "image": "https://prostavive.org/home-assets/images/product.png",
        "description": "Natural prostate health supplement"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.8",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "John D."
      },
      "reviewBody": "I've been using ProstaVive for 3 months now, and the difference is night and day. My frequent trips to the bathroom have significantly reduced, and I'm sleeping much better through the night. This product is a game-changer!"
    })
  }
}

const reviews = [
  {
    id: 1,
    title: "Life-changing product!",
    rating: 5,
    content: `
      I've been using ProstaVive for 3 months now, and the difference is night and day. 
      My frequent trips to the bathroom have significantly reduced, and I'm sleeping much 
      better through the night. This product is a game-changer!
    `,
    author: "John D., 62"
  },
  {
    id: 2,
    title: "Noticeable improvement",
    rating: 4,
    content: `
      After trying several prostate supplements with little success, I was skeptical about 
      ProstaVive. But within a few weeks, I noticed a real improvement in my urinary flow 
      and frequency. It's not a miracle cure, but it's definitely helping.
    `,
    author: "Mike S., 58"
  },
  {
    id: 3,
    title: "Great customer service",
    rating: 5,
    content: `
      Not only is the product effective, but the customer service is top-notch. I had a 
      question about dosage, and they were quick to respond and very helpful. It's refreshing 
      to deal with a company that truly cares about its customers.
    `,
    author: "David J., 55"
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Reviews() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Product",
          "@id": "https://www.prostavive.com/#product",
          "name": "ProstaVive",
          "image": "https://prostavive.org/home-assets/images/product.png",
          "description": "Natural prostate health supplement"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "John D."
        },
        "reviewBody": "I've been using ProstaVive for 3 months now, and the difference is night and day. My frequent trips to the bathroom have significantly reduced, and I'm sleeping much better through the night. This product is a game-changer!"
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Product",
          "@id": "https://www.prostavive.com/#product",
          "name": "ProstaVive"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Mike S."
        },
        "reviewBody": "After trying several prostate supplements with little success, I was skeptical about ProstaVive. But within a few weeks, I noticed a real improvement in my urinary flow and frequency."
      }
    ]
  }

  return (
    <>
      <Script
        id="reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">ProstaVive Reviews</h2>

            <div className="mt-3 flex items-center">
              <div>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length > rating
                          ? 'text-yellow-400'
                          : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length} out of 5 stars</p>
              </div>
              <p className="ml-2 text-sm text-gray-900">
                Based on {reviews.length} reviews
              </p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Review data</h3>

              <dl className="space-y-3">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center text-sm">
                    <dt className="flex flex-1 items-center">
                      <p className="w-3 font-medium text-gray-900">
                        {rating}
                        <span className="sr-only"> star reviews</span>
                      </p>
                      <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                        <StarIcon
                          className={classNames(
                            rating <= Math.round(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length)
                              ? 'text-yellow-400'
                              : 'text-gray-300',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                        <div className="relative ml-3 flex-1">
                          <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                          <div
                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                            style={{
                              width: `calc(${reviews.filter((review) => review.rating === rating).length} / ${reviews.length} * 100%)`,
                            }}
                          />
                        </div>
                      </div>
                    </dt>
                    <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                      {Math.round((reviews.filter((review) => review.rating === rating).length / reviews.length) * 100)}%
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
              <p className="mt-1 text-sm text-gray-600">
                If you've used ProstaVive, we'd love to hear your thoughts. Consider leaving a review to help others make an informed decision.
              </p>
            </div>
          </div>

          <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <h3 className="sr-only">Recent reviews</h3>

            <div className="flow-root">
              <div className="-my-12 divide-y divide-gray-200">
                {reviews.map((review) => (
                  <div key={review.id} className="py-12">
                    <div className="flex items-center">
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                        <div className="mt-1 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                'h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>
                        <p className="mt-1 text-sm text-gray-600">{review.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

