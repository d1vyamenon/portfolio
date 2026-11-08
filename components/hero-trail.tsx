'use client'

import { useId } from 'react'
import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/use-in-view'

type HeroTrailProps = {
  /** Date stamp of the first stop, shown where the trail arrives. */
  label: string
}

// Starts under the hero buttons (x = 50), loops once, then lands on the
// first project's image column (x = 25), matching the journey's connectors.
const path = 'M 50 0 C 50 22, 82 20, 76 46 C 72 64, 50 66, 52 50 C 54 34, 74 58, 54 76 C 42 86, 25 84, 25 100'

export function HeroTrail({ label }: HeroTrailProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2)
  const maskId = useId()

  return (
    <div ref={ref} aria-hidden="true" className="relative h-56 w-full md:h-80">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible">
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse" x="-10" y="-10" width="120" height="120">
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
          vectorEffect="non-scaling-stroke"
          className="stroke-accent/50"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="1 8"
        />
      </svg>

      {/* Start marker */}
      <span className="absolute top-0 left-1/2 flex size-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent ring-4 ring-accent/15" />

      {/* Arrival marker + date of the first stop */}
      <span
        className={cn(
          'absolute bottom-0 left-1/4 flex size-6 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border-2 border-accent bg-background transition-all delay-[1800ms] duration-500 motion-reduce:transition-none',
          inView ? 'scale-100 opacity-100' : 'scale-50 opacity-0',
        )}
      >
        <span className="size-2 rounded-full bg-accent" />
      </span>
      <span
        className={cn(
          'absolute bottom-0 left-1/4 ml-6 translate-y-1/2 rounded-full bg-card px-3.5 py-1 text-xs font-medium tracking-[0.08em] whitespace-nowrap text-muted-foreground uppercase transition-opacity delay-[2000ms] duration-500 motion-reduce:transition-none',
          inView ? 'opacity-100' : 'opacity-0',
        )}
      >
        {label}
      </span>
    </div>
  )
}
