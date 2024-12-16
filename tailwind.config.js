/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/routes/__root.tsx",
    "./app/routes/index.tsx",
    "./app/**/*.{ts,tsx}",
    "./app/routes/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

