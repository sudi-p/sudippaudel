import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        display: ['var(--font-dm-serif)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        ink: '#0f0f0f',
        fog: '#f5f4f0',
        mist: '#eceae3',
        slate: '#6b6a64',
        steel: '#3d3c38',
        gold: '#c9a84c',
        'gold-light': '#f5e9c8',
        'gold-dark': '#8a6e2a',
        sapphire: '#2c5f8a',
        'sapphire-light': '#ddeaf6',
        'sapphire-dark': '#1a3d5c',
        emerald2: '#2a6b4a',
        'emerald2-light': '#d8efe3',
        'emerald2-dark': '#1a4530',
        amber2: '#b86a1a',
        'amber2-light': '#faecd8',
        'amber2-dark': '#7a4210',
        rose2: '#a83240',
        'rose2-light': '#f5dde0',
        'rose2-dark': '#6e1e28',
        violet2: '#5a3d9e',
        'violet2-light': '#ece8fa',
        'violet2-dark': '#3a2468',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease both',
        'fade-in': 'fadeIn 0.4s ease both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
  plugins: [],
}
export default config
