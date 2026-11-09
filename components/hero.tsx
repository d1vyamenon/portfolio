import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, Camera } from 'lucide-react'
import { HeroTrail } from '@/components/hero-trail'
import { site } from '@/lib/site'

// A soft, hand-drawn-feeling blob instead of a hard rectangle.
const blob = 'rounded-[46%_54%_42%_58%/52%_44%_56%_48%]'

function HeroPhoto() {
  return (
    // Shown above the text on small screens so the trail can run straight down from the button.
    <div className="relative order-first mx-auto w-full max-w-[16rem] sm:max-w-xs lg:order-none lg:max-w-md lg:self-center">
      {/* Offset outline behind the photo for a bit of depth */}
      <div aria-hidden="true" className={`absolute inset-0 translate-x-3 translate-y-3 border-2 border-accent/30 ${blob}`} />
      {site.photo ? (
        <Image
          src={site.photo}
          alt={`Portrait of ${site.name}`}
          width={900}
          height={1100}
          priority
          className={`relative aspect-[4/5] h-auto w-full object-cover ${blob}`}
          sizes="(min-width: 1024px) 448px, 384px"
        />
      ) : (
        <div
          className={`relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-foreground/15 bg-card text-muted-foreground ${blob}`}
        >
          <Camera className="size-7 opacity-60" aria-hidden="true" />
          <span className="text-sm font-medium">Photo of Divya</span>
        </div>
      )}
    </div>
  )
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="site-container pt-16 md:pt-24">
      <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <h1
            id="hero-title"
            className="font-serif text-6xl leading-[0.95] font-normal tracking-tight text-balance sm:text-7xl md:text-8xl xl:text-9xl"
          >
            {'Hi, I’m '}
            <span className="text-accent italic">Divya</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-snug text-balance md:text-2xl">
            Bridging human cognition and intuitive interaction.
          </p>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
            I apply HCI principles and thoughtful UI design to make complex technology feel second nature.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              id="view-journey"
              href="#journey"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              View my journey
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full bg-card px-6 py-3 font-medium transition-colors hover:bg-muted"
            >
              About me
            </Link>
          </div>
        </div>

        <HeroPhoto />
      </div>

      <div className="mt-10">
        <HeroTrail anchorId="view-journey" />
      </div>
    </section>
  )
}
