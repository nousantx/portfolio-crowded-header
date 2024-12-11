import { useLayoutEffect } from 'preact/hooks'
import { MakeTenoxUI } from '../tenoxui-full.esm'
import { init } from '@nousantx/tenoxui-styler'
import config from '../../tenoxui.config'

export function styler() {
  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      'child',
      `
      (body): bg-neutral-950 text-orange-100;
      (a): hover:[text-decoration-color]-transparent tr-time-0.3s [text-decoration-style]-dashed;
    
    `
    )
    init({ config, engine: MakeTenoxUI })
  }, [])
}
