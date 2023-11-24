/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_color: "#03045e",
        secondary_color: "#00b4d8",
        text_primary: "#080808",
        text_secondary: "#0d1b2a",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
