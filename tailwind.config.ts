import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#01a8ec",
        secondary: "#000556",
        azul: "#0b3c6c",
        azulClarito: "#178bfc",
        celeste: "#2483ab",
        celesteClarito: "#34bffa",
        gris: "#575757",
        grisOscuro: "rgb(124, 124, 132)",
        grisClarito: "#7c7c84",
      },
      backgroundImage: {
        "title-gradient-light": "linear-gradient(to right, #01a8ec, #000556)",
        "title-gradient-dark": "linear-gradient(to right, #01a8ec, #ffffff)",
        radialBlack:
          "linear-gradient(225.95deg, #ffffff 0%, #575757 0%, #000556 91.61%)",
        blueRadial:
          "linear-gradient(90deg, #01a8ec 0%, rgba(0, 85, 150, 0.6) 95.83%)",
        blueLight:
          "linear-gradient(90deg, #01a8ec 0%, rgba(255, 255, 255, 0.86) 95.83%)",
      },
      boxShadow: {
        dark: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
