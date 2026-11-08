import Image from 'next/image'
import { Accessibility, Lightbulb, MessagesSquare, MousePointerClick, Smartphone, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { CoverIcon, CoverTone, Project } from '@/lib/projects'

const icons: Record<CoverIcon, typeof Smartphone> = {
  phone: Smartphone,
  growth: TrendingUp,
  pointer: MousePointerClick,
  lightbulb: Lightbulb,
  interviews: MessagesSquare,
  accessibility: Accessibility,
}

// Each tone is a dark tinted surface plus a muted line color for the grid and rings.
const tones: Record<CoverTone, { bg: string; line: string; glow: string }> = {
  ember: { bg: 'bg-[#1f1612]', line: 'text-[#5a3a2c]', glow: 'from-[#ff6a3d]/25' },
  slate: { bg: 'bg-[#121a1e]', line: 'text-[#2c4550]', glow: 'from-[#5e9fb8]/25' },
  moss: { bg: 'bg-[#151a13]', line: 'text-[#334229]', glow: 'from-[#8fb36a]/20' },
  plum: { bg: 'bg-[#1b141d]', line: 'text-[#463048]', glow: 'from-[#b07aa8]/25' },
}

type ProjectCoverProps = {
  project: Project
  className?: string
  sizes?: string
}

/** A project's cover: its real image when one is set, otherwise a drawn card in the project's tone. */
export function ProjectCover({ project, className, sizes }: ProjectCoverProps) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.imageAlt ?? ''}
        width={1200}
        height={900}
        className={cn('aspect-[4/3] h-auto w-full rounded-[1.75rem] border border-border object-cover', className)}
        sizes={sizes}
      />
    )
  }

  const Icon = icons[project.cover.icon]
  const tone = tones[project.cover.tone]

  return (
    <div
      role="img"
      aria-label={`${project.title} cover`}
      className={cn(
        'relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-white/[0.06]',
        tone.bg,
        className,
      )}
    >
      <div aria-hidden="true" className={cn('absolute inset-0 bg-radial-[at_50%_45%] to-transparent to-60%', tone.glow)} />
      <svg aria-hidden="true" viewBox="0 0 120 90" preserveAspectRatio="xMidYMid slice" className={cn('absolute inset-0 size-full', tone.line)} fill="none">
        <defs>
          <pattern id={`grid-${project.slug}`} width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" stroke="currentColor" strokeWidth="0.25" />
          </pattern>
        </defs>
        <rect width="120" height="90" fill={`url(#grid-${project.slug})`} opacity="0.7" />
        <circle cx="60" cy="42" r="24" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="60" cy="42" r="34" stroke="currentColor" strokeWidth="0.35" strokeDasharray="1 2" />
      </svg>
      <div className="absolute top-[47%] left-1/2 flex aspect-square h-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[26%] border border-white/10 bg-background/70 backdrop-blur-sm">
        <Icon className="size-[44%] text-accent" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div className="absolute inset-x-[6%] bottom-[7%] flex items-end justify-between gap-4 font-mono text-[clamp(0.6rem,1.2vw,0.75rem)] tracking-widest text-foreground/60 uppercase">
        <span>{project.org}</span>
        <span>{project.stamp}</span>
      </div>
    </div>
  )
}
