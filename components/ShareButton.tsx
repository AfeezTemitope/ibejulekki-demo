'use client'

import { Share2 } from 'lucide-react'

export default function ShareButton({ title }: { title: string }) {
  function handleShare() {
    if (navigator.share) {
      navigator.share({ title, url: window.location.href })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard')
    }
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#0A1F14]/50 hover:text-[#0F3D2E] transition-colors"
    >
      <Share2 size={13} strokeWidth={2} />
      Share this article
    </button>
  )
}
