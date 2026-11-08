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
        <ol className="divide-y divide-border border-y border-border">
          {block.items.map((step, i) => (
            <li key={step.title} className="grid gap-1 py-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4">
              <span aria-hidden="true" className="font-mono text-sm text-accent">
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
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-5xl font-semibold tracking-tighter text-accent">{stat.value}</span>
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
        <p className="rounded-xl border-l-2 border-accent bg-card px-5 py-3 text-sm leading-relaxed text-pretty text-muted-foreground">
          {block.text}
        </p>
      )
  }
}
