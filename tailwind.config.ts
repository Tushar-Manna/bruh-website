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
        primary: "var(--color-primary)",
        primaryDark: "var(--color-primary-dark)",
        primaryLight: "var(--color-primary-light)",
        primaryLighter: "var(--color-primary-lighter)",
        primaryLightest: "var(--color-primary-lightest)",
        primaryDarkest: "var(--color-primary-darkest)",
        secondary: "var(--color-secondary)",
        secondaryLight: "var(--color-secondary-light)",
        secondaryDark: "var(--color-secondary-dark)",
        tertiarylight: "var(--color-tertiary-light)",
        tertiary: "var(--color-tertiary)",
        tertiaryDark: "var(--color-tertiary-dark)",
      },
    },
  },
  plugins: [],
} satisfies Config;
