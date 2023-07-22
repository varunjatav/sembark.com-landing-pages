const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_includes/**/*.{njk,md}","./*.{njk,md,html}" ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class', // only generate classes
    }),
  ],
}

