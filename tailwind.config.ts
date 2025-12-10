// tailwind.config.ts cho version 3.x
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sea: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          900: '#0c4a6e',
        },
        sun: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          800: '#292524',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.2s ease-out'
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config

export default config