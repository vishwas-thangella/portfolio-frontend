/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        theme:{
          100:"#DEACFS",
          200:"#9754CB",
          300:"#6237A0",
          400:"#28104E"
        }
      },
      fontSize:{
        "50":"50px"
      },
      width:{
        "minScr":"370px"
      }
    },
  },
  plugins: [],
}

