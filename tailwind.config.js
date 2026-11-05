/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      },
      colors: {
        clinic: {
          light: '#f8fbff',
          blue: '#4f9ae8',
          navy: '#0f3c5d',
          soft: '#e2edf7'
        }
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 60, 93, 0.12)'
      }
    }
  },
  plugins: []
};

