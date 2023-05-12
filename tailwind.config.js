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
      "3xl": "1896px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        dubois: ["VTC Du Bois, serif", { fontFeatureSettings: ' "ss06"' }],
        duboisWide: ["VTC Du Bois Wide", "serif"],
        duboisLightWide: ["VTC Du Bois Light Wide", "serif"],
        duboisNarrow: ["VTC Du Bois Narrow", "serif"],
        duboisLightNarrow: ["VTC Du Bois Light Narrow", "serif"],
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
        peabodyOrange: "rgb(219, 136, 42)",
        brooksSecondary: {
          DEFAULT: "#E0DCF2",
          translucent: "#E0DCF2CC",
        },
        brooksPrimary: {
          DEFAULT: "#8C20E1",
          translucent: "#8c20e1cc",
        },
        duboisTextColor: "white",
        duboisSecondary: {
          DEFAULT: "#FFD3D3",
          translucent: "#FFD3D3CC",
        },
        duboisPrimary: {
          DEFAULT: "#D92944",
          translucent: "#D92944CC",
        },
        playfairSecondary: {
          DEFAULT: "#D1E4FF",
          translucent: "#D1E4FFCC",
        },
        playfairPrimary: {
          DEFAULT: "#3B6FE0",
          translucent: "#3B6FE0CC",
        },
        peabodySecondary: {
          DEFAULT: "#DBF5E9",
          translucent: "#DBF5E9CC",
        },
        peabodyPrimary: {
          DEFAULT: "#9AE4C1",
          translucent: "#9AE4C1CC",
        },
        peabodyPrimaryHalfOpacity: "#9ae4c180",
        peabodyChartBackground: "#d9bb9f",
        willardSecondary: "#FEFFC9",
        willardPrimary: "#FEC313",
        labourSecondary: "#FFF0BC",
        England: "rgb(119,43,21)",
        France: "rgb(60,100,100)",
        Americas: "rgb(222,145,49)",
        Holland: "rgb(68,108,73)",
        Sweden: "rgb(217,182,17)",
        Spain: "rgb(209, 42, 5)",
        Native: "url(#diagonalHatch)",
        Mexico: "rgb(209, 42, 5)",
      },
      inset: {
        screen: "100vh",
        "-screen": "-100vh",
      },
      fontSize: {
        frontTitle: "8rem",
      },
      lineHeight: {
        veryTight: "0.8",
      },
    },
  },
  variants: {
    extend: {},
  },
  safelist: [
    "bg-brooksPrimary",
    "bg-brooksSecondary",
    "bg-brooksPrimary-translucent",
    "bg-brooksSecondary-translucent",
    "text-duboisPrimary",
    "text-playfairPrimary",
    "bg-playfairPrimary",
    "bg-playfairPrimary-translucent",
    "bg-playfairSecondary-translucent",
    "text-peabodyPrimary",
    "text-peabodyOrange",
    "bg-peabodyPrimary",
    "bg-peabodyPrimary-translucent",
    "transition-opacity",
    "opacity-0",
    "opacity-100",
    "duration-700",
    "text-offblack",
    "font-extrabold",
    "bg-England",
    "bg-France",
    "bg-Americas",
    "bg-Holland",
    "bg-Sweden",
    "bg-Spain",
    "bg-Native",
    "bg-Mexico",
    "font-icons",
    "outline-4",
    "outline-red-500",
    "outline-solid",
    "scale-0",
    "scale-100",
    "fill-gray-300",
    "fill-gray-50",
    "text-red-800",
    "text-lime-500",
    "top-12",
    "top-24",
  ],
};
