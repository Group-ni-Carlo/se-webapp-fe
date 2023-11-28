import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      orange300: '#FDAD33',
      orange500: '#FDA21A',
      orange700: '#FD9800',
      gray100: '#D9D9D9',
      gray300: '#BABABA',
      gray700: '#6B6B6B',
      blue100: '#9A99D7',
      blue700: '#04009C',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        slideInFromLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideInFromRight: {
          '0%': {
            transform: 'translateX(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(-100%)',
            opacity: '1',
          },
        },
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 0.5s ease-out',
        slideInFromRight: 'slideInFromRight 0.5s ease-out'
      },
    },
  },
  plugins: [],
}
export default config
