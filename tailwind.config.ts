import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",  
        primarydark: "var(--primary-dark)",
        secondarydark: "var(--secondary-dark)",
        primarylight: "var(--color-tertiaryt)",
        secondarylight: "var(--color-tertiary-dark)",
      },
    },
  },
  plugins: [],
} satisfies Config;
