/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerBg: "rgb(218, 79, 73)",
      },
      width: {
        200: "500px",
        300: "600px",
        700: "700px",
        900: "900px",
        70: "70%",
      },
      height: {
        400: "500px",
      },
    },
  },
  plugins: [],
};
