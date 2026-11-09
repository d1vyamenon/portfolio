import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { CaseStudyBlock, Rich } from '@/components/case-study-blocks'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getProject, projects } from '@/lib/projects'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return { title: project.band.subtitle ? `${project.band.title}: ${project.band.subtitle}` : project.band.title, description: project.summary }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  // `projects` is newest first, so "earlier" is one step further along the journey.
  const index = projects.findIndex((p) => p.slug === project.slug)
  const newer = projects[index - 1]
  const older = projects[index + 1]

  const details: { label: string; values: string[] }[] = [
    { label: 'Time Frame', values: [project.timeline] },
    { label: 'Role', values: [project.role] },
    { label: 'Skills', values: project.skills },
    ...(project.tools ? [{ label: 'Tools', values: project.tools }] : []),
  ]

  return (
    <>
      <SiteHeader />
      <main>
        <article aria-labelledby="case-title">
          {/* Header band: big title, then overview beside Time Frame / Role / Skills / Tools */}
          <header className="site-container pt-6">
            <div
              className="rounded-[3rem] bg-primary px-6 pt-8 pb-10 text-primary-foreground sm:px-10 md:px-14 md:pt-10 md:pb-14"
            >
              <Link
                href="/#journey"
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/20"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Back to the journey
              </Link>

              <h1 id="case-title" className="mt-12 md:mt-20">
                <span className="block font-serif text-6xl leading-[0.95] tracking-tight text-balance md:text-8xl xl:text-9xl">
                  {project.band.title}
                </span>
                {project.band.subtitle ? (
                  <span className="mt-3 block font-serif text-3xl leading-tight text-balance text-primary-foreground/85 italic md:text-5xl">
                    {project.band.subtitle}
                  </span>
                ) : null}
              </h1>

              {project.draftNote ? (
                <p className="mt-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium">
                  {project.draftNote}
                </p>
              ) : null}

              <div className="mt-12 grid gap-10 rounded-[2.25rem] bg-white/[0.07] p-6 sm:p-8 md:mt-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16 lg:p-10">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl">Overview</h2>
                  <p className="mt-4 text-lg leading-relaxed text-pretty text-primary-foreground/85 [&_strong]:text-primary-foreground">
                    <Rich text={project.overview} />
                  </p>
                </div>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
                  {details.map((d) => (
                    <div key={d.label}>
                      <dt className="text-xs font-medium tracking-[0.12em] text-primary-foreground/80 uppercase">{d.label}</dt>
                      {d.values.map((v) => (
                        <dd key={v} className="mt-1.5 leading-snug">
                          {v}
                        </dd>
                      ))}
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </header>

          {/* Body: one readable column with the Framer-style section headings */}
          <div className="site-container">
            <div className="mx-auto max-w-4xl py-16 md:py-24">
              {project.sections.map((section) => (
                <section key={section.heading} className="mt-20 first:mt-0">
                  <h2 className="font-serif text-4xl tracking-tight text-balance underline decoration-accent/40 decoration-2 underline-offset-[0.25em] md:text-5xl">
                    {section.heading}
                  </h2>
                  <div className="mt-8 space-y-8">
                    {section.blocks.map((block, i) => (
                      <CaseStudyBlock key={i} block={block} />
                    ))}
                  </div>
                </section>
              ))}

              <p className="mt-24 text-center font-serif text-2xl text-muted-foreground">— Divya Menon —</p>
            </div>

            <nav aria-label="More projects" className="grid gap-4 sm:grid-cols-2">
              {newer ? (
                <Link href={`/work/${newer.slug}`} className="group rounded-[2rem] bg-card p-7 transition-colors hover:bg-muted">
                  <span className="flex items-center gap-1.5 text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
                    <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
                    Newer project
                  </span>
                  <span className="mt-2 block font-serif text-3xl tracking-tight">{newer.title}</span>
                </Link>
              ) : (
                <span className="hidden sm:block" />
              )}
              {older ? (
                <Link
                  href={`/work/${older.slug}`}
                  className="group rounded-[2rem] bg-card p-7 text-right transition-colors hover:bg-muted"
                >
                  <span className="flex items-center justify-end gap-1.5 text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
                    Earlier project
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                  <span className="mt-2 block font-serif text-3xl tracking-tight">{older.title}</span>
                </Link>
              ) : null}
            </nav>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
