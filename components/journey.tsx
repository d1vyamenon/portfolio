import { Fragment } from 'react'
import { projects } from '@/lib/projects'
import { JourneyConnector } from '@/components/journey-connector'
import { JourneyStop } from '@/components/journey-stop'

const imageColumnX = (index: number) => (index % 2 === 0 ? 25 : 75)

export function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="mx-auto max-w-5xl scroll-mt-8 px-6">
      <h2 id="journey-title" className="sr-only">
        Selected projects
      </h2>
      <JourneyConnector from={50} to={imageColumnX(0)} label="the journey begins" />
      {projects.map((project, index) => (
        <Fragment key={project.slug}>
          <JourneyStop project={project} index={index} />
          {index < projects.length - 1 ? (
            <JourneyConnector from={imageColumnX(index)} to={imageColumnX(index + 1)} />
          ) : (
            <JourneyConnector from={imageColumnX(index)} to={50} label="next stop: you?" />
          )}
        </Fragment>
      ))}
    </section>
  )
}
