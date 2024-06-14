/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        audiowide: ["Audiowide", "cursive"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      screens: {
        // Existing breakpoints here
        xs: "450px", // Add the new breakpoint
        // Other existing breakpoints
      },
    },
  },
  plugins: [],
};
