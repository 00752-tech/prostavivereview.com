'use client'

import { Button } from '@/components/ui/button'
import { Twitter, Facebook, Linkedin } from 'lucide-react'

interface ShareButtonsProps {
  url?: string
}

export function ShareButtons({ url = '' }: ShareButtonsProps) {
  // Update the share URL logic to handle SSR:
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
  const shareTitle = 'Try this free prostate health calculator - get personalized insights and recommendations!'
  
  const share = (platform: 'twitter' | 'facebook' | 'linkedin') => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`
    }
    
    window.open(urls[platform], '_blank', 'width=600,height=400')
  }

  return (
    <div className="flex items-center gap-4">
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => share('twitter')}
        className="hover:text-blue-400"
      >
        <Twitter className="h-6 w-6" />
        <span className="sr-only">Share Calculator on Twitter</span>
      </Button>
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => share('facebook')}
        className="hover:text-blue-600"
      >
        <Facebook className="h-6 w-6" />
        <span className="sr-only">Share Calculator on Facebook</span>
      </Button>
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => share('linkedin')}
        className="hover:text-blue-700"
      >
        <Linkedin className="h-6 w-6" />
        <span className="sr-only">Share Calculator on LinkedIn</span>
      </Button>
      <span className="text-gray-600 flex items-center gap-2">
        <svg className="w-4 h-4 text-gray-600 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        Share this calculator
      </span>
    </div>
  )
}

