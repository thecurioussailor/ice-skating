import { JetBrains_Mono } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        jetbrains: ['var(--font-jetbrains)', 'monospace'],
        tasaDisplay: ['var(--font-tasa-display)', 'sans-serif']
      },
      dropShadow: {
          custom: '0 0 20px 0 rgba(37, 171, 226, 0.12)',
          'custom-blue': '0px 0px 20px 0px rgba(37, 171, 226, 0.12)'
      },
    },
  },
  plugins: [],
} satisfies Config;
