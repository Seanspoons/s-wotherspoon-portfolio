/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#F7F8FA", // off-white base
        paper: "#FFFFFF",   // cards
        primary: "#1B263B", // deep navy
        accent: "#6CABDD",  // Man City blue
        muted: "#E6DFCF",   // sand / optional neutral
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};