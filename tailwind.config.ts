import flowbite from 'flowbite-react/tailwind'
import type { Config } from 'tailwindcss'

const config: Config = {
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
    extend: {
      colors: {
        primary: '#4a90e2',
        native: '#1D1D1D',
        'native-yellow': '#FAAB00',
      },
      fontFamily: {
        sans: ['Inter var', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Poppins', 'sans-serif'],
        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '2.5xl': '28px',
        '3xl': '32px',
        '3.5xl': '40px',
        '4xl': '50px',
        '5xl': '64px',
        '6xl': '76px',
      },
      spacing: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '48px',
      },
      lineHeight: {
        solid: '1',
        dense: '1.25',
        default: '1.5',
        loose: '1.75',
      },
      fontWeight: {
        body: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        heavy: '900',
      },
      maxWidth: {
        content: '100rem',
      },
    },
  },
  plugins: [flowbite.plugin()],
}

export default config
