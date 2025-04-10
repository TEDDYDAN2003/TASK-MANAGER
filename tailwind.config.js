/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Ensure all relevant files are included
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example custom color
        secondary: '#9333EA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example custom font
      },
    },
  },
  darkMode: 'class', // Enable dark mode (optional)
  plugins: [
    require('@tailwindcss/forms'), // Example plugin for better form styling
    require('@tailwindcss/typography'), // Example plugin for rich text styling
  ],
};
