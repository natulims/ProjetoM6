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

      screens: {
        xs: "480px",
      },

      boxShadow: {
        card:
          "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)",
        cardhover:
          "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)",
      },

      fontFamily: {
        baloo: ["Baloo Chettan 2", "cursive"],
        poppins: ["Poppins", "sans - serif"],
      },
    },
  },
  plugins: [],
};
