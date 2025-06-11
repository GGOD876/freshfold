/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./pages/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        slideUp: "slideUp 0.7s ease-out forwards",
        zoomIn: "zoomIn 0.5s ease-out forwards",
      },
      slideUp: {
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0)" },
      },
      zoomIn: {
        from: { opacity: 0, transform: "scale(0.95)" },
        to: { opacity: 1, transform: "scale(1)" },
      },
    },
  },
  plugins: [],
}

export default config
