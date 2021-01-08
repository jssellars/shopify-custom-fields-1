const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{html,ts}"],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      position: {
        absolute: "absolute",
        ...defaultTheme.position,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
