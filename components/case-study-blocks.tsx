import type { Block } from '@/lib/projects'

export function CaseStudyBlock({ block }: { block: Block }) {
  switch (block.type) {
    case 'p':
      return <p className="text-lg leading-relaxed text-pretty text-foreground/80">{block.text}</p>

    case 'list':
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-lg leading-relaxed text-foreground/80">
              <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-pretty">{item}</span>
            </li>
          ))}
        </ul>
      )

    case 'steps':
      return (
        <ol className="space-y-3">
          {block.items.map((step, i) => (
            <li key={step.title} className="grid gap-3 rounded-[1.75rem] bg-card px-6 py-5 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-4">
              <span aria-hidden="true" className="flex size-9 items-center justify-center rounded-full bg-background text-sm font-medium text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-1 leading-relaxed text-pretty text-foreground/75">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      )

    case 'stats':
      return (
        <figure>
          <dl className="grid gap-3 sm:grid-cols-2">
            {block.items.map((stat) => (
              <div key={stat.label} className="rounded-[2rem] bg-card p-7">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-serif text-6xl font-normal tracking-tight text-accent">{stat.value}</span>
                  <span className="mt-3 block text-sm leading-snug text-pretty text-muted-foreground">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          {block.caption ? <figcaption className="mt-3 text-sm text-muted-foreground">{block.caption}</figcaption> : null}
        </figure>
      )

    case 'note':
      return (
        <p className="rounded-[1.5rem] bg-secondary px-6 py-4 text-sm leading-relaxed text-pretty text-muted-foreground">
          {block.text}
        </p>
      )
  }
}
