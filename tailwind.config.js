/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // ← asegúrate que diga .jsx
  ],
  theme: {
    extend: {
      colors: {
        cream:  "#F5F0E8",
        sand:   "#E8DFD0",
        stone:  "#C8BFB0",
        mist:   "#D8D5D0",
        fog:    "#ECEAE6",
        warm:   "#B8A898",
        dusk:   "#8A8078",
        ink:    "#4A4540",
        blush:  "#E8D5C8",
        sage:   "#C8D5C0",
        sky:    "#C8D5E0",
      },
      fontFamily: {
        cozy: ["Georgia", "serif"],
      },
      borderRadius: {
        cozy: "1.5rem",
        soft: "2.5rem",
      },
      boxShadow: {
        soft:  "0 4px 24px 0 rgba(100,90,80,0.10)",
        inner: "inset 0 2px 12px 0 rgba(100,90,80,0.08)",
        warm:  "0 8px 32px 0 rgba(120,100,80,0.15)",
      },
    },
  },
  plugins: [],
};