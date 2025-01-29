/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#6a0dad", // Purple
          secondary: "#003366", // Dark Blue
          white: "#ffffff",
          black: "#000000",
        },
        boxShadow: {
          '3d': '5px 5px 15px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    plugins: [],
  };