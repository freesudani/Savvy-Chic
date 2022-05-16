module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      screens: {
        mb: { max: "400px" },
        // => @media (max-width: 400px)  { ... }
      },
      colors: {
        primary: { 200: "#B55A19", 100: "#C37B47" },
        secondary: { 200: "#1938B5", 100: "#475FC3" },
      },
      fontFamily: {
        rubik: ["Rubik"],
      },
    },
  },
  plugins: [],
};
