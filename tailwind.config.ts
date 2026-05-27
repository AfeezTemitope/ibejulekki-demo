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
        forest: '#0F3D2E',
        moss:   '#1B5E3F',
        ink:    '#0A1F14',
        gold:   '#C89B3C',
        red:    '#BE1E2D',
        bone:   '#FAF7F0',
        cream:  '#EDE8DC',
      },
    },
  },
  plugins: [],
};

export default config;
