'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { withBase } from '@/lib/base-path'

type PhotoCarouselProps = {
  photos: { src: string; alt: string }[]
  /** Seconds each photo stays up before fading to the next. */
  interval?: number
  className?: string
}

/**
 * Photos that slowly crossfade into one another.
 * - Click or tap to pause/play, since auto-changing content over 5 seconds must be pausable (WCAG 2.2.2).
 * - Doesn't auto-advance for visitors who prefer reduced motion.
 */
export function PhotoCarousel({ photos, interval = 15, className }: PhotoCarouselProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPaused(true)
  }, [])

  useEffect(() => {
    if (paused || photos.length < 2) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % photos.length), interval * 1000)
    return () => window.clearInterval(id)
  }, [paused, interval, photos.length])

  const label = paused ? 'Play photo slideshow' : 'Pause photo slideshow'

  return (
    // No visible control: clicking the photo, or pressing Enter/Space when it's focused, pauses it (WCAG 2.2.2).
    <div className={cn('relative h-full w-full overflow-hidden', className)}>
      {photos.map((photo, i) => (
        <Image
          key={photo.src}
          src={withBase(photo.src)}
          alt={photo.alt}
          aria-hidden={i !== index}
          width={900}
          height={1125}
          sizes="(min-width: 1024px) 400px, 90vw"
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out motion-reduce:transition-none',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}
      {photos.length > 1 ? (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={label}
          className="absolute inset-0 cursor-pointer rounded-[inherit] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset focus-visible:outline-none"
        />
      ) : null}
    </div>
  )
}
