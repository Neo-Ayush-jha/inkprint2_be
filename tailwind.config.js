/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-btn': '#00A6DB',
        'custm-bg-product':'#F9F5ED',
        'custom-bg-card':'#FFFFFF',
        'custom-bg-sproduct':'rgba(255, 255, 255, 5)'
        
      },
      textColor: {
        'custom-text': '#00A6DB',
        'custom-text-hero':'#AFC40C',
        'custom-text-p':'#444444',
      },
    },
  },
  plugins: [],
}
