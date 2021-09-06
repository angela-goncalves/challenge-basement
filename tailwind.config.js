module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": {transform: "translateX(0%)"},
          "100%": {transform: "translateX(-100%)"},
        },
        marquee2: {
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(0%)"},
        },
      },
      textColor: {
        textInput: "rgba(131, 229, 118, 1)",
      },
      inset: {
        14: "3.6rem",
      },
    },

    placeholderColor: (theme) => ({
      ...theme("colors"),
      placeholder: "rgba(131, 229, 118, 1)",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      input: "rgba(118, 118, 128, 0.24)",
      inputPlace: "rgba(255, 255, 255, 0.15)",
    }),
  },
  variants: {
    extend: {
      borderRadius: ["hover", "focus"],
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
