module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        textInput: "rgba(131, 229, 118, 1)",
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
