import { createConfig } from '@nousantx/tenoxui-styler'

export default createConfig({
  property: {
    'bg-opacity': '--bg-opacity',
    'text-opacity': '--text-opacity',
    rt:{
      "property": "transform",
      value:"rotate({0})"
    }
  },
  utilityClasses: {
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  aliases: {
    'text-head-1': 'fs-7rem fw-600 family-poppins ls--0.025em lh-1',
    'text-para': 'fs-1rem fw-500 ls--0.015em lh-1.5',
    light: 'fw-600'
  },
  attributify: true
})
