export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        third: {
          DEFAULT: "rgb(var(--thirdly) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
        },
        ocean: {
          deep: "rgb(var(--ocean-deep) / <alpha-value>)",
          mid: "rgb(var(--ocean-mid) / <alpha-value>)",
          light: "rgb(var(--ocean-light) / <alpha-value>)",
        },
        sand: {
          deep: "rgb(var(--orange-deep) / <alpha-value>)",
          mid: "rgb(var(--orange-mid) / <alpha-value>)",
          light: "rgb(var(--orange-light) / <alpha-value>)",
        },

        gold: {
          DEFAULT: "rgb(var(--gold) / <alpha-value>)",
          light: "rgb(var(--gold-light) / <alpha-value>)",
          dark: "rgb(var(--gold-dark) / <alpha-value>)",
        },

        navy: {
          DEFAULT: "rgb(var(--navy) / <alpha-value>)",
          light: "rgb(var(--navy-light) / <alpha-value>)",
          dark: "rgb(var(--navy-dark) / <alpha-value>)",
        },

        "half-primary": "rgba(14, 20, 40, 0.5)",
        "half-secondary": "#f6ede0",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
