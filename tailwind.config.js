const flowbite = require('flowbite-react/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'var(--white)',
      black: 'var(--black)',
      primary: 'var(--primary)',
      background: 'var(--background)',
      border: 'var(--border)',
      native: 'var(--native-color)',
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
        mono: 'var(--font-monospace)',
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-md)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '2.5xl': 'var(--text-2-5xl)',
        '3xl': 'var(--text-3xl)',
        '3.5xl': 'var(--text-3-5xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        '6xl': 'var(--text-6xl)',
      },
      spacing: {
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
      },
      lineHeight: {
        solid: 'var(--solid)',
        dense: 'var(--dense)',
        default: 'var(--default)',
        loose: 'var(--loose)',
      },
      fontWeight: {
        body: 'var(--body)',
        medium: 'var(--medium)',
        semibold: 'var(--semibold)',
        bold: 'var(--bold)',
        extrabold: 'var(--extrabold)',
        heavy: 'var(--heavy)',
      },
      maxWidth: {
        content: 'var(--size-max-width)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
      },
    },
  },
  plugins: [flowbite.plugin()],
}
