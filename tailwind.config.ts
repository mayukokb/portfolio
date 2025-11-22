import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        accentBlue: '#4F83FF',
        accentGreen: '#6CCB8E',
        accentOrange: '#F4B740'
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        lift: '0 12px 30px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
