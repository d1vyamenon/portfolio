import type { Metadata } from 'next'
import Image from 'next/image'
import { Camera } from 'lucide-react'
import { LoopVideo } from '@/components/loop-video'
import { PhotoCarousel } from '@/components/photo-carousel'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { cn } from '@/lib/utils'
import { withBase } from '@/lib/base-path'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Divya Menon: how she designs, the product design and UX research roles she’s looking for, and life outside design.',
}

// ---------------------------------------------------------------------------
// Edit everything about this page here.
// Photos: drop files in /public/about and set `src` (e.g. '/about/bouldering.jpg').
// Anything with `placeholder: true` shows as a soft "fill me in" note until you edit it.
// ---------------------------------------------------------------------------

const portrait = {
  src: '/about/divya-bench.jpg',
  label: 'Divya sitting on a wooden bench under a covered wooden shelter, looking off to the side',
}

// How I design: core principles (shown as a numbered list).
const principles = [
  {
    title: 'Design for the user, first and always',
    text: 'Balancing business goals with user satisfaction is always tricky, but when the user is at the center of the design process, the rest tends to fall into place.',
  },
  {
    title: 'Design for good',
    text: 'Ethics matter to me as a designer and researcher. I’m always looking for ways to improve an existing experience, or to create an entirely new one, for the benefit of the user. Designing traps and manipulative interfaces goes against my user-centered philosophy.',
  },
  {
    title: 'Design for everyone',
    text: 'Accessibility is incredibly important, especially in a digital age where oversights are becoming easier to ignore. A person’s physical or mental differences shouldn’t prevent them from using an experience, even if that means adapting the experience to their needs.',
  },
]

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
        src={withBase(src)}
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
                I’m a Master of Human-Computer Interaction student at Carnegie Mellon University. Before CMU, I completed
                my B.S. in Cognitive Science at UC San Diego and my A.S. in Health Sciences at Houston Community
                College.
              </p>
              <p>
                Along the way, I’ve worked on many sides of the design process, from developing brand identities and
                running usability tests to product design, interface design and full-scale enterprise research.
              </p>
              <p>
                Now I want to take what science taught me about asking questions, testing assumptions and following the
                evidence, and apply it to design.
              </p>
            </div>
          </div>
        </section>

        {/* How I design: heading, then the principles in three columns */}
        <section aria-labelledby="principles-title" className="mt-28 md:mt-36">
          <h2 id="principles-title" className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            How I <span className="text-accent italic">design</span>
          </h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-12">
            {principles.map((p, i) => (
              <li key={p.title} className="border-t border-foreground/15 pt-6">
                <span aria-hidden="true" className="font-serif text-3xl leading-none text-accent italic">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-balance">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-pretty text-foreground/80 md:text-lg">{p.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Career goals */}
        <section aria-labelledby="looking-title" className="mt-28 md:mt-36">
          <h2 id="looking-title" className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            What I’m <span className="text-accent italic">looking for</span>
          </h2>
          <div className="mt-8 grid gap-6 text-lg leading-relaxed text-pretty md:grid-cols-3 md:gap-12">
            <p>
              I’m looking for <strong className="font-semibold">product design</strong> and{' '}
              <strong className="font-semibold">UX research</strong> roles. I’m especially drawn to healthcare, but I’m
              excited by meaningful problems in any field.
            </p>
            <p>
              One of my favorite parts of design is finding problems no one knew existed. Solving them brings users a
              kind of satisfaction they never expected. I love digging deep to understand why core usability and
              functionality issues surface in the first place.
            </p>
            <p>
              I enjoy designing both in the physical world and on screens, and I especially love finding ways to
              connect the two.
            </p>
          </div>
        </section>

        {/* Outside of design: a short lead-in, then the polaroids */}
        <section aria-labelledby="outside-title" className="mt-28 md:mt-36">
          <div>
            <h2 id="outside-title" className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
              Outside of <span className="text-accent italic">design</span>
            </h2>
            <div className="mt-8 grid gap-6 text-lg leading-relaxed text-pretty md:grid-cols-2 md:gap-12">
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
          <div className="mt-16 md:mt-20">
            <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
              {hobbies.map((h) => (
                <li key={h.title} className={h.offset}>
                  <figure
                    className={cn(
                      'rounded-[0.875rem] bg-[#fbf8f3] p-3 pb-4 shadow-[0_14px_36px_-18px_rgba(36,24,26,0.4)]',
                      h.tilt,
                    )}
                  >
                    <div className="aspect-[4/5] overflow-hidden rounded-[0.6rem]">
                      {h.video ? (
                        <LoopVideo {...h.video} className="rounded-[0.6rem]" />
                      ) : h.slideshow ? (
                        <PhotoCarousel photos={h.slideshow} interval={15} className="rounded-[0.6rem]" />
                      ) : (
                        <Photo src={h.photo.src} label={h.photo.label} className="rounded-[0.6rem]" />
                      )}
                    </div>
                    <figcaption className="pt-4 text-center font-serif text-2xl italic">{h.title}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter showContact={false} />
    </>
  )
}
