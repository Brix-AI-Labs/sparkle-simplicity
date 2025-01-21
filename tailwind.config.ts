import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#8B5CF6", // Vibrant purple for CTAs
        secondary: "#FEF7CD", // Warm yellow for accents
        accent: "#F97316", // Energetic orange for highlights
        background: "#FFFFFF",
        highlight: "#F1F0FB", // Soft gray for sections
        muted: "#555555", // Text color
        "primary-light": "#D6BCFA",
        "accent-light": "#FEC6A1",
        "secondary-light": "#F2FCE2",
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(90deg, hsla(46, 73%, 75%, 1) 0%, hsla(176, 73%, 88%, 1) 100%)',
        'gradient-cool': 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)',
        'gradient-hero': 'linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%)',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "scale-up": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "slide-in": {
          "0%": {
            transform: "translateX(-10px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-5px)",
          },
        },
        "marker-to-nepal": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
          "20%": {
            opacity: "1",
          },
          "100%": {
            transform: "translate(-20px, -20px)",
            opacity: "1",
          },
        },
        "marker-to-bhutan": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
          "20%": {
            opacity: "1",
          },
          "100%": {
            transform: "translate(20px, -15px)",
            opacity: "1",
          },
        },
        "marker-to-bangladesh": {
          "0%": {
            transform: "translate(0, 0)",
            opacity: "0",
          },
          "20%": {
            opacity: "1",
          },
          "100%": {
            transform: "translate(30px, 10px)",
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "scale-up": "scale-up 0.3s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "float": "float 3s ease-in-out infinite",
        "to-nepal": "marker-to-nepal 3s ease-out forwards",
        "to-bhutan": "marker-to-bhutan 3s ease-out forwards 1s",
        "to-bangladesh": "marker-to-bangladesh 3s ease-out forwards 2s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
