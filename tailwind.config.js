/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ff75f5",
          "secondary": "#156b75",
          "accent": "#6fe87d",
          "neutral": "#342636",
          "base-100": "#2f3a42",
          "info": "#68c4ee",
          "success": "#0f6259",
          "warning": "#f2c769",
          "error": "#f77459",
        },
      },
    ],
  },
}

