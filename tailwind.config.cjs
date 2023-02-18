/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand__red: "#F41B3B",
        brand__yellow: "#F9CC0D",
        brand__green: "#1EBC99",
        brand__blue: "#1884F7",
        dark__primary: "#0A070B",
        dark__second: "#363536",
        dark__third: "#4F4E50",
        dark__fourth: "#807E81",
      },
      spacing: {
        space__1: "1rem",
        space__2: "1.5rem",
        space__3: "2rem",
        space__4: "3rem",
        space__5: "4rem",
        space__6: "5rem",
        space__7: "6rem",
        space__8: "7rem",
        space__9: "8rem",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('./images/BG.svg')",
      }),
    },
  },
  plugins: [],
};
