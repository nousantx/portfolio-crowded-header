import { styler } from './utils/styler'
import HeroBanner from './components/hero-banner'
import Footer from './components/footer'
import {
  RiArrowRightUpLine,
  RiGithubLine,
  RiMailLine,
  RiSmartphoneLine,
  RiMapPinLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiLinkedinBoxLine
} from '@remixicon/react'
import { Projects } from './components/projects'

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
