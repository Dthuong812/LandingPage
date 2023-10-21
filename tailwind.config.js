/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Sans"'],
        roboto: ['"Roboto"'],
      },
      colors: {
        orangeff: "#FF9900",
        orangef8: "#F85A47",
        gray31: "#31353B",
        gray33: "#333",
        grayda: "#DADADA",
      },
      gridTemplateColumns: {
        work: "1fr auto 1fr auto 1fr",
      },
        fontFamily: {
          'dm': ["DM Sans"],
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
