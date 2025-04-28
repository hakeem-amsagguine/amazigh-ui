// apps/playground/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "../../packages/components/src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: {
            50: "var(--amazigh-color-primary-50)",
            100: "var(--amazigh-color-primary-100)",
            200: "var(--amazigh-color-primary-200)",
            300: "var(--amazigh-color-primary-300)",
            400: "var(--amazigh-color-primary-400)",
            500: "var(--amazigh-color-primary-500)",
            600: "var(--amazigh-color-primary-600)",
            700: "var(--amazigh-color-primary-700)",
            800: "var(--amazigh-color-primary-800)",
            900: "var(--amazigh-color-primary-900)",
          },
          neutral: {
            50: "var(--amazigh-color-neutral-50)",
            100: "var(--amazigh-color-neutral-100)",
            200: "var(--amazigh-color-neutral-200)",
            300: "var(--amazigh-color-neutral-300)",
            400: "var(--amazigh-color-neutral-400)",
            500: "var(--amazigh-color-neutral-500)",
            600: "var(--amazigh-color-neutral-600)",
            700: "var(--amazigh-color-neutral-700)",
            800: "var(--amazigh-color-neutral-800)",
            900: "var(--amazigh-color-neutral-900)",
          },
          error: {
            50: "var(--amazigh-color-error-50)",
            500: "var(--amazigh-color-error-500)",
            900: "var(--amazigh-color-error-900)",
          },
          success: {
            50: "var(--amazigh-color-success-50)",
            500: "var(--amazigh-color-success-500)",
            900: "var(--amazigh-color-success-900)",
          },
          background: "var(--amazigh-background)",
          foreground: "var(--amazigh-text)",
          border: "var(--amazigh-border)",
        },
      },
    },
    plugins: [],
  };
