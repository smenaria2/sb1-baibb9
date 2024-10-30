/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      },
      backgroundImage: {
        'diwali': "url('https://unsplash.com/photos/H4ilfu3vftk/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzMwMjYwMzY3fA&force=true')",
      },
    },
  },
  plugins: [],
};