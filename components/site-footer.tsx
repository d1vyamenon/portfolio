import { ArrowUpRight, FileText, Mail } from 'lucide-react'
import { site } from '@/lib/site'

// lucide-react 1.x no longer ships brand logos, so the LinkedIn mark is drawn here.
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.83v1.5h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13v5.43h-4v-4.82c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.9h-4v-11Z" />
    </svg>
  )
}

const contactLinks = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: Mail, external: false },
  {
    label: 'LinkedIn',
    value: site.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
    href: site.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  { label: 'Resume', value: 'View my resume', href: site.resume, icon: FileText, external: true },
]

type SiteFooterProps = {
  /** Show the big "Let's chat" contact block. Off on the About page, where a simple line is enough. */
  showContact?: boolean
}

export function SiteFooter({ showContact = true }: SiteFooterProps) {
  return (
    <footer id="contact" className="site-container scroll-mt-24 pt-16 pb-10">
      {showContact ? (
        <div className="grid gap-10 rounded-[1rem] bg-primary px-6 py-12 text-primary-foreground md:px-14 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-medium tracking-[0.12em] text-primary-foreground/80 uppercase">Next stop</p>
            <h2 className="mt-4 font-serif text-6xl leading-[0.95] font-normal tracking-tight text-balance md:text-8xl">
              Let’s <span className="italic">chat</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-pretty text-primary-foreground/85 md:text-lg">
              I’m looking for my place in UX research and product design. I’d love to hear about you and your team.
            </p>
          </div>

          {/* Contact options as big, easy-to-hit rows */}
          <ul className="divide-y divide-primary-foreground/20 border-y border-primary-foreground/20">
            {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-4 py-5 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-primary focus-visible:outline-none md:gap-5 md:py-6"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors group-hover:bg-primary-foreground group-hover:text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium tracking-[0.12em] text-primary-foreground/80 uppercase">
                      {label}
                    </span>
                    <span className="mt-0.5 block truncate font-serif text-xl sm:text-2xl md:text-3xl">{value}</span>
                  </span>
                  <ArrowUpRight
                    className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
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
                Resume
              </a>
            </li>
          </ul>
        )}
      </div>
    </footer>
  )
}
