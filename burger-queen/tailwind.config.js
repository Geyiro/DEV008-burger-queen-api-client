/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "burger-blue": "#0D3C97",
        "burger-orange": "#E95636",
        "burger-yellow": "#FFFF00",
      },
      fontFamily: {
        sans: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        button: "1px 7px 13px 0px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
