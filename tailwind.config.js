/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { top: "0%" },
          "20%": { top: "0%" },
        },
      },
    },
  },
  plugins: [],
};
