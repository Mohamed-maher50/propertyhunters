/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      Raleway: ["Raleway", "'sans serif'"],
    },

    colors: {
      primary: "#3652AD",
      secondary: "#FE7A36",
      lightBlue: "#E9F6FF",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
