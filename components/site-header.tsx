'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { site } from '@/lib/site'

const links = [
  { href: '/#journey', label: 'Work', match: (p: string) => p === '/' || p.startsWith('/work') },
  { href: '/about', label: 'About', match: (p: string) => p.startsWith('/about') },
  { href: '/contact', label: 'Contact', match: (p: string) => p.startsWith('/contact') },
]

/**
 * A full-width bar that blends into the page. It stays at the top while scrolling
 * and picks up a soft backdrop and hairline once the page moves under it.
 */
export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b transition-[background-color,border-color] duration-300',
        scrolled ? 'border-border bg-background/90 backdrop-blur-md' : 'border-transparent bg-background',
      )}
    >
      <div className="site-container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="shrink-0 font-serif text-xl text-accent md:text-2xl">
          <span className="sm:hidden">{site.shortName}</span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="flex items-center gap-5 sm:gap-8">
          <ul className="flex items-center gap-5 sm:gap-8">
            {links.map((link) => {
              const active = link.match(pathname)
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'relative py-2 text-[0.95rem] font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-accent after:transition-transform after:duration-300',
                      active
                        ? 'text-foreground after:scale-x-100'
                        : 'text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-100',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 rounded-full border border-accent px-4 py-1.5 text-[0.95rem] font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground sm:inline-flex"
          >
            Résumé
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
