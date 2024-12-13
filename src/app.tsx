import { styler } from './utils/styler'
import HeroBanner from './components/hero-banner'
import Footer from './components/footer'

import {
  RiArrowRightUpLine,
  RiGlobalLine,
  RiGithubFill,
  RiGithubLine,
  RiNpmjsLine,
  RiMailLine,
  RiSmartphoneLine,
  RiMapPinLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiLinkedinBoxLine
} from '@remixicon/react'

interface ProjectData {
  title: string
  description: string
  status: string
  version?: string
  github?: string
  npm?: string
  website?: string
}

const ProjectCard = ({ project }: { project: ProjectData }) => (
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

const projectsData: ProjectData[] = [
  {
    title: 'TenoxUI Library',
    description:
      'Very tiny and lightweight JavaScript library, utility-first CSS like framework for style management with DOM',
    status: 'Beta',
    version: 'v0.12.4',
    github: 'https://github.com/tenoxui/tenoxui',
    npm: 'https://npm.im/@nousantx/color-generator',
    website: 'https://tenoxui.web.app'
  },
  {
    title: 'Color Shades Generator',
    description:
      'Color shades generator is a tool to generate 11 color shades from a single hex color, with multiple output format choice',
    status: 'Stable',
    version: 'v1.5.1',
    github: 'https://github.com/tenoxui/tenoxui',
    npm: 'https://npm.im/@nousantx/color-generator'
  },
  {
    title: 'Code to Image',
    description:
      'Generate image from html code, fast and lightweight website built with PreactJS with high performance and real-time style changes',
    status: 'Website',
    github: 'https://github.com/nousantx/code-to-image-generator',
    website: 'https://nsx-code-to-image.web.app'
  },
  {
    title: 'TenoxUI Documentation',
    description:
      'TenoxUI official documentation built with Vitepress and VueJS, with clear example',
    status: 'Website',
    github: 'https://github.com/tenoxui/website',
    website: 'https://tenoxui.web.app'
  },
  {
    title: 'Someutils - TenoxUI Extended Utility',
    description: 'Small library for helping you using and customizing TenoxUI framework easier',
    status: 'Stable',
    version: 'v0.6.1',
    github: 'https://github.com/nousantx/tenoxui-someutils',
    npm: 'https://npm.im/@nousantx/someutils'
  },
  {
    title: 'NWM - aNother Workspace Manager',
    description: 'Simple and lightweight package for managing a monorepo easier',
    status: 'Beta',
    version: 'v1.1.0',
    github: 'https://github.com/nousantx/nsx-workspace-manager',
    npm: 'https://npm.im/@nousantx/nwm'
  },
  {
    title: 'GoghTermux - Color Scheme',
    description: 'Gogh color schemes builder for Termux app',
    status: 'Stable',
    github: 'https://github.com/nousantx/GoghTermux'
  }
]

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

const Plus = () => <span class="block fs-30px box-24px center pt-10px">*</span>

export function App() {
  styler()

  return (
    <>
      <main>
        <article>
          <HeroBanner />
          <div
            class="flex-w-wrap flex ai-strecth mt-6rem gap-3rem px-2rem"
            data-child="
              (section): mt-2rem flex-[1_1_300px];
              (section h2): text-para;
              (section header): 
                w-full center jc-space-between text-neutral-700 text-para;
              (section .divider): 
                w-full mt-1rem mb-2rem h-2px bg-neutral-600 bg-opacity-0.3;
              (section p): text-para text-orange-100 fs-1.3rem te-balance;
              (section p:not(:first-child)): mt-2rem;
              (section p > a, section p > .light): text-orange-200;
            "
          >
            {/* Info Section */}
            <section>
              <header>
                <div class="center">
                  <Plus />
                  <span>1</span>
                </div>
                <h2>About Me</h2>
              </header>
              <div class="divider"></div>

              <p>
                Hey 👋. I am <span class="light">NOuSantx</span> (Nur Ikhsan M.). Front-end
                Developer, Open-Source Enthusiast, and Web Designer from{' '}
                <a href="https://en.wikipedia.org/wiki/East_Java">East Java, Indonesia.</a>
              </p>
              <p>
                I love building intuitive and visually appealing user interfaces that deliver great
                experiences.
              </p>

              <div
                class="flex flex-w-wrap gap-8px ai-center mt-2.5rem"
                data-child="(a): box-40px br-999px center td-none text-orange-100 tr-time-300ms bdr-[1px_solid_rgb({neutral-700})];"
              >
                <a href="https://linkedin.com/in/nousantx" aria-label="Linkedin Icon">
                  <RiLinkedinBoxLine size="22" />
                </a>
                <a href="https://github.com/nousantx" aria-label="GitHub Icon">
                  <RiGithubLine size="22" />
                </a>
                <a href="https://x.com/nousantx" aria-label="Twitter(x) Icon">
                  <RiTwitterXLine size="22" />
                </a>
                <a href="https://instagram.com/nousantx" aria-label="Instagram Icon">
                  <RiInstagramLine size="22" />
                </a>
              </div>
            </section>
            <section>
              <header>
                <div class="center">
                  <Plus />
                  <span>2</span>
                </div>
                <h2>What i do?</h2>
              </header>
              <div class="divider"></div>
              <p>
                I specialize in creating responsive, user-friendly websites using the latest web
                technologies.
              </p>
              <p>
                As open sourcer, i create various front-end tooling which can make web development
                easier.
              </p>

              <div class="mt-2rem flex">
                <a
                  href="https://github.com/nousantx"
                  class="center text-orange-200 hover:text-orange-400 tr-time-300ms text-para fs-1rem gap-5px"
                >
                  Explore My GitHub <RiArrowRightUpLine size="18" />
                </a>
              </div>
            </section>
            <section class="flex-b-100%">
              <header>
                <div class="center">
                  <Plus />
                  <span>3</span>
                </div>
                <h2>Projects</h2>
              </header>
              <div class="divider"></div>

              <Projects />
            </section>
            <section class="flex-b-100%">
              <header>
                <div class="center">
                  <Plus />
                  <span>4</span>
                </div>
                <h2>Skills</h2>
              </header>
              <div class="divider"></div>
              <p>
                I am very comfortable with <span class="light">React</span> as my main tool for
                creating a Website. But i also experienced with <span class="light">Vue</span> and{' '}
                <span class="light">Svelte</span>.
              </p>
              <p>
                I also fundamentally strong in HTML, CSS, JavaScript, TypeScript, Rollup, Vite,
                Vitest (for unit test), Tailwind CSS, and Bootstrap.
              </p>
            </section>
            <section>
              <header>
                <div class="center">
                  <Plus />
                  <span>5</span>
                </div>
                <h2>Hobby and Interest</h2>
              </header>
              <div class="divider"></div>
              <p>
                When i am not coding, you'll find me cycling through scenic trails, camera in hand,
                capturing stunning landscapes that tell their own unique stories.
              </p>
              <p>
                I'm also enjoy good Chess and Badminton games, and I've got a soft spot for
                astrology.
              </p>
            </section>
            <section>
              <header>
                <div class="center">
                  <Plus />
                  <span>6</span>
                </div>
                <h2>Contact Me</h2>
              </header>
              <div class="divider"></div>

              <h3 class="text-para fs-1.75rem lh-1">Let's Stay in Touch!</h3>
              <p class="fs-1rem mt-1.5rem">
                Interested in my works or have nice projects we could solve together? Let's get in
                touch!
              </p>

              <span class="mt-2.5rem flex ai-center text-para fs-1rem gap-8px">
                <RiMailLine size="18" /> nousantx@gmail.com
              </span>
              <span class="mt-1rem flex ai-center text-para fs-1rem gap-8px">
                <RiSmartphoneLine size="18" /> +62 8 1515 939 72
              </span>
              <span class="mt-1rem flex ai-center text-para fs-1rem gap-8px">
                <RiMapPinLine size="18" /> Malang Regency, East Java, Indonesia
              </span>
            </section>
            {/* End of Info Section */}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
