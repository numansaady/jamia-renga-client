/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#182075",          
          "secondary": "#d858d2",                   
          "accent": "#0cf2b1",                   
          "neutral": "#2C3135",                   
          "base-100": "#EFEEF1",                   
          "info": "#ABC4ED",                   
          "success": "#166F3B",                   
          "warning": "#F6A123",                   
          "error": "#EC5576",
        },
      },
      {
        dark: {
          "primary": "#58e256",          
          "secondary": "#182075",                   
          "accent": "#fcf8a6",                   
          "neutral": "#2C2D3A",                   
          "base-100": "#362F3C",                   
          "info": "#4893F4",                   
          "success": "#13958A",                   
          "warning": "#F4C543",                   
          "error": "#E55F5D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
