export interface ProjectData {
  title: string
  description: string
  status: string
  version?: string
  github?: string
  npm?: string
  website?: string
}

export const projectsData: ProjectData[] = [
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
