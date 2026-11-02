import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-5xl px-6 pt-16 md:pt-24">
      <div className="max-w-2xl">
        <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 font-mono text-xs tracking-wide text-secondary-foreground uppercase">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          UX Designer
        </p>
        <h1
          id="hero-title"
          className="mt-6 text-5xl leading-[1.05] font-semibold tracking-tight text-balance md:text-7xl"
        >
          {"Hello! I'm Divya."}
        </h1>
        <p className="mt-6 text-xl font-medium tracking-tight text-balance md:text-2xl">
          A UX designer who maps the messy middle between people and the products they rely on.
        </p>
        <p className="mt-4 max-w-xl leading-relaxed text-pretty text-muted-foreground">
          I turn research into journeys, journeys into flows, and flows into interfaces that feel obvious in
          hindsight. Below are a few places I&apos;ve traveled recently — follow the path.
        </p>
        <a
          href="#journey"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
        >
          View my journey
          <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
