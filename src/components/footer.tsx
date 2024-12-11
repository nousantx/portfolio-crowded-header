import { RiArrowRightDownLine } from '@remixicon/react'
import { styler } from '../utils/styler'

const Footer = () => {
  styler()
  return (
    <footer className="w-mx-1280px mx-auto p-2rem text-center">
      <p>© {new Date().getFullYear()} NOuSantx. All rights reserved.</p>
      <div className="social-icons flex gap-1rem justify-center">
        <a href="https://github.com/nousantx" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/nousantx" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default Footer
