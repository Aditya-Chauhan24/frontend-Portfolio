export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          975: "#060816",
        },
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#b8d7ff",
          300: "#8cbcff",
          400: "#5b98ff",
          500: "#356fff",
          600: "#1f56f5",
          700: "#1744db",
          800: "#1a38b1",
          900: "#1c338b",
        },
        cyan: {
          450: "#38c8ff",
        },
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        ambient: "0 20px 60px rgba(18, 31, 58, 0.16)",
        glow: "0 0 0 1px rgba(91, 152, 255, 0.22), 0 18px 54px rgba(53, 111, 255, 0.2)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148,163,184,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.1) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
