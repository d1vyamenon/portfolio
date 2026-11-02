export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-5xl px-6 pt-16 md:pt-24">
      <div className="max-w-2xl">
        <h1 id="hero-title" className="font-hand text-6xl leading-none text-balance md:text-8xl">
          {"Hello! I'm Divya!"}
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
          className="font-hand group mt-8 inline-flex items-center gap-3 text-3xl text-primary hover:underline hover:decoration-2 hover:underline-offset-8"
        >
          View my journey
          <svg
            aria-hidden="true"
            viewBox="0 0 60 24"
            className="h-6 w-14 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 14c10-6 22 4 34-2s14-4 20-1" />
            <path d="M48 5l8 6-9 5" />
          </svg>
        </a>
      </div>
    </section>
  )
}
