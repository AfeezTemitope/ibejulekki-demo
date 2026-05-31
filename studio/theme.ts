import { buildLegacyTheme } from 'sanity'

export const theme = buildLegacyTheme({
  /* Base */
  '--black': '#0A1F14',
  '--white': '#FFFFFF',

  /* Focus */
  '--focus-color': '#C89B3C',

  /* Brand */
  '--brand-primary': '#0F3D2E',

  /* Buttons */
  '--default-button-color':            '#0F3D2E',
  '--default-button-primary-color':    '#0F3D2E',
  '--default-button-success-color':    '#1B7A3E',
  '--default-button-warning-color':    '#C89B3C',
  '--default-button-danger-color':     '#BE1E2D',

  /* State */
  '--state-info-color':    '#0F3D2E',
  '--state-success-color': '#1B7A3E',
  '--state-warning-color': '#C89B3C',
  '--state-danger-color':  '#BE1E2D',

  /* Navbar */
  '--main-navigation-color':           '#0F3D2E',
  '--main-navigation-color--inverted': '#FFFFFF',

  /* Top bar */
  '--top-bar-color':           '#0F3D2E',
  '--top-bar-color--inverted': '#FFFFFF',
})
