import { ArrowUpRight, Mail } from 'lucide-react'
import { site } from '@/lib/site'

type SiteFooterProps = {
  /** Show the big "Let's chat" contact block. Off on the About page, where a simple line is enough. */
  showContact?: boolean
}

export function SiteFooter({ showContact = true }: SiteFooterProps) {
  return (
    <footer id="contact" className="site-container scroll-mt-24 pt-16 pb-10">
      {showContact ? (
      <div className="rounded-[3rem] bg-primary px-6 py-14 text-primary-foreground md:px-14 md:py-20">
        <p className="text-xs font-medium tracking-[0.12em] text-primary-foreground/80 uppercase">Next stop</p>
        <h2 className="mt-4 max-w-3xl font-serif text-6xl leading-[0.95] font-normal tracking-tight text-balance md:text-8xl">
          Let’s <span className="italic">chat.</span>
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-pretty text-primary-foreground/80 md:text-lg">
          I’m looking for my place in UX research and product design. I’d love to hear about you and your team.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 font-medium text-primary transition-colors hover:bg-primary-foreground/90 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:outline-none"
          >
            <Mail className="size-4" aria-hidden="true" />
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/30 px-5 py-3 font-medium transition-colors hover:border-primary-foreground/70"
          >
            LinkedIn
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/30 px-5 py-3 font-medium transition-colors hover:border-primary-foreground/70"
          >
            Résumé
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      ) : null}
      <div
        className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-xs font-medium tracking-wider text-muted-foreground uppercase ${showContact ? 'mt-8' : 'border-t border-border pt-8'}`}
      >
        <p>{`© ${new Date().getFullYear()} ${site.name}`}</p>
        {showContact ? (
          <p>Pittsburgh, PA</p>
        ) : (
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
                Email
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.resume} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                Résumé
              </a>
            </li>
          </ul>
        )}
      </div>
    </footer>
  )
}
