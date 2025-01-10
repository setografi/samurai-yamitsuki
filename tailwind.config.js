/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C62726",
        secondary: "#C3C2C2",
        DarkCoral: "#C62726",
        bgBlack: "#020B13",
        bgNavy: "#000F1C",
      },

      fontFamily: {
        inter: ["Inter", "serif"],
        oswald: ["Oswald", "serif"],
      },
      letterSpacing: {
        two: "2px",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        rotate: "rotate 2s linear infinite",
      },
    },
  },
  plugins: [],
};
