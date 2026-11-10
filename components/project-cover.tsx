import Image from 'next/image'
import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/projects'
import { withBase } from '@/lib/base-path'

type ProjectCoverProps = {
  project: Project
  className?: string
  sizes?: string
}

/**
 * The image beside each project on the homepage.
 *
 * To add one, put an SVG or PNG (a company logo or a related graphic, with a
 * transparent background) in /public/projects and set `image` and `imageAlt`
 * on the project in lib/projects.ts. It's shown whole (never cropped) and centered
 * directly on the page, so logos of any shape fit.
 *
 * Until then, a labeled placeholder box shows where it will go.
 */
export function ProjectCover({ project, className, sizes }: ProjectCoverProps) {
  const name = project.logoName ?? project.org

  if (project.image) {
    const tile = project.imageStyle === 'tile'
    // No box behind the logo: it sits right on the page, centered in the same space a card would take.
    return (
      <div
        className={cn(
          'relative flex aspect-[4/3] w-full items-center justify-center',
          tile ? 'p-[22%]' : 'p-[12%]',
          className,
        )}
      >
        <Image
          src={withBase(project.image)}
          alt={project.imageAlt ?? `${name} logo`}
          width={1000}
          height={1000}
          className={cn(
            'h-full w-full object-contain',
            tile && 'w-auto max-w-full rounded-[22%] shadow-[0_12px_30px_-14px_rgba(36,24,26,0.45)]',
          )}
          sizes={sizes}
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={`Image placeholder for ${project.title}`}
      className={cn(
        'flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-[1.5rem] border-2 border-dashed border-foreground/15 bg-card p-6 text-center text-muted-foreground',
        className,
      )}
    >
      <ImageIcon className="size-7 opacity-60" aria-hidden="true" />
      <span className="text-sm font-medium">{name} logo or graphic</span>
    </div>
  )
}
