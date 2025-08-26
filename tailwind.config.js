/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      backgroundImage: {
        'hero-grid': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
}
