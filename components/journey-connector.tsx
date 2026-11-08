'use client'

import { useId } from 'react'
import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/use-in-view'

type JourneyConnectorProps = {
  from: number
  to: number
  label?: string
  className?: string
}

export function JourneyConnector({ from, to, label, className }: JourneyConnectorProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4)
  const maskId = useId()
  const path = `M ${from} 0 C ${from} 55, ${to} 45, ${to} 100`
  // With these control points the curve passes through ((from + to) / 2, 50) at t = 0.5.
  const markerStyle = { left: `${(from + to) / 2}%` }

  return (
    <div ref={ref} aria-hidden="true" className={cn('relative h-32 w-full md:h-44', className)}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full overflow-visible"
      >
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse" x="-10" y="-10" width="120" height="120">
            <path
              d={path}
              pathLength={1}
              fill="none"
              stroke="white"
              strokeWidth={12}
              strokeDasharray="1 1"
              strokeDashoffset={inView ? 0 : 1}
              className="transition-[stroke-dashoffset] duration-[1400ms] ease-out motion-reduce:transition-none"
            />
          </mask>
        </defs>
        <path
          d={path}
          fill="none"
          mask={`url(#${maskId})`}
          vectorEffect="non-scaling-stroke"
          className="stroke-muted-foreground/60"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="1 8"
        />
      </svg>
      <span
        style={markerStyle}
        className={cn(
          'absolute top-1/2 flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-accent bg-background transition-all delay-500 duration-500 motion-reduce:transition-none',
          inView ? 'scale-100 opacity-100' : 'scale-50 opacity-0',
        )}
      >
        <span className="size-2 rounded-full bg-accent" />
      </span>
      {label ? (
        <span
          style={markerStyle}
          className={cn(
            'absolute top-1/2 ml-6 -translate-y-1/2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[0.65rem] tracking-wider whitespace-nowrap md:text-[0.7rem] md:tracking-widest text-muted-foreground uppercase transition-opacity delay-700 duration-500 motion-reduce:transition-none',
            inView ? 'opacity-100' : 'opacity-0',
          )}
        >
          {label}
        </span>
      ) : null}
    </div>
  )
}
