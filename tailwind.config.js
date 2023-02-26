/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        current:"#2F2F2F",
        purple:{
          10: "#CA6CE6",
          20: "#81007F",
        },
        gray:{
          10: '#6D6D6D',
          20: '#2F2F2F'
        }
      }
    },
  },
}

