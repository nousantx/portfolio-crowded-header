import 'preact'

declare module 'preact' {
  namespace JSX {
    interface HTMLAttributes<T> {
      child?: string
    }
  }
}
