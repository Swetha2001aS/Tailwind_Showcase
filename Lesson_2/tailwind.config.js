/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}","./build/js/*.js"],
  theme: {
    extend: {
      screens:{
        'widescreen':{'raw':'(min-aspect-ratio:3/2)'},
        'tallscreen':{'raw':'(min-aspect-ratio:13/20)'},
      },
      keyframes:{
        'open-menu':{
            '0%':{transfrom:'scaleY(0)'},
            '80%':{transfrom:'scaleY(1.2)'},
            '100%':{transfrom:'scaleY(1)'},

        }
      },
      keyframes:{
        'open-menu' : 'open-menu 9.5s ease-in-out forword',


      }
    },
  },
  plugins: [],
};
