/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        "treelink-light": {
          // Primary brand color - vibrant blue for main actions and highlights
          "primary": "oklch(0.62 0.16 264)",
          // Secondary color - muted slate for supporting elements and icons
          "secondary": "oklch(0.52 0.04 237)", 
          // Accent color - bright cyan for emphasis and interactive elements
          "accent": "oklch(0.70 0.14 195)",
          // Neutral color - balanced slate for form controls and borders
          "neutral": "oklch(0.38 0.03 237)",
          // Main background - pure white for maximum contrast and readability
          "base-100": "oklch(1.00 0.00 0)",
          // Secondary background - light gray for hover states and panels
          "base-200": "oklch(0.93 0.01 237)",
          // Tertiary background - medium gray for subtle borders and dividers
          "base-300": "oklch(0.86 0.02 237)",
          // Main text color - dark slate for high contrast readability
          "base-content": "oklch(0.20 0.02 237)",
          // Informational blue - for tips, notes, and informational content
          "info": "oklch(0.68 0.15 225)",
          // Success green - for confirmations, completed states, and positive feedback
          "success": "oklch(0.73 0.15 142)", 
          // Warning amber - for cautions, pending states, and attention-grabbing elements
          "warning": "oklch(0.75 0.13 80)",
          // Error red - for failures, destructive actions, and critical alerts
          "error": "oklch(0.63 0.20 27)",
        },
      },
      {
        "treelink-dark": {
          // Primary brand color - same vibrant blue maintains brand consistency across themes
          "primary": "oklch(0.62 0.16 264)",
          // Secondary color - same muted slate works well in dark mode
          "secondary": "oklch(0.52 0.04 237)",
          // Accent color - same bright cyan provides good contrast in dark mode
          "accent": "oklch(0.70 0.14 195)", 
          // Neutral color - same balanced slate for consistency
          "neutral": "oklch(0.38 0.03 237)",
          // Main background - dark slate creates comfortable dark mode foundation
          "base-100": "oklch(0.20 0.02 237)",
          // Secondary background - medium dark slate for hover states and elevated panels
          "base-200": "oklch(0.29 0.02 237)",
          // Tertiary background - lighter slate for borders and subtle separators
          "base-300": "oklch(0.38 0.03 237)", 
          // Main text color - light warm gray for comfortable dark mode reading
          "base-content": "oklch(0.97 0.00 237)",
          // Informational blue - same as light mode for consistency
          "info": "oklch(0.68 0.15 225)",
          // Success green - same as light mode for universal recognition
          "success": "oklch(0.73 0.15 142)",
          // Warning amber - same as light mode for consistent meaning
          "warning": "oklch(0.75 0.13 80)", 
          // Error red - same as light mode for universal danger recognition
          "error": "oklch(0.63 0.20 27)",
        },
      },
    ],
    darkTheme: "treelink-dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
