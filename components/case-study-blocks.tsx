import { Fragment } from 'react'
import Image from 'next/image'
import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Block, ImageSlot } from '@/lib/projects'

/** Renders text with **double-asterisk** spans in bold. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-foreground">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}

const shapes: Record<NonNullable<ImageSlot['shape']>, string> = {
  wide: 'aspect-[16/7]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
  tall: 'aspect-[9/16]',
}

/** A real image when `src` is set; otherwise a labeled placeholder box showing where one goes. */
function ImageBox({ slot }: { slot: ImageSlot }) {
  const shape = shapes[slot.shape ?? 'landscape']

  if (slot.src) {
    return (
      <Image
        src={slot.src}
        alt={slot.alt ?? slot.label}
        width={1600}
        height={1200}
        className={cn('h-auto w-full rounded-[1rem] object-cover', shape)}
        sizes="(min-width: 1024px) 896px, 100vw"
      />
    )
  }

  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-center gap-2 rounded-[1rem] border-2 border-dashed border-foreground/15 bg-card p-4 text-center text-muted-foreground',
        shape,
      )}
    >
      <ImageIcon className="size-6 opacity-60" aria-hidden="true" />
      <span className="text-sm font-medium text-pretty">{slot.label}</span>
    </div>
  )
}

export function CaseStudyBlock({ block }: { block: Block }) {
  switch (block.type) {
    case 'p':
      return (
        <p className="text-lg leading-relaxed text-pretty text-foreground/80">
          <Rich text={block.text} />
        </p>
      )

    case 'list':
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-lg leading-relaxed text-foreground/80">
              <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-pretty">
                <Rich text={item} />
              </span>
            </li>
          ))}
        </ul>
      )

    case 'stats':
      return (
        <figure>
          <dl className="grid gap-3 sm:grid-cols-2">
            {block.items.map((stat) => (
              <div key={stat.label} className="rounded-[0.875rem] bg-card p-7">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-serif text-6xl font-normal tracking-tight text-accent">{stat.value}</span>
                  <span className="mt-3 block leading-snug text-pretty text-muted-foreground">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
          {block.caption ? <figcaption className="mt-3 text-sm text-muted-foreground">{block.caption}</figcaption> : null}
        </figure>
      )

    case 'flow':
      return (
        <figure>
          <ol className="flex flex-col items-stretch md:flex-row md:items-center">
            {block.items.map((item, i) => (
              <Fragment key={item}>
                {i > 0 ? (
                  <li aria-hidden="true" className="mx-auto h-5 w-0.5 bg-accent/30 md:mx-0 md:h-0.5 md:w-6 md:flex-none" />
                ) : null}
                <li className="flex min-h-24 items-center justify-center rounded-[1rem] bg-primary px-5 py-5 text-center leading-snug font-medium text-pretty text-primary-foreground md:flex-1 md:basis-0">
                  {item}
                </li>
              </Fragment>
            ))}
          </ol>
          {block.note ? <figcaption className="mt-4 text-sm text-muted-foreground italic">{block.note}</figcaption> : null}
        </figure>
      )

    case 'cards':
      return (
        <div className="grid gap-3 md:grid-cols-3">
          {block.items.map((card) => (
            <div key={card.title} className="rounded-[0.875rem] bg-card p-7">
              <h3 className="font-serif text-2xl">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-pretty text-foreground/75">
                <Rich text={card.text} />
              </p>
            </div>
          ))}
        </div>
      )

    case 'callouts':
      return (
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-4 rounded-[1rem] bg-card py-3 pr-6 pl-3 text-lg leading-snug text-pretty"
            >
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground"
              >
                {i + 1}
              </span>
              <span>
                <Rich text={item} />
              </span>
            </li>
          ))}
        </ul>
      )

    case 'columns':
      return (
        <div className="grid gap-3 md:grid-cols-2">
          {block.items.map((col) => (
            <div key={col.title} className="rounded-[0.875rem] bg-card p-7">
              <h3 className="font-serif text-2xl">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-foreground/80">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-pretty">
                      <Rich text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )

    case 'image':
      return <ImageBox slot={block} />

    case 'gallery':
      return (
        <div
          className={cn(
            'grid gap-3',
            block.items.length === 2 && 'sm:grid-cols-2',
            block.items.length === 3 && 'sm:grid-cols-3',
            block.items.length >= 4 && 'sm:grid-cols-2',
          )}
        >
          {block.items.map((slot, i) => (
            <ImageBox key={`${slot.label}-${i}`} slot={slot} />
          ))}
        </div>
      )

    case 'note':
      return <p className="text-sm text-muted-foreground italic">{block.text}</p>
  }
}
