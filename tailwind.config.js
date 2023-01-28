/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      animation: {
        backgroundpulse: "backgroundpulse 1s infinite",
        fade: "fadeOut 1s ease-in-out",
      },
        keyframes: { 
          fadeOut: {
          "0%": {
                  opacity: 0,
                  
                },
          "100%": {
            opacity: 1,
          },
          },
        
          backgroundpulse: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
  variants: {
    animation: ["motion safe"]
  },
}