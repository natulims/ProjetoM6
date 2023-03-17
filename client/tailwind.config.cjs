/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: "#77575b",
        rosy: "#dc9e95",
        auburn: "#9c201d",
        brown: "#fad1ca9f",
        misty: "#ffe7e7",
        mountbatten: "#967578",
        night: "#141313",
        rusty: "#cc3d4b",
        cinereous: "#fad1ca9f",
      },

      fontFamily: {
        baloo: ["Baloo Chettan 2", "cursive"],
        poppins: ["Poppins", "sans - serif"],
      },
    },
  },
  plugins: [],
};
