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
          "primary": "oklch(0.62 0.16 264)", // bright blue
          "primary-content": "oklch(0.98 0.02 264)", // off-white with blue tint

          "secondary": "oklch(0.52 0.04 237)", // muted slate blue
          "secondary-content": "oklch(0.98 0.02 237)", // off-white with slate tint

          "accent": "oklch(0.70 0.14 195)", // bright cyan
          "accent-content": "oklch(0.12 0.02 195)", // dark slate with cyan tint

          "neutral": "oklch(0.38 0.03 237)", // dark slate
          "neutral-content": "oklch(0.98 0.02 237)", // off-white with slate tint

          "base-100": "oklch(1.00 0.00 0)", // pure white
          "base-200": "oklch(0.93 0.01 237)", // light gray
          "base-300": "oklch(0.86 0.02 237)", // medium gray
          "base-content": "oklch(0.20 0.02 237)", // dark slate

          "info": "oklch(0.68 0.15 225)", // sky blue
          "info-content": "oklch(0.12 0.02 225)", // dark slate with blue tint

          "success": "oklch(0.73 0.15 142)", // emerald green
          "success-content": "oklch(0.12 0.02 142)", // dark slate with green tint

          "warning": "oklch(0.75 0.13 80)", // amber yellow
          "warning-content": "oklch(0.12 0.02 80)", // dark slate with yellow tint

          "error": "oklch(0.63 0.20 27)", // coral red
          "error-content": "oklch(0.98 0.02 27)", // off-white with red tint
        },
      },
      {
        "treelink-dark": {
          "primary": "oklch(0.38 0.16 264)", // dark blue
          "primary-content": "oklch(0.98 0.02 264)", // off-white with blue tint

          "secondary": "oklch(0.48 0.04 237)", // dark slate blue
          "secondary-content": "oklch(0.98 0.02 237)", // off-white with slate tint

          "accent": "oklch(0.30 0.14 195)", // dark cyan
          "accent-content": "oklch(0.98 0.02 195)", // off-white with cyan tint

          "neutral": "oklch(0.38 0.03 237)", // dark slate
          "neutral-content": "oklch(0.98 0.02 237)", // off-white with slate tint

          "base-100": "oklch(0.20 0.02 237)", // charcoal gray
          "base-200": "oklch(0.29 0.02 237)", // dark gray
          "base-300": "oklch(0.38 0.03 237)", // medium dark gray
          "base-content": "oklch(0.97 0.00 237)", // warm white

          "info": "oklch(0.32 0.15 225)", // dark sky blue
          "info-content": "oklch(0.98 0.02 225)", // off-white with blue tint

          "success": "oklch(0.27 0.15 142)", // dark emerald green
          "success-content": "oklch(0.98 0.02 142)", // off-white with green tint

          "warning": "oklch(0.25 0.13 80)", // dark amber yellow
          "warning-content": "oklch(0.98 0.02 80)", // off-white with yellow tint
          
          "error": "oklch(0.37 0.20 27)", // dark coral red
          "error-content": "oklch(0.98 0.02 27)", // off-white with red tint
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
