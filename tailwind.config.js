const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.orange, DEFAULT: colors.orange[600] },
        secondary: { ...colors.gray, DEFAULT: colors.gray[100] },
      },
      fontSize: { xxs: ".5rem", xxxs: ".3rem" },
      textShadow: {
        DEFAULT:
          '0 0 10px theme("colors.primary.500"), 0 0 40px theme("colors.primary.800")',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
