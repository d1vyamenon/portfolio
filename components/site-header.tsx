import Link from 'next/link'
import { site } from '@/lib/site'

const links = [
  { href: '/#journey', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: site.resume, label: 'Résumé', external: true },
  { href: '#contact', label: 'Contact' },
]

/** A floating, pill-shaped nav bar that stays at the top while scrolling. */
export function SiteHeader() {
  return (
    <header className="site-container sticky top-3 z-40 mt-3">
      <div className="flex h-14 items-center justify-between gap-4 rounded-full bg-card/85 pr-2 pl-5 shadow-[0_6px_24px_-12px_rgba(36,24,26,0.25)] backdrop-blur-md">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-serif text-lg">
          <span aria-hidden="true" className="inline-block size-2 rounded-full bg-accent" />
          <span className="sm:hidden">{site.shortName}</span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="block rounded-full px-2.5 py-2 text-muted-foreground transition-colors hover:bg-background hover:text-foreground sm:px-4"
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
