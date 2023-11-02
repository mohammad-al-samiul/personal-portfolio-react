/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
       fontFamily: {
       'lilita-one': ['Lilita One', 'sans'],
      },
    },
  },
  plugins: [require("daisyui")],
};
