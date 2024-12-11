import { RiArrowRightDownLine } from '@remixicon/react'
import { styler } from '../utils/styler'


const HeroBanner = () => {
  styler()
  return (
    <header class="tw-balance px-1rem">
      <h1 class="text-head-1 family-inter relative">
        {/* Emojis section */}
        <div class="absolute bg-orange-100 px-10px py-4px text-neutral-950 text-para br-6px center fs-12px rt--15deg t--20px l-2rem ls--0.1em">
          <span class="block">{'<3'}</span>
          <div
            class="z--1 absolute br-2px t-10px box-1rem
                bg-orange-100 rt-45deg"
          ></div>
        </div>
        {/* Ond of Emojis section */}
        <div class="absolute w-0.5ch h-1.4ch bg-orange-100 [--bg-opacity]-0.1 [backdrop-filter]-[invert(100%)] t-4.3rem br-8px center"></div>
        <span class="text-head-1 fs-4rem [font-style]-italic family-inter fw-500 ls--0.045em flex ai-center gap-1rem mb--1rem">
          <span>
            NO<span class="text-orange-200 [--text-opacity]-0.4">t</span> u
            <span class="text-orange-200 [--text-opacity]-0.4">r</span>
          </span>
          <RiArrowRightDownLine size="80" />
        </span>
        Santx<span class="text-orange-600 [--text-opacity]-0">*</span>
        <span class="absolute t-100.5px r-2.6rem fs-10rem w-8px h-60px bg-yellow-400"></span>
        <span class="absolute t-60px r-5px fs-10rem box-5rem [animation]-[rotate_20s_linear_infinite] lh-1 text-rose-400 center pt-50px pr-4px">
          *
        </span>
        <span class="block fs-14px text-para ">
          <span class="inline-block text-head-1 w-2.55ch h-8px bg-green-400 mr-16px"></span>
          60%
          <span class="text-orange-100 [--text-opacity]-0.4"> Completed</span>
        </span>
      </h1>

      <p class="mt-10px text-para fs-1.4rem text-orange-300 d-none">Front-End Developer</p>
    </header>
  )
}

export default HeroBanner
