'use client'

import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

type LoopVideoProps = {
  src: string
  poster: string
  label: string
  className?: string
}

/**
 * A silent, looping clip that plays on its own, like a moving photo.
 * - Pause/play button, since motion over 5 seconds must be pausable (WCAG 2.2.2).
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
    <div className={cn('relative h-full w-full', className)}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={paused ? `Play video: ${label}` : `Pause video: ${label}`}
        className="absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-full bg-background/85 text-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        {paused ? <Play className="size-4 translate-x-px" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
      </button>
    </div>
  )
}
