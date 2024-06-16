/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: { side: '15rem' },
      padding: { side: '15rem' },
      colors: {
        light: {
          'bg': '#ffffff',
          'bg-soft': '#f9f9f9',
          'bg-mute': '#f1f1f1',
          'divider': 'rgba(60, 60, 60, .29)',
          'divider-light': 'rgba(60, 60, 60, .12)',
          'divider-inverse': 'rgba(84, 84, 84, .65)',
          'divider-inverse-light': 'rgba(84, 84, 84, .48)',
          'text-1': '#213547',
          'text-2': 'rgba(60, 60, 60, .7)',
          'text-3': 'rgba(60, 60, 60, .33)',
          'text-4': 'rgba(60, 60, 60, .18)',
          'text-code': '#476582',
          'text-inverse-1': 'rgba(255, 255, 255, .87)',
          'text-inverse-2': 'rgba(235, 235, 235, .6)',
          'text-inverse-3': 'rgba(235, 235, 235, .38)',
          'text-inverse-4': 'rgba(235, 235, 235, .18)',
          'brand': '#42b883',
          'brand-light': '#42d392',
          'brand-dark': '#33a06f',
          'brand-highlight': '#33a06f',
        },
        dark: {
          bg: '#1a1a1a',
          'bg-soft': '#242424',
          'bg-mute': '#2f2f2f',
          divider: 'rgba(84, 84, 84, .65)',
          'divider-light': 'rgba(84, 84, 84, .48)',
          'divider-inverse': 'rgba(60, 60, 60, .29)',
          'divider-inverse-light': 'rgba(60, 60, 60, .12)',
          text: {
            1: 'rgba(255, 255, 255, .87)',
            2: 'rgba(235, 235, 235, .6)',
            3: 'rgba(235, 235, 235, .38)',
            4: 'rgba(235, 235, 235, .18)',
            code: '#aac8e4',
            'inverse-1': '#213547',
            'inverse-2': 'rgba(60, 60, 60, .7)',
            'inverse-3': 'rgba(60, 60, 60, .33)',
            'inverse-4': 'rgba(60, 60, 60, .18)'
          }
        }
      }
    }
  },
}
