/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'hsl(263, 55%, 52%)',
          200: 'hsl(217, 19%, 35%)',
          300: 'hsl(219, 29%, 14%)',
          white: 'hsl(0, 0%, 100%)',
          light: 'hsl(0, 0%, 100%, 0.7)',
          lighter: 'hsl(0, 0%, 100%, 0.5)',
        },
        secondary: {
          100: 'hsl(217, 19%, 35%)',
          200: 'hsl(219, 29%, 14%)',
          light: 'hsl(219, 29%, 14%, 0.7)',
          lighter: 'hsl(219, 29%, 14%, 0.5)',
        },
        neutral: {
          100: 'hsl(0, 0%, 81%)',
          200: 'hsl(210, 46%, 95%)',
        }
      },
      fontFamily: {
        body: ['Barlow Semi Condensed']
      },
      zIndex: {
        'behind': '-1',
      },
    },
  },
  plugins: [],
}
