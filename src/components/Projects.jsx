import useElementOnScreen from '@/hooks/useElementOnScreen'
import { projects } from '@/utils/projectsData'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [containerRef, isVisible] = useElementOnScreen()

  return (
    <section id='projects' className='max-w-4xl h-fit mx-auto py-16'>
      <h2 className='mt-4 mb-8 bg-black text-white font-bold text-3xl text-center rounded-2xl'>
        PROYECTOS
      </h2>

      <div ref={containerRef} className='flex flex-wrap justify-around gap-y-5'>
        {projects.map((project) => (
          <article
            key={project.title}
            className={`card ${isVisible ? 'visible' : ''}`}
          >
            <ProjectCard
              title={project.title}
              image={project.image}
              description={project.description}
              siteLink={project.siteLink}
              codeLink={project.codeLink}
            />
          </article>
        ))}
      </div>
    </section>
  )
}
