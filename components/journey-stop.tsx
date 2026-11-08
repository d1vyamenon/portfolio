'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ProjectCover } from '@/components/project-cover'
import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/use-in-view'
import type { Project } from '@/lib/projects'

type JourneyStopProps = {
  project: Project
  index: number
}

export function JourneyStop({ project, index }: JourneyStopProps) {
  const { ref, inView } = useInView<HTMLElement>(0.2)
  const imageFirst = index % 2 === 0
  const stopNumber = String(index + 1).padStart(2, '0')
  const href = `/work/${project.slug}`

  return (
    <article
      ref={ref}
      aria-labelledby={`${project.slug}-title`}
      className={cn(
        'grid items-center gap-8 transition-all duration-700 ease-out motion-reduce:transition-none md:grid-cols-2 md:gap-12 lg:gap-20',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
      )}
    >
      <Link
        href={href}
        className={cn(
          'group relative block w-full rounded-[2.75rem] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
          !imageFirst && 'md:order-2',
        )}
        tabIndex={-1}
        aria-hidden="true"
      >
        <ProjectCover
          project={project}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          sizes="(min-width: 1440px) 640px, (min-width: 768px) 45vw, 100vw"
        />
      </Link>

      <div className={cn('max-w-xl', imageFirst ? 'md:justify-self-start' : 'md:order-1 md:justify-self-end')}>
        <p className="text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
          <span className="text-accent">{stopNumber}</span>
          <span aria-hidden="true">{' / '}</span>
          {project.org}
        </p>
        <h3
          id={`${project.slug}-title`}
          className="mt-3 font-serif text-5xl font-normal tracking-tight text-balance md:text-6xl"
        >
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">
          {project.role}
          <span aria-hidden="true">{' · '}</span>
          {project.timeline}
        </p>
        <p className="mt-5 leading-relaxed text-pretty text-foreground/80 md:text-lg">{project.summary}</p>
        <dl className="mt-6 space-y-2 border-l-2 border-accent/30 pl-4 text-sm leading-relaxed">
          <div className="flex gap-3">
            <dt className="w-12 shrink-0 pt-px text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
              Skills
            </dt>
            <dd className="text-foreground/80">{project.skills.join(' · ')}</dd>
          </div>
          {project.tools ? (
            <div className="flex gap-3">
              <dt className="w-12 shrink-0 pt-px text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
                Tools
              </dt>
              <dd className="text-foreground/80">{project.tools.join(' · ')}</dd>
            </div>
          ) : null}
        </dl>
        <Link
          href={href}
          className="group mt-7 inline-flex items-center gap-1.5 font-medium text-accent hover:text-foreground"
        >
          {'Read the case study'}
          <span className="sr-only">{` for ${project.title}`}</span>
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  )
}
