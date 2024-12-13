import { RiGithubFill } from '@remixicon/react'
import { projectsData } from '../data/project'
import { ProjectCard } from './project-card'

export const Projects = () => {
  return (
    <section
      className="flex ai-stretch flex-w-wrap gap-2rem"
      data-child="
        (.project): 
          [border]-[1px_solid_rgb({orange-100}_/_0.4)] 
          flex flex-d-column gap-2rem
          jc-space-between
          flex-[1_1_250px] 
          p-1.75rem 
          tw-unset 
          br-8px;
        (.project .title): text-para lh-1 fs-1.75rem;
        (.project .desc): mt-14px text-para text-orange-200 text-opacity-0.8 fs-14px;
        (.project .pkg-meta): flex jc-space-between ai-center;
        (.project .pkg-meta .link): center gap-4px flex-w-wrap;
        (.project .pkg-meta .link a): box-26px br-8px center td-none text-orange-100 hover:bg-neutral-900 tr-time-300ms;
        (.project .pkg-meta .badges): flex ai-center gap-8px flex-w-wrap;
        (.project .pkg-meta .badges .badge): br-999px bdr-[1px_solid_currentColor] px-8px py-2px text-para fs-12px;
    "
    >
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
      <div className="project center flex-d-column gap-8px">
        <RiGithubFill size="32" />
        <a href="https://github.com/nousantx" className="text-para [color]-inherit">
          More on GitHub
        </a>
      </div>
    </section>
  )
}
