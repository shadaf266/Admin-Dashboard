/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#f3f4f6",
        gray: {
          "100": "#171a1f",
          "200": "rgba(0, 0, 0, 0)",
        },
        goldenrod: "#efb034",
        limegreen: "#1dd75b",
        cornflowerblue: "#379ae6",
        lightslategray: "#9095a0",
        mediumslateblue: "#8353e2",
        darkturquoise: "#00bdd6",
        royalblue: "#4069e5",
        darkslategray: "#323842",
        dimgray: "#565e6c",
        ghostwhite: {
          "100": "#f5f2fd",
          "200": "#f1f4fd",
        },
        crimson: "#de3b40",
        azure: "#ebfdff",
        slateblue: "#5549af",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        montserrat: "Montserrat",
        epilogue: "Epilogue",
      },
      borderRadius: {
        lg: "18px",
        mini: "15px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      xs: "12px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
