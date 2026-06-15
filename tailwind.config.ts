import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        // ── Official Ibeju-Lekki palette ──────────────────────────────
        yellow: '#F5A623',  // primary highlight / fills (black text on top)
        amber:  '#B26B00',  // readable yellow text on white; hovers
        black:  '#111111',  // body text + dark sections
        ink:    '#111111',  // alias
        red:    '#BE1E2D',  // touch of red (alerts, emergencies)
        bone:   '#FFFFFF',  // page background
        cream:  '#FAFAFA',  // subtle alternating section background
        // legacy names remapped so any stray usage stays on-brand
        forest: '#F5A623',
        moss:   '#E08E0B',
        gold:   '#F5A623',
      },
    },
  },
  plugins: [],
};

export default config;
