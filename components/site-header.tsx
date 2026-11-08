import Link from 'next/link'
import { site } from '@/lib/site'

const links = [
  { href: '/#journey', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: site.resume, label: 'Résumé', external: true },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-md">
      <div className="site-container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold tracking-tight">
          <span aria-hidden="true" className="inline-block size-2 rounded-full bg-accent" />
          <span className="sm:hidden">{site.shortName}</span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-4 text-sm text-muted-foreground sm:gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
