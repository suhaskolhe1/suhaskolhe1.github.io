/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA', // off-white
        foreground: '#1A1A1A', // near-black
        muted: '#737373',      // subtle gray
        border: '#E5E5E5',     // subtle gray borders
        accent: '#2563EB',     // one subtle accent color (blue, but very restrained)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
