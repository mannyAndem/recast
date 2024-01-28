/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        smoke: "#F1EAFF",
        veryLightPurple: "#E5D4FF",
        lightPurple: "#DCBFFF",
        purple: "#D0A2F7",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
