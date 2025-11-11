/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#F7F6F4",
        paper: "#FCFAF7",
        primary: "#3D5A80",
        accent: "#ECA189",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};