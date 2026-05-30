import { buildLegacyTheme } from 'sanity'

const props = {
  '--my-white':       '#FFFFFF',
  '--my-black':       '#0A1F14',
  '--my-forest':      '#0F3D2E',
  '--my-gold':        '#C89B3C',
  '--my-bone':        '#FAF7F0',
  '--my-red':         '#BE1E2D',
  '--my-muted':       '#6B7280',
  '--my-border':      'rgba(15,61,46,0.12)',
}

export const theme = buildLegacyTheme({
  /* Base */
  '--black':     props['--my-black'],
  '--white':     props['--my-white'],

  /* Focus ring */
  '--focus-color': props['--my-gold'],

  /* Text */
  '--text-color':   props['--my-black'],
  '--muted-color':  props['--my-muted'],

  /* Brand */
  '--brand-primary': props['--my-forest'],

  /* Default button */
  '--default-button-color':            props['--my-forest'],
  '--default-button-primary-color':    props['--my-forest'],
  '--default-button-success-color':    '#1B7A3E',
  '--default-button-warning-color':    props['--my-gold'],
  '--default-button-danger-color':     props['--my-red'],

  /* State colors */
  '--state-info-color':    props['--my-forest'],
  '--state-success-color': '#1B7A3E',
  '--state-warning-color': props['--my-gold'],
  '--state-danger-color':  props['--my-red'],

  /* Navbar */
  '--main-navigation-color':            props['--my-forest'],
  '--main-navigation-color--inverted':  props['--my-white'],

  /* Top bar */
  '--top-bar-color':           props['--my-forest'],
  '--top-bar-color--inverted': props['--my-white'],

  /* Card */
  '--card-color':        props['--my-white'],
  '--card-border-color': props['--my-border'],
})
