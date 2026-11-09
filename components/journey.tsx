import { Fragment } from 'react'
import { projects } from '@/lib/projects'
import { JourneyConnector } from '@/components/journey-connector'
import { JourneyStop } from '@/components/journey-stop'

const imageColumnX = (index: number) => (index % 2 === 0 ? 25 : 75)

export function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="site-container scroll-mt-24 pt-8">
      <h2 id="journey-title" className="sr-only">
        Selected projects, most recent first
      </h2>
      {/* The hero's trail leads into the first stop; connectors link each stop to the next. */}
      {projects.map((project, index) => (
        <Fragment key={project.slug}>
          <JourneyStop project={project} index={index} />
          {index < projects.length - 1 ? (
            <JourneyConnector from={imageColumnX(index)} to={imageColumnX(index + 1)} />
          ) : (
            <JourneyConnector from={imageColumnX(index)} to={50} />
          )}
        </Fragment>
      ))}
    </section>
  )
}
