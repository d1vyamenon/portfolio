import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { HeroTrail } from '@/components/hero-trail'
import { projects } from '@/lib/projects'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="site-container pt-16 md:pt-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="rounded-full bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
          {site.title} <span aria-hidden="true">·</span> MHCI at Carnegie Mellon
        </p>
        <h1
          id="hero-title"
          className="mt-8 font-serif text-6xl leading-[0.95] font-normal tracking-tight text-balance sm:text-7xl md:text-8xl xl:text-9xl"
        >
          {'Hi, I’m '}
          <span className="text-accent italic">Divya</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-snug text-balance md:text-2xl">
          A cognitive scientist turned UX researcher, designing around how people actually think.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed text-pretty text-muted-foreground md:text-lg">
          From usability testing for an industrial AI platform to accessibility work on an online learning tool, follow
          the trail through my work, newest first.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#journey"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          >
            Follow the trail
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
          <Link
            href="/about"
            className="inline-flex items-center rounded-full bg-card px-6 py-3 font-medium transition-colors hover:bg-muted"
          >
            About me
          </Link>
        </div>
      </div>

      <div className="mt-14 md:mt-16">
        <HeroTrail label={projects[0].stamp} />
      </div>
    </section>
  )
}
