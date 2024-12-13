import { h } from 'preact'

declare module 'preact' {
  namespace JSX {
    interface TenoxUIAttr extends HTMLAttributes<HTMLElement> {
      child?: string
    }
  }
}
