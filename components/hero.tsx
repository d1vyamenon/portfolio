import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { projects } from '@/lib/projects'
import { site } from '@/lib/site'

export function Hero() {
  const current = projects[0]

  return (
    <section aria-labelledby="hero-title" className="site-container pt-14 pb-8 md:pt-24 lg:pt-32">
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        {site.title}
        <span aria-hidden="true" className="mx-2 text-accent">
          /
        </span>
        MHCI @ Carnegie Mellon
      </p>
      <h1
        id="hero-title"
        className="mt-6 text-6xl leading-[0.95] font-semibold tracking-tighter text-balance sm:text-7xl md:text-8xl xl:text-9xl"
      >
        {'Hi, I’m Divya'}
        <span className="text-accent">.</span>
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
        <div>
          <p className="max-w-3xl text-2xl leading-snug font-medium tracking-tight text-balance md:text-3xl">
            A cognitive scientist turned UX researcher, designing around how people actually think.
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-pretty text-muted-foreground md:text-lg">
            I’ve run usability tests for an industrial AI platform, interviewed energy executives about AI adoption, and
            audited an online learning tool for accessibility. Scroll down to follow the journey, newest stop first.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              View my work
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40"
            >
              About me
            </Link>
          </div>
        </div>

        <Link
          href={`/work/${current.slug}`}
          className="group block rounded-3xl border border-border bg-card p-6 transition-colors hover:border-accent/60"
        >
          <p className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Currently
          </p>
          <p className="mt-3 text-lg font-medium">{current.role}</p>
          <p className="text-muted-foreground">
            {current.org}
            <span aria-hidden="true">{' · '}</span>
            {current.stamp}
          </p>
        </Link>
      </div>
    </section>
  )
}
