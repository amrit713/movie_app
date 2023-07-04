/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [


    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var( --primary-color)",
        primary_dark:"var(--primary-color-dark)",
        primary_light:"var(--primary-color-light)",

        background_dark: "var( --background-dark)",
        background_light: "var( --background-light)",
        text_primary: "var(--text-primary)",
        text_secondary: "var(--text-secondary)",
      },
    },
  },
  plugins: [],
};
