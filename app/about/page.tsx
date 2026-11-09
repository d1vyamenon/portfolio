import type { Metadata } from 'next'
import Image from 'next/image'
import { Camera } from 'lucide-react'
import { LoopVideo } from '@/components/loop-video'
import { PhotoCarousel } from '@/components/photo-carousel'
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

const portrait = {
  src: '/about/divya-japan.jpg',
  label: 'Divya smiling over her shoulder on a quiet, rain-wet residential street lined with trees and power lines',
}

type Hobby = {
  title: string
  photo: { src: string; label: string }
  video?: { src: string; poster: string; label: string }
  /** Several photos that crossfade every 15 seconds. Shown instead of the photo when set. */
  slideshow?: { src: string; alt: string }[]
  tilt: string
  offset: string
}

const hobbies: Hobby[] = [
  {
    title: 'Bouldering',
    photo: { src: '', label: 'You on the wall' },
    // Optional looping clip (silent, ~30s). Shown instead of the photo when set.
    video: { src: '/about/bouldering.mp4', poster: '/about/bouldering-poster.jpg', label: 'Divya climbing a bouldering route' },
    tilt: '-rotate-3', offset: 'lg:mt-0',
  },
  {
    title: 'Crafting',
    photo: { src: '', label: 'Jewelry or accessories you made' },
    slideshow: [
      {
        src: '/about/crafting-paper-flower.jpg',
        alt: 'A hand holding a flower made from curled strips of printed packaging on a twisted silver wire stem',
      },
      {
        src: '/about/crafting-wire-sculpture.jpg',
        alt: 'A hand holding a swirling twisted-wire sculpture with small blue beads, in sunlight on a white cushion',
      },
    ],
    tilt: 'rotate-2', offset: 'lg:mt-20',
  },
  {
    title: 'Bharatanatyam',
    photo: { src: '', label: 'You dancing' },
    video: {
      src: '/about/bharatanatyam.mp4',
      poster: '/about/bharatanatyam-poster.jpg',
      label: 'Divya performing Bharatanatyam on stage in a red, orange and blue costume',
    },
    tilt: '-rotate-2', offset: 'lg:mt-6',
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

        {/* Snapshots: a loose, scattered collage, no heading needed */}
        <section aria-label="Things I love outside of design" className="mt-24 md:mt-32">
          <ul className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
            {hobbies.map((h) => (
              <li key={h.title} className={h.offset}>
                <figure
                  className={cn(
                    'rounded-[1.25rem] bg-[#fbf8f3] p-3 pb-4 shadow-[0_14px_36px_-18px_rgba(36,24,26,0.4)]',
                    h.tilt,
                  )}
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-[0.9rem]">
                    {h.video ? (
                      <LoopVideo {...h.video} className="rounded-[0.9rem]" />
                    ) : h.slideshow ? (
                      <PhotoCarousel photos={h.slideshow} interval={15} className="rounded-[0.9rem]" />
                    ) : (
                      <Photo src={h.photo.src} label={h.photo.label} className="rounded-[0.9rem]" />
                    )}
                  </div>
                  <figcaption className="pt-4 text-center font-serif text-2xl italic">{h.title}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter showContact={false} />
    </>
  )
}
