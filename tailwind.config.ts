import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bricolage)", "var(--font-inter)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // ── Swyft brand ──────────────────────────────────────────────
        brand: {
          DEFAULT: "#00C853", // brand emerald — fills, glows
          strong: "#00A846", // button fills (white text reads clean)
          ink: "#057A3A", // green TEXT on white (WCAG AA)
          400: "#34D27B",
          100: "#DCF6E6",
          50: "#F1FBF5",
        },
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#5B6168",
        },
        mint: "#F4FBF7",
        // legacy aliases (kept so stray refs don't break)
        green: {
          400: "#34D27B",
          500: "#00C853",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
        "soft-lg": "0 24px 60px rgba(0,0,0,0.10)",
        glow: "0 10px 40px rgba(0,200,83,0.30)",
      },
    },
  },
  plugins: [],
}

export default config
