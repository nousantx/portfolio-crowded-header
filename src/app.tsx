import { RiArrowRightUpLine, RiGlobalLine, RiGithubFill, RiNpmjsLine } from '@remixicon/react'
import { styler } from './utils/styler'
import HeroBanner from './components/hero-banner'
import Footer from './components/footer'

const Projects = () => {
  return (
    <section
      class="flex ai-stretch flex-w-wrap gap-2rem"
      child="
        (.project): 
          [border]-[1px_solid_rgb({orange-100})] 
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
    "
    >
      <div class="project">
        <div>
          <h3 class="title">TenoxUI Library</h3>

          <p class="desc">
            A lightweight JavaScript Library, utility-first CSS like framework for style management.
          </p>
        </div>
        <div class="pkg-meta">
          <div class="flex ai-center gap-8px flex-w-wrap">
            <span class="text-para fs-12px">Status : </span>
            <span class="br-999px bdr-[1px_solid_currentColor] px-8px py-2px text-para fs-12px text-yellow-500">
              Beta
            </span>
            <span class="br-999px bdr-[1px_solid_currentColor] px-8px py-2px text-para fs-12px text-neutral-400">
              v0.12.4
            </span>
          </div>

          <div class="link">
            <a href="https://github.com/tenoxui/tenoxui" aria-label="GitHub Icon">
              <RiGithubFill size="18" />
            </a>
            <a href="https://npm.im/@nousantx/color-generator" aria-label="NPM Icon">
              <RiNpmjsLine size="18" />
            </a>
            <a href="https://tenoxui.web.app" aria-label="Live Preview Icon">
              <RiGlobalLine size="18" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
const Plus = () => <span class="block fs-30px box-24px center pt-10px">*</span>

export function App() {
  styler()

  return (
    <>
      <main class="w-mx-1024px mx-auto h-mn-100vh over-hidden">
        <article class="py-8rem h-mn-100vh flex flex-d-column ai-center">
          <HeroBanner />
          <div
            class="flex-w-wrap flex ai-strecth mt-6rem gap-3rem px-2rem"
            child="
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
            <section class="flex-b-100%">
              <header>
                <div class="center">
                  <Plus />
                  <span>4</span>
                </div>
                <h2>Projects</h2>
              </header>
              <div class="divider"></div>

              <Projects />
            </section>
            <section>
              <header>
                <div class="center">
                  <Plus />
                  <span>5</span>
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
                  <span>6</span>
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
            {/* End of Info Section */}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}