/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,css,js}"],
  theme: {
    extend: {
      backgroundColor : {
        'orange': '#ff5029',
        'slate-orage': '#fcf2f4',
      },
      fontFamily:{
         sans: ['"Mona Sans"', 'sans-serif'],
      },
      fontWeight:{
         '100' : "100",
         '200' : "200",
         '300' : "300",
         '800' : "800",
         '1000' : "1000",


         

      }
    },
  },
  plugins: [],
}

