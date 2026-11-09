import type { Metadata } from 'next'
import Image from 'next/image'
import { Camera } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'About',
  description: 'A little about Divya Menon outside of design: bouldering, crafting jewelry, and Bharatanatyam.',
}

// ---------------------------------------------------------------------------
// Edit everything about this page here.
// Photos: drop files in /public/about and set `src` (e.g. '/about/bouldering.jpg').
// Anything with `placeholder: true` shows as a soft "fill me in" note until you edit it.
// ---------------------------------------------------------------------------

const portrait = { src: '', label: 'A candid photo of you' }

const hobbies = [
  {
    title: 'Bouldering',
    text: 'Where you’ll find me after a long day of work and classes.',
    photo: { src: '', label: 'You on the wall' },
    tilt: '-rotate-2',
  },
  {
    title: 'Crafting',
    text: 'Especially jewelry and accessories.',
    photo: { src: '', label: 'Jewelry or accessories you made' },
    tilt: 'rotate-1',
  },
  {
    title: 'Bharatanatyam',
    text: 'I re-learn excerpts of past dances as a way to destress.',
    photo: { src: '', label: 'You dancing' },
    tilt: '-rotate-1',
  },
]

// ---------------------------------------------------------------------------

function Photo({ src, label, className }: { src: string; label: string; className?: string }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={label}
        width={900}
        height={1100}
        className={cn('h-full w-full object-cover', className)}
        sizes="(min-width: 1024px) 400px, 90vw"
      />
    )
  }
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-foreground/15 bg-card p-4 text-center text-muted-foreground',
        className,
      )}
    >
      <Camera className="size-6 opacity-60" aria-hidden="true" />
      <span className="text-sm font-medium text-pretty">{label}</span>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-container pb-12">
        {/* Intro */}
        <section
          aria-labelledby="about-title"
          className="grid items-center gap-12 pt-12 md:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20"
        >
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[46%_54%_42%_58%/52%_44%_56%_48%] border-2 border-accent/30"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[46%_54%_42%_58%/52%_44%_56%_48%]">
              <Photo src={portrait.src} label={portrait.label} className="rounded-[inherit]" />
            </div>
          </div>

          <div>
            <h1 id="about-title" className="font-serif text-5xl leading-[1] tracking-tight text-balance md:text-7xl">
              Nice to meet <span className="text-accent italic">you</span>
            </h1>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-pretty md:text-xl">
              <p>
                I’m currently a Master of Human-Computer Interaction student at Carnegie Mellon University. Outside of
                being a student and designer, I have a few other obsessions.
              </p>
              <p>
                After a long day of work and classes, you’ll probably find me at a bouldering gym. When I’m not tearing
                up my hands trying to climb little plastic rocks, I love to craft, especially jewelry and accessories!
              </p>
              <p>
                I’m also a trained Bharatanatyam (Indian classical) dancer, and I often re-learn excerpts of past
                dances as a way to destress.
              </p>
            </div>
          </div>
        </section>

        {/* Hobbies as a loose row of snapshots */}
        <section aria-labelledby="offline-title" className="mt-28 md:mt-36">
          <h2 id="offline-title" className="font-serif text-4xl tracking-tight md:text-5xl">
            When I’m not designing
          </h2>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {hobbies.map((h) => (
              <li key={h.title}>
                <figure
                  className={cn(
                    'rounded-[1.25rem] bg-[#fbf8f3] p-3 pb-5 shadow-[0_12px_32px_-18px_rgba(36,24,26,0.35)] transition-transform duration-300 hover:rotate-0',
                    h.tilt,
                  )}
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-[0.9rem]">
                    <Photo src={h.photo.src} label={h.photo.label} className="rounded-[0.9rem]" />
                  </div>
                  <figcaption className="px-2 pt-4">
                    <span className="block font-serif text-2xl">{h.title}</span>
                    <span className="mt-1 block leading-snug text-pretty text-muted-foreground">{h.text}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
