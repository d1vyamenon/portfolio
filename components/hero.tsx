import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-5xl px-6 pt-16 md:pt-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="font-serif text-xl text-muted-foreground italic">UX Designer</p>
        <h1 id="hero-title" className="mt-3 font-serif text-6xl leading-[1] tracking-tight text-balance md:text-8xl">
          {'Hello! I\u2019m '}
          <span className="relative inline-block italic">
            Divya.
            <svg
              aria-hidden="true"
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
              className="absolute -bottom-2 left-0 h-3 w-full text-accent"
            >
              <path
                d="M2 14 C 50 4, 110 4, 198 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        <p className="mt-8 text-xl leading-snug text-balance md:text-2xl">
          A UX designer who maps the messy middle between people and the products they rely on.
        </p>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-pretty text-muted-foreground">
          I turn research into journeys, journeys into flows, and flows into interfaces that feel obvious in
          hindsight. Below are a few places I&apos;ve traveled recently — follow the path.
        </p>
        <a
          href="#journey"
          className="group mt-8 inline-flex items-center gap-2 rounded-full border border-primary/80 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
        >
          View my journey
          <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
