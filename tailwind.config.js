/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        secondary: {
          50: '#f7f9ff',
          100: '#eff3ff',
          200: '#dfe7ff',
          300: '#cdd8ff',
          400: '#B3BFFF',
          500: '#99a6ff',
          600: '#7a85f5',
          700: '#5f67e0',
          800: '#4d52b8',
          900: '#414592',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
