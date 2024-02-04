/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "lava-100": "#f26e56",
        "lava-200": "#ff7e5a",
        "lava-300": "#ff7e5a"
      },
      textColor: {
        "lava-100": "#f26e56",
        "lava-200": "#ff7e5a",
        "lava-300": "#ff7e5a"
      }
    },
  },
  plugins: [],
};
