/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    // IconLink color variants - explicit inclusion for production builds
    // Primary colors
    'bg-primary-100', 'bg-primary-200', 'ring-primary-300', 'hover:bg-primary-200', 'hover:ring-primary', 'text-primary', 'group-hover:text-primary-content',
    // Secondary colors
    'bg-secondary-100', 'bg-secondary-200', 'ring-secondary-300', 'hover:bg-secondary-200', 'hover:ring-secondary', 'text-secondary', 'group-hover:text-secondary-content',
    // Accent colors
    'bg-accent-100', 'bg-accent-200', 'ring-accent-300', 'hover:bg-accent-200', 'hover:ring-accent', 'text-accent', 'group-hover:text-accent-content',
    // Neutral colors
    'bg-neutral-100', 'bg-neutral-200', 'ring-neutral-300', 'hover:bg-neutral-200', 'hover:ring-neutral', 'text-neutral', 'group-hover:text-neutral-content',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
          "primary-100": "oklch(0.92 0.04 264)", // very light blue
          "primary-200": "oklch(0.77 0.10 264)", // light blue
          "primary-300": "oklch(0.62 0.16 264)", // bright blue
          "primary-content": "oklch(0.98 0.02 264)", // off-white with blue tint

          "secondary-100": "oklch(0.82 0.01 237)", // very light slate
          "secondary-200": "oklch(0.67 0.02 237)", // light slate
          "secondary-300": "oklch(0.52 0.04 237)", // muted slate blue
          "secondary-content": "oklch(0.98 0.02 237)", // off-white with slate tint

          "accent-100": "oklch(0.90 0.04 195)", // very light cyan
          "accent-200": "oklch(0.80 0.09 195)", // light cyan
          "accent-300": "oklch(0.70 0.14 195)", // bright cyan
          "accent-content": "oklch(0.12 0.02 195)", // dark slate with cyan tint

          "neutral-100": "oklch(0.68 0.01 237)", // very light neutral
          "neutral-200": "oklch(0.53 0.02 237)", // light neutral
          "neutral-300": "oklch(0.38 0.03 237)", // dark slate
          "neutral-content": "oklch(0.98 0.02 237)", // off-white with slate tint

          "base-100": "oklch(1.00 0.00 0)", // pure white
          "base-200": "oklch(0.93 0.01 237)", // light gray
          "base-300": "oklch(0.86 0.02 237)", // medium gray
          "base-content": "oklch(0.20 0.02 237)", // dark slate

          "dark-primary-100": "oklch(0.53 0.10 264)", // medium blue
          "dark-primary-200": "oklch(0.38 0.16 264)", // dark blue
          "dark-primary-300": "oklch(0.23 0.22 264)", // very dark blue
          "dark-primary-content": "oklch(0.98 0.02 264)", // off-white with blue tint

          "dark-secondary-100": "oklch(0.63 0.02 237)", // medium slate
          "dark-secondary-200": "oklch(0.48 0.04 237)", // dark slate blue
          "dark-secondary-300": "oklch(0.33 0.06 237)", // very dark slate
          "dark-secondary-content": "oklch(0.98 0.02 237)", // off-white with slate tint

          "dark-accent-100": "oklch(0.45 0.09 195)", // medium cyan
          "dark-accent-200": "oklch(0.30 0.14 195)", // dark cyan
          "dark-accent-300": "oklch(0.15 0.19 195)", // very dark cyan
          "dark-accent-content": "oklch(0.98 0.02 195)", // off-white with cyan tint

          "dark-neutral-100": "oklch(0.68 0.01 237)", // light neutral
          "dark-neutral-200": "oklch(0.53 0.02 237)", // medium neutral
          "dark-neutral-300": "oklch(0.38 0.03 237)", // dark slate
          "dark-neutral-content": "oklch(0.98 0.02 237)", // off-white with slate tint

          "dark-base-100": "oklch(0.20 0.02 237)", // charcoal gray
          "dark-base-200": "oklch(0.29 0.02 237)", // dark gray
          "dark-base-300": "oklch(0.38 0.03 237)", // medium dark gray
          "dark-base-content": "oklch(0.97 0.00 237)", // warm white
      }
    }
  },
};
