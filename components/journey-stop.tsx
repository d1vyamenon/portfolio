'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
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

  return (
    <article
      ref={ref}
      aria-labelledby={`${project.slug}-title`}
      className={cn(
        'grid items-center gap-8 transition-all duration-700 ease-out motion-reduce:transition-none md:grid-cols-2 md:gap-16',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
      )}
    >
      <Link
        href={project.href}
        className={cn(
          'group relative mx-auto block w-full max-w-md rounded-2xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
          !imageFirst && 'md:order-2',
        )}
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={project.image || '/placeholder.svg'}
          alt={project.imageAlt}
          width={1024}
          height={1024}
          className="h-auto w-full rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(min-width: 768px) 448px, 100vw"
        />
      </Link>

      <div className={cn('max-w-md', imageFirst ? 'md:justify-self-start' : 'md:order-1 md:justify-self-end')}>
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {'Stop '}
          {stopNumber}
        </p>
        <h3 id={`${project.slug}-title`} className="mt-2 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {project.role}
          <span aria-hidden="true">{' · '}</span>
          {project.year}
        </p>
        <p className="mt-4 leading-relaxed text-pretty text-foreground/85">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Focus areas">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Link
          href={project.href}
          className="group mt-6 inline-flex items-center gap-1.5 font-medium underline decoration-accent decoration-2 underline-offset-4 hover:decoration-primary"
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
