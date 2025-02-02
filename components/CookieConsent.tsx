'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-4 sm:mb-0 text-sm">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          <a href="/privacy-policy" className="underline ml-1">Learn more</a>
        </p>
        <Button onClick={acceptCookies} className="bg-blue-600 hover:bg-blue-700">
          Accept
        </Button>
      </div>
    </div>
  )
}

