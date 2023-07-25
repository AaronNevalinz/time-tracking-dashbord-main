/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/**/*.{html,js}',
    './test/another-test.html'
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100:'hsl(246, 80%, 60%)'
        },
        work:{
          100:'hsl(15, 100%, 70%)'
        },
        play:{
          100:'hsl(195, 74%, 62%)'
        },
        study:{
          100:'hsl(348, 100%, 68%)'
        },
        exercise:{
          100:'hsl(145, 58%, 55%)'
        },
        social:{
          100:'hsl(264, 64%, 52%)'
        },
        selfcare:{
          100:'hsl(43, 84%, 65%)'
        },
        secondary:{
          100:'hsl(226, 43%, 10%)',
          200:'hsl(235, 46%, 20%)',
          300:'hsl(235, 45%, 61%)',
          400:'hsl(236, 100%, 87%)'
        }
      }
    },
  },
  plugins: [],
}

