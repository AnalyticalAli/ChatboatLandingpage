import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem"
      },
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          pale: "#60A5FA",
          soft: "#E1EAF8",
          muted: "#DBEAFE"
        },
        page: {
          DEFAULT: "#F6F6F6",
          white: "#FFFFFF"
        },
        line: {
          DEFAULT: "#E5E7EB"
        },
        ink: {
          DEFAULT: "#111827",
          secondary: "#6B7280",
          muted: "#9CA3AF"
        }
      },
      borderRadius: {
        card: "24px"
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.05)",
        "card-lg": "0 8px 40px rgba(0, 0, 0, 0.08)",
        hero: "0 20px 60px rgba(37, 99, 235, 0.15)"
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, #2563EB 0%, #3B82F6 45%, #93C5FD 75%, #F6F6F6 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
