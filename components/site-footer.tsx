import { ArrowUpRight, Mail } from 'lucide-react'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer id="contact" className="site-container scroll-mt-20 pt-16 pb-10">
      <div className="rounded-[2rem] border border-border bg-card px-6 py-14 md:px-14 md:py-20">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Next stop</p>
        <h2 className="mt-4 max-w-3xl text-5xl leading-[0.95] font-semibold tracking-tighter text-balance md:text-7xl">
          Let’s chat<span className="text-accent">.</span>
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-pretty text-muted-foreground md:text-lg">
          I’m looking for my place in UX research and product design. I’d love to hear about you and your team.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-foreground transition-colors hover:bg-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          >
            <Mail className="size-4" aria-hidden="true" />
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-3 font-medium transition-colors hover:border-foreground/40"
          >
            LinkedIn
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-3 font-medium transition-colors hover:border-foreground/40"
          >
            Résumé
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap justify-between gap-2 font-mono text-xs tracking-wider text-muted-foreground uppercase">
        <p>{`© ${new Date().getFullYear()} ${site.name}`}</p>
        <p>Pittsburgh, PA</p>
      </div>
    </footer>
  )
}
