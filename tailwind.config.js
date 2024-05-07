/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-backdrop":
          "linear-gradient(to top right, #3C3F8A, #3C3F8A, #3C3F8A, #797BB0)",
        "image-gradient": "bg-gradient-to-b from-yellow-400 to-green-400",
      },
      colors: {
        nav: "#AB1111",
        primary: "#AB1111",
        secondary: "#808080",
        regular: "#ffffff",
      },
    },
    fontFamily: {
      petrona: ["Petrona", "serif"],
      open_sans: ["Open Sans", "sans-serif"],
      Otomanopee_One: ["Otomanopee One", "sans-serif"],
      oleo_script: ["Oleo Script", "system-ui"],
    },
  },
  plugins: [],
};
