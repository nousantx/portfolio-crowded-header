import { ProjectData } from '../data/project'
import { RiGithubFill, RiNpmjsLine, RiGlobalLine } from '@remixicon/react'

export const ProjectCard = ({ project }: { project: ProjectData }) => (
  <div className="project">
    <div>
      <h3 className="title">{project.title}</h3>
      <p className="desc">{project.description}</p>
    </div>
    <div className="pkg-meta">
      <div className="badges">
        <span
          className={`badge ${
            project.status === 'Stable'
              ? 'text-green-500'
              : project.status === 'Beta'
                ? 'text-yellow-500'
                : 'text-blue-500'
          }`}
        >
          {project.status}
        </span>
        {project.version && <span className="badge text-neutral-400">{project.version}</span>}
      </div>
      <div className="link">
        {project.github && (
          <a href={project.github} aria-label="GitHub Icon">
            <RiGithubFill size="18" />
          </a>
        )}
        {project.npm && (
          <a href={project.npm} aria-label="NPM Icon">
            <RiNpmjsLine size="18" />
          </a>
        )}
        {project.website && (
          <a href={project.website} aria-label="Live Preview Icon">
            <RiGlobalLine size="18" />
          </a>
        )}
      </div>
    </div>
  </div>
)
