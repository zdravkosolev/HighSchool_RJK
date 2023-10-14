/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
    },
    extend: {
      fontFamily: {
        heading: ['"Exo 2"'],
      },
      colors: {
        primary: {
          green: "#43B74A",
          lightblue: "#E2F5FB",
          blue: "#5FA4BD",
          darkblue: "#023859",
        },
        secondary: {
          red: "#DB2954",
          green: "#C9F2CA",
        },
        button: {
          green: {
            default: "#43B74A",
            hover: "#35893A",
            active: "#123915",
          },
          blue: {
            default: "#023859",
            hover: "#0C5E8F",
            active: "#023859",
          },
        },
      },
    },
  },
  plugins: [],
};
