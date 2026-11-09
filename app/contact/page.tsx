import type { Metadata } from 'next'
import { ArrowUpRight, FileText, Mail } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Divya Menon by email or LinkedIn.',
}

// lucide-react 1.x no longer ships brand logos, so the LinkedIn mark is drawn here.
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.83v1.5h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13v5.43h-4v-4.82c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.9h-4v-11Z" />
    </svg>
  )
}

const linkedinHandle = site.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

const channels = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: linkedinHandle,
    href: site.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'Résumé',
    value: 'View or download (PDF)',
    href: site.resume,
    icon: FileText,
    external: true,
  },
]

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-container pt-12 pb-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end lg:gap-20">
          <div>
            <h1 className="font-serif text-6xl leading-[0.95] tracking-tight text-balance md:text-8xl">
              Let’s <span className="text-accent italic">chat</span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
              I’m looking for my place in UX research and product design. I’d love to hear about you and your team.
            </p>
          </div>

          <ul className="space-y-3">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-5 rounded-[2rem] bg-card p-5 transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none md:p-6"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-background text-accent transition-colors group-hover:bg-primary-foreground/15 group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary-foreground/85">
                      {label}
                    </span>
                    <span className="block truncate font-serif text-2xl md:text-3xl">{value}</span>
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
      </main>
      <SiteFooter showContact={false} />
    </>
  )
}
