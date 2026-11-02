import { Mail } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer id="contact" className="mx-auto max-w-5xl scroll-mt-8 px-6 pb-12 text-center">
      <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">Contact Heading</h2>
      <p className="mx-auto mt-4 max-w-md leading-relaxed text-pretty text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
      </p>
      <a
        href="mailto:email@example.com"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
      >
        <Mail className="size-4" aria-hidden="true" />
        email@example.com
      </a>
      <ul className="mt-8 flex justify-center gap-6 text-sm font-medium" aria-label="Elsewhere">
        <li>
          <a href="https://www.linkedin.com" className="underline-offset-4 hover:text-primary hover:underline">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://dribbble.com" className="underline-offset-4 hover:text-primary hover:underline">
            Dribbble
          </a>
        </li>
        <li>
          <a href="#" className="underline-offset-4 hover:text-primary hover:underline">
            Résumé
          </a>
        </li>
      </ul>
      <p className="mt-16 text-xs text-muted-foreground">{`© ${new Date().getFullYear()} Divya. Designed with care.`}</p>
    </footer>
  )
}
