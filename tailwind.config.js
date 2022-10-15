/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  important: true,
  media: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        william: ["VTC William", "serif"],
        dubois: ["VTC Du Bois", "serif"],
        duboisWide: ["VTC Du Bois Wide", "serif"],
        duboisNarrow: ["VTC Du Bois Narrow", "serif"],
        sans: ["neue-haas-unica", "sans-serif"],
        icons: ["DxD Icons"],
      },
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
      backgroundImage: {
        brooks: "url('/assets/images/brooks/1-sof_slaveship.jpg')",
      },
      colors: {
        black: "#1C1817",
        offblack: "#1C1817",
        offwhite: "#FAF1E9",
        nightingale_blue: "#3B6FE0",
        peabodyorange: "rgb(219, 136, 42)",
        brooksSecondary: "#EFCDFF",
        brooksPrimary: "#8C20E1",
        duboisTextColor: "white",
        duboisSecondary: "#FFD3D3",
        duboisPrimary: "#D92944",
        playfairSecondary: "#D1E4FF",
        playfairPrimary: "#3B6FE0",
        peabodySecondary: "#DBF5E9",
        peabodyPrimary: "#9AE4C1",
        willardSecondary: "#FEFFC9",
        willardPrimary: "#FEC313",
        labourSecondary: "#FFF0BC",
      },
      inset: {
        screen: "100vh",
        "-screen": "-100vh",
      },
      fontSize: {
        frontTitle: "14rem",
      },
      lineHeight: {
        veryTight: "0.8",
      },
    },
  },
  variants: {
    extend: {},
  },
};
