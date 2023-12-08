/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#49aee5",

        secondary: "#f7aaca",

        accent: "#38aeb5",

        neutral: "#24292d",

        "base-100": "#fcfcfd",

        info: "#398bc6",

        success: "#21b08a",

        warning: "#e08b15",

        error: "#e23c41",
      },
    },
  ],
  plugins: [require("daisyui")],
};
