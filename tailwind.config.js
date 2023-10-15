import {fontFamily} from 'tailwindcss/defaultTheme' ;

/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./renderer/**/*.{js,ts,jsx,tsx}",
]
export const theme = {
  extend: {
    fontFamily: {
      'sans': ['Gotham Book', ...fontFamily.sans]
    },
    colors: {
      'base-black': '#000000',
      'primary': '#B69852',
      'base-white': '#EDE8DF',
      'secondary': '#99986d',
      'light-black': '#4F4B4A'
    },
  },
}
export const plugins = []

