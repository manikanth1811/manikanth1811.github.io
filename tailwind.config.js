/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "hsl(0,0%,100%)",
            foreground: "hsl(222.2,84%,4.9%)",
            primary: "hsl(221.2,83.2%,53.3%)",
            secondary: "hsl(222.2,84%,4.9%)",
          },
        },
        dark: {
          colors: {
            background: "hsl(222.2,84%,4.9%)",
            foreground: "hsl(210,40%,98%)",
            primary: "hsl(217.2,91.2%,59.8%)",
            secondary: "hsl(217.2,32.6%,17.5%)",
          },
        },
      },
    }),
  ],
};
