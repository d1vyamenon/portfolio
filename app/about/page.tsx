import type { Metadata } from 'next'
import { Download } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Divya Menon: education, experience and skills in UX research and design.',
}

const education = [
  {
    school: 'Carnegie Mellon University',
    degree: 'Master of Human-Computer Interaction',
    when: 'Expected Aug 2027',
    detail:
      'Coursework in progress: User-Centred Research and Evaluation, Interaction Design Fundamentals, Programming Interactive Experiences, Research Issues in Game Development in XR.',
  },
  {
    school: 'University of California, San Diego',
    degree: 'B.S. Cognitive Science, specialization in Design & Interaction',
    when: 'Jun 2026',
    detail: 'Coursework: Interaction Design, Sustainable Development Design, Data Science in Practice.',
  },
  {
    school: 'Houston Community College',
    degree: 'A.S. Health Sciences, Highest Honors',
    when: 'May 2023',
  },
]

const experience = [
  { role: 'UX Accessibility Intern', org: 'OLI · Torus', when: 'Aug 2026 — Now' },
  { role: 'UX Research Associate', org: 'EPAM Systems', when: 'Apr — Jul 2026' },
  { role: 'Product Design Intern', org: 'Cognite', when: 'Jun — Sep 2025' },
  { role: 'UI/UX Development Consultant', org: 'AMG Invest', when: 'Aug 2024 — Apr 2025' },
]

const skills = [
  {
    group: 'UX research',
    items: ['User interviews', 'Heuristic evaluations', 'Journey mapping', 'Concept validation', 'Usability testing'],
  },
  {
    group: 'UI/UX design',
    items: ['Workflows', 'Wireframes', 'Interface design', 'Interaction design', 'Visual design'],
  },
  {
    group: 'Software & AI',
    items: ['Figma', 'Dovetail', 'Miro', 'Figma Make', 'Gemini', 'Cursor', 'Python', 'JavaScript', 'Adobe Creative Cloud'],
  },
]

function SectionLabel({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
      {children}
    </h2>
  )
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-container pt-14 pb-12 md:pt-24">
        <section aria-labelledby="about-title" className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">About me</p>
            <h1
              id="about-title"
              className="mt-6 text-5xl leading-[0.95] font-semibold tracking-tighter text-balance md:text-7xl"
            >
              Cognitive science, applied<span className="text-accent">.</span>
            </h1>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-pretty text-foreground/80 lg:pt-12">
            <p>
              I’m a UX researcher and designer with experience in everything from brand development to usability
              testing. My background in cognitive science gives me a unique perspective on human-centered design: I
              want to understand how people think before deciding what they should see.
            </p>
            <p>
              I’m now pursuing a Master of Human-Computer Interaction at Carnegie Mellon, and I’m searching for my
              place in the UX research and product design space. I look forward to learning about you and your
              company!
            </p>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8! inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              <Download className="size-4" aria-hidden="true" />
              Download my résumé
            </a>
          </div>
        </section>

        <div className="mt-24 grid gap-16 lg:grid-cols-2 lg:gap-20">
          <section aria-labelledby="experience-title">
            <SectionLabel id="experience-title">Experience</SectionLabel>
            <ol className="mt-6 divide-y divide-border border-y border-border">
              {experience.map((job) => (
                <li key={job.org} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5">
                  <div>
                    <p className="text-lg font-semibold tracking-tight">{job.role}</p>
                    <p className="text-muted-foreground">{job.org}</p>
                  </div>
                  <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">{job.when}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="education-title">
            <SectionLabel id="education-title">Education</SectionLabel>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {education.map((ed) => (
                <li key={ed.school} className="py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <p className="text-lg font-semibold tracking-tight">{ed.school}</p>
                    <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">{ed.when}</p>
                  </div>
                  <p className="text-muted-foreground">{ed.degree}</p>
                  {ed.detail ? <p className="mt-2 text-sm leading-relaxed text-foreground/65">{ed.detail}</p> : null}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section aria-labelledby="skills-title" className="mt-24">
          <SectionLabel id="skills-title">Skills & tools</SectionLabel>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="rounded-3xl border border-border bg-card p-6">
                <h3 className="font-semibold">{s.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/75"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="offline-title" className="mt-24 grid gap-6 border-t border-border pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] lg:gap-20">
          <SectionLabel id="offline-title">When I’m not designing</SectionLabel>
          <p className="max-w-2xl text-2xl leading-snug font-medium tracking-tight text-pretty">
            You’ll find me bouldering, crocheting, cooking recipes I found on social media, or catching up on a show.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
