/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#d4a843',
        'background-light': '#f8f7f6',
        'background-dark': '#0a0a08',
        'neutral-800': '#1a1a16',
        'neutral-900': '#0f0f0d',
      },
      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['DM Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
