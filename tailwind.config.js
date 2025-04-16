/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            DEFAULT: '#7198fc',
            hover: '#7393FF',
            active: '#7393FF'
        },
        secondary: {
            DEFAULT: '#ffffff',
            hover: '#138ec4',
        },
        tertiary: {
          DEFAULT: '#f5f5dc',
          hover: '#138ec4',
        },
        background: {
          DEFAULT: '#111218',
        },
        red: {
            DEFAULT: '#E82A3B',
            hover: '#cb2635',
        },
        green: {
            DEFAULT: '#75B626',
        },
        'blue': '#0B9EDA',
        'dark-blue': '#241E4C',
        'indigo-600': '#241E4C',
        'danger': '#FF0000',
        'warning': "#facc15",
        'white-soft': '#F7F7FC',
        'gray-primary': '#575563',
        'gray-secondary': '#637381',
        'dark': '#3c4858',
        'black': '#161c2d',
        'dark-footer': '#192132',
      },
    },
  },
  plugins: [],
}