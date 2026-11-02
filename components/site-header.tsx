const links = [
  { href: '#journey', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
      <a href="/" className="text-lg font-semibold tracking-tight">
        <span aria-hidden="true" className="mr-2 inline-block size-2.5 rounded-full bg-accent" />
        Divya
      </a>
      <nav aria-label="Main">
        <ul className="flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="underline-offset-4 hover:text-primary hover:underline hover:decoration-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
