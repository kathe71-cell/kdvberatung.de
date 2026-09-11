/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          slate: '#0f172a',
          dark: '#020617',
          emerald: '#059669',
          emeraldLight: '#ecfdf5',
          emeraldDark: '#065f46',
          amber: '#d97706',
          amberLight: '#fef3c7',
          amberHover: '#b45309',
          offwhite: '#f8fafc',
          card: '#ffffff',
          border: '#e2e8f0',
          subtle: '#64748b'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ]
      }
    },
  },
  plugins: [],
}
