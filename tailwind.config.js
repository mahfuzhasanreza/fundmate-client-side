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
          50: '#fdf4fd',
          100: '#fce7fc',
          200: '#f9d0f9',
          300: '#f5aaf6',
          400: '#f193f3',
          500: '#DD7BDF',
          600: '#c961cb',
          700: '#a84faa',
          800: '#874088',
          900: '#6b3470',
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
