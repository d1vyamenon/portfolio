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
          className="stroke-accent"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeDasharray="1 8"
        />
      </svg>
      <span
        className={cn(
          'absolute top-1/2 left-1/2 flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-background transition-all delay-500 duration-500 motion-reduce:transition-none',
          inView ? 'scale-100 opacity-100' : 'scale-50 opacity-0',
        )}
      >
        <span className="size-2 rounded-full bg-primary" />
      </span>
      {label ? (
        <span
          className={cn(
            'absolute top-1/2 left-1/2 ml-7 -translate-y-1/2 font-serif text-lg whitespace-nowrap text-muted-foreground italic transition-opacity delay-700 duration-500 motion-reduce:transition-none',
            inView ? 'opacity-100' : 'opacity-0',
          )}
        >
          {label}
        </span>
      ) : null}
    </div>
  )
}
