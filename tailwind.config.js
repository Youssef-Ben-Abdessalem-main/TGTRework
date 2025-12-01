export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        "half-primary": 'rgba(14, 20, 40, 0.5)',
        "half-secondary": '#f6ede0',
        third:{
          DEFAULT:'var(--thirdly)'
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
