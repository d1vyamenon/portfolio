'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/use-in-view'

type HeroTrailProps = {
  /** id of the element the trail starts from (the "View my journey" button). */
  anchorId: string
}

type Geometry = { width: number; height: number; startX: number; offsetTop: number }

/**
 * A dotted trail that starts at the hero's "View my journey" button, loops once,
 * and lands on the first project's image column (25% across), where the journey begins.
 * It's drawn in pixels, measured at runtime, so the start always sits under the button.
 */
export function HeroTrail({ anchorId }: HeroTrailProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2)
  const maskId = useId()
  const [geo, setGeo] = useState<Geometry | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const anchor = document.getElementById(anchorId)
    if (!container || !anchor) return

    const measure = () => {
      const c = container.getBoundingClientRect()
      const a = anchor.getBoundingClientRect()
      const offsetTop = Math.max(0, c.top - a.bottom)
      setGeo({
        width: c.width,
        height: c.height + offsetTop,
        startX: a.left + a.width / 2 - c.left,
        offsetTop,
      })
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(container)
    observer.observe(anchor)
    observer.observe(document.body)
    return () => observer.disconnect()
  }, [anchorId])

  let path = ''
  let endX = 0
  if (geo) {
    const { width: W, height: H, startX: sx } = geo
    endX = W * 0.25
    path = [
      `M ${sx} 0`,
      `C ${sx} ${H * 0.28}, ${W * 0.5} ${H * 0.14}, ${W * 0.6} ${H * 0.4}`,
      `C ${W * 0.66} ${H * 0.58}, ${W * 0.52} ${H * 0.66}, ${W * 0.47} ${H * 0.55}`,
      `C ${W * 0.43} ${H * 0.45}, ${W * 0.58} ${H * 0.46}, ${W * 0.56} ${H * 0.66}`,
      `C ${W * 0.54} ${H * 0.86}, ${endX} ${H * 0.8}, ${endX} ${H}`,
    ].join(' ')
  }

  return (
    <div
      ref={(node) => {
        containerRef.current = node
        ref.current = node
      }}
      aria-hidden="true"
      className="relative h-48 w-full md:h-72"
    >
      {geo ? (
        <>
          <svg
            width={geo.width}
            height={geo.height}
            viewBox={`0 0 ${geo.width} ${geo.height}`}
            className="absolute left-0 overflow-visible"
            style={{ top: -geo.offsetTop }}
          >
            <defs>
              <mask id={maskId} maskUnits="userSpaceOnUse" x={-20} y={-20} width={geo.width + 40} height={geo.height + 40}>
                <path
                  d={path}
                  pathLength={1}
                  fill="none"
                  stroke="white"
                  strokeWidth={14}
                  strokeDasharray="1 1"
                  strokeDashoffset={inView ? 0 : 1}
                  className="transition-[stroke-dashoffset] duration-[2200ms] ease-out motion-reduce:transition-none"
                />
              </mask>
            </defs>
            <path
              d={path}
              fill="none"
              mask={`url(#${maskId})`}
              className="stroke-accent/50"
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="1 8"
            />
          </svg>

          {/* Arrival marker where the first project begins */}
          <span
            style={{ left: endX }}
            className={cn(
              'absolute bottom-0 flex size-6 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border-2 border-accent bg-background transition-all delay-[1800ms] duration-500 motion-reduce:transition-none',
              inView ? 'scale-100 opacity-100' : 'scale-50 opacity-0',
            )}
          >
            <span className="size-2 rounded-full bg-accent" />
          </span>
        </>
      ) : null}
    </div>
  )
}
