import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0A1F14',
        forest: '#0F3D2E',
        moss: '#1B5E3F',
        sage: '#7BA889',
        gold: '#C89B3C',
        cream: '#F6F1E7',
        bone: '#FAF7F0',
      }
    },
  },
  plugins: [],
};
export default config;
