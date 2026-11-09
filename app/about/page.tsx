import type { Metadata } from 'next'
import Image from 'next/image'
import { Camera } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { cn } from '@/lib/utils'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description: 'A little about Divya Menon outside of design: bouldering, crocheting, cooking and more.',
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
    text: 'Where I go to problem-solve with my whole body instead of a screen.',
    photo: { src: '', label: 'You on the wall' },
    tilt: '-rotate-2',
  },
  {
    title: 'Crocheting',
    text: 'Slow, repetitive and very satisfying when a pattern finally clicks.',
    photo: { src: '', label: 'Something you made' },
    tilt: 'rotate-1',
  },
  {
    title: 'Cooking',
    text: 'Mostly recipes I found on social media. Results vary, and that’s half the fun.',
    photo: { src: '', label: 'A dish you’re proud of' },
    tilt: '-rotate-1',
  },
  {
    title: 'Catching up on a show',
    text: 'The best way to end a long week.',
    photo: { src: '', label: 'Your current comfort show' },
    tilt: 'rotate-2',
  },
]

const currently = [
  { label: 'Watching', value: 'Add the show you’re watching', placeholder: true },
  { label: 'Crocheting', value: 'Add your current project', placeholder: true },
  { label: 'Cooking', value: 'Add the last recipe you tried', placeholder: true },
  { label: 'Listening to', value: 'Add a song, album or podcast', placeholder: true },
]

const funFacts = [
  { text: 'Add a fun fact about yourself', placeholder: true },
  { text: 'Add something people are surprised to learn about you', placeholder: true },
  { text: 'Add a small thing that makes your day', placeholder: true },
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

function Fill({ children, placeholder }: { children: React.ReactNode; placeholder?: boolean }) {
  return placeholder ? (
    <span className="text-muted-foreground italic underline decoration-accent/40 decoration-dashed underline-offset-4">
      {children}
    </span>
  ) : (
    <>{children}</>
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
                I’m Divya. I studied cognitive science because I’ve always been curious about why people think the way
                they do, and I ended up in design because I wanted to do something with the answers.
              </p>
              <p>
                Outside of work, I’m usually doing something with my hands: climbing, crocheting, or attempting a
                recipe I saw online. I like projects where you can see your progress, and I think that’s a big part of
                why I love iterating on designs too.
              </p>
            </div>
          </div>
        </section>

        {/* Hobbies as a loose row of snapshots */}
        <section aria-labelledby="offline-title" className="mt-28 md:mt-36">
          <h2 id="offline-title" className="font-serif text-4xl tracking-tight md:text-5xl">
            When I’m not designing
          </h2>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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

        {/* Currently + fun facts */}
        <section className="mt-28 grid gap-6 md:mt-36 lg:grid-cols-2">
          <div aria-labelledby="currently-title" className="rounded-[2.5rem] bg-card p-8 md:p-12">
            <h2 id="currently-title" className="font-serif text-4xl tracking-tight">
              Lately
            </h2>
            <dl className="mt-8 space-y-5">
              {currently.map((c) => (
                <div key={c.label} className="grid gap-1 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4">
                  <dt className="font-serif text-lg text-accent italic">{c.label}</dt>
                  <dd className="text-lg leading-snug">
                    <Fill placeholder={c.placeholder}>{c.value}</Fill>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div aria-labelledby="facts-title" className="rounded-[2.5rem] bg-primary p-8 text-primary-foreground md:p-12">
            <h2 id="facts-title" className="font-serif text-4xl tracking-tight">
              A few fun facts
            </h2>
            <ol className="mt-8 space-y-5">
              {funFacts.map((f, i) => (
                <li key={i} className="flex gap-4 text-lg leading-snug">
                  <span aria-hidden="true" className="font-serif text-2xl leading-none italic">
                    {i + 1}.
                  </span>
                  <span className={f.placeholder ? 'italic underline decoration-primary-foreground/50 decoration-dashed underline-offset-4' : undefined}>
                    {f.text}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Sign-off */}
        <section className="mt-28 text-center md:mt-36">
          <p className="mx-auto max-w-2xl font-serif text-3xl leading-snug text-balance md:text-4xl">
            I’d love to hear what you’re working on, or your best recipe recommendation.{' '}
            <a href={`mailto:${site.email}`} className="text-accent italic underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
              Say hi
            </a>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
