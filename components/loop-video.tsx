'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type LoopVideoProps = {
  src: string
  poster: string
  label: string
  className?: string
}

/**
 * A silent, looping clip that plays on its own, like a moving photo.
 * - Click or tap to pause/play, since motion over 5 seconds must be pausable (WCAG 2.2.2).
 * - Starts paused on the poster frame for visitors who prefer reduced motion.
 * - Only plays while on screen, to save battery and data.
 */
export function LoopVideo({ src, poster, label, className }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)
  const userPaused = useRef(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      userPaused.current = true
      video.pause()
      setPaused(true)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.25 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const toggle = () => {
    const video = ref.current
    if (!video) return
    if (video.paused) {
      userPaused.current = false
      video.play().catch(() => {})
      setPaused(false)
    } else {
      userPaused.current = true
      video.pause()
      setPaused(true)
    }
  }

  return (
    // No visible control: clicking the clip, or pressing Enter/Space when it's focused, pauses it.
    // That keeps it pausable (WCAG 2.2.2) without a button on top of the photo.
    <button
      type="button"
      onClick={toggle}
      aria-label={paused ? `Play video: ${label}` : `Pause video: ${label}`}
      className={cn(
        'block h-full w-full cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none',
        className,
      )}
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="pointer-events-none h-full w-full object-cover"
      />
    </button>
  )
}
