/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1152px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      sora: ['Sora', 'sans-serif'],
      grotesc: ['Space Grotesk', 'monospace'],
      source: ['Source Code Pro', 'sans-serif'],
    },
    extend: {
      colors: {
        neutral: {
          100: '#F7FBFA',
          200: '#CAC6DD',
          300: '#ADA8C3',
          400: '#757185',
          500: '#3F3A52',
          600: '#252134',
          700: '#15131D',
          800: '#0E0C15',
        },
        custom: {
          100: '#AC6AFF',
          200: '#FFC876',
          300: '#FF776F',
          400: '#7ADB78',
          500: '#858DFF',
          600: '#FF98E2',
          700: '#219653',
          800: '#5E5CE6',
        }
      },
    },
  },
  plugins: [],
}
