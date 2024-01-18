import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Poppins: ['"Poppins", "sans-serif"'],
        Outfit: ['"Outfit","sans-serif"'],
        Pacifico: ['"Pacifico","cursive"'],
        Rubik: ['"Rubik","sans-serif"'],
      },
     
      
    },
  },
  plugins: [],
};
export default config;



// screens: {
//         xs: "340px",
//         // => @media (max-width: 340px) { ... }
//         sm: "767px",
//         // => @media (max-width: 767px) { ... }

//         md: "768px",
//         // => @media only screen and (max-width: 1190px) and (min-width: 768px) { ... }

//         lg: "1580px",
//         // => @media (max-width: 1580px) { ... }

//         xl: "1920px",
//         // => @media (min-width: 1920px) { ... }
//       },