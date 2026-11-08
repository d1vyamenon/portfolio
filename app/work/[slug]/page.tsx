import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { CaseStudyBlock } from '@/components/case-study-blocks'
import { ProjectCover } from '@/components/project-cover'
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
  return { title: project.title, description: project.summary }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  // `projects` is newest first, so "next" along the journey is one step further back in time.
  const index = projects.findIndex((p) => p.slug === project.slug)
  const newer = projects[index - 1]
  const older = projects[index + 1]
  const stopNumber = String(index + 1).padStart(2, '0')

  const details = [
    { label: 'Role', value: project.role },
    { label: 'Timeline', value: project.timeline },
    project.tools ? { label: 'Tools', value: project.tools.join(', ') } : null,
    { label: 'Skills', value: project.skills.join(', ') },
  ].filter((d): d is { label: string; value: string } => d !== null)

  return (
    <>
      <SiteHeader />
      <main>
        <article aria-labelledby="case-title" className="site-container pt-10 md:pt-14">
          <Link
            href="/#journey"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to the journey
          </Link>

          <header className="mt-10">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              <span className="text-accent">{stopNumber}</span>
              <span aria-hidden="true">{' / '}</span>
              {project.org}
              <span aria-hidden="true">{' / '}</span>
              {project.stamp}
            </p>
            <h1
              id="case-title"
              className="mt-4 max-w-5xl text-5xl font-serif leading-[0.95] font-normal tracking-tight text-balance md:text-7xl xl:text-8xl"
            >
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-pretty text-foreground/80 md:text-xl">
              {project.summary}
            </p>
            {project.draftNote ? (
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-3 py-1 font-mono text-xs tracking-wider text-accent uppercase">
                {project.draftNote}
              </p>
            ) : null}
          </header>

          <ProjectCover
            project={project}
            className="mt-12 aspect-[16/9] md:aspect-[21/9]"
            sizes="(min-width: 1440px) 1280px, 100vw"
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] lg:gap-20">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {details.map((d) => (
                  <div key={d.label} className="border-t border-border pt-4">
                    <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase">{d.label}</dt>
                    <dd className="mt-2 text-sm leading-relaxed">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>

            <div className="max-w-3xl pb-8">
              {project.sections.map((section) => (
                <section key={section.heading} className="mt-16 first:mt-0">
                  <h2 className="font-serif text-4xl font-normal tracking-tight md:text-5xl">{section.heading}</h2>
                  <div className="mt-6 space-y-6">
                    {section.blocks.map((block, i) => (
                      <CaseStudyBlock key={i} block={block} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <nav aria-label="More projects" className="mt-16 grid gap-4 border-t border-border pt-10 sm:grid-cols-2">
            {newer ? (
              <Link
                href={`/work/${newer.slug}`}
                className="group rounded-3xl border border-border p-6 transition-colors hover:border-foreground/30"
              >
                <span className="flex items-center gap-1.5 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
                  Newer · {newer.stamp}
                </span>
                <span className="mt-2 block font-serif text-3xl font-normal tracking-tight">{newer.title}</span>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
            {older ? (
              <Link
                href={`/work/${older.slug}`}
                className="group rounded-3xl border border-border p-6 text-right transition-colors hover:border-foreground/30"
              >
                <span className="flex items-center justify-end gap-1.5 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Earlier · {older.stamp}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
                <span className="mt-2 block font-serif text-3xl font-normal tracking-tight">{older.title}</span>
              </Link>
            ) : null}
          </nav>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
