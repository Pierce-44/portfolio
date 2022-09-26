/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'ping-first': 'ping 0.5s cubic-bezier(1,-0.01,.72,.71) 0.25s',
        'ping-second': 'ping 0.5s cubic-bezier(1,-0.01,.72,.71) 0.5s',
        leftToRight: 'leftToRight 0.3s linear ',
        rightToLeft: 'rightToLeft 0.3s linear ',
        'pulse-delay': 'pulseDelay 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        leftToRight: {
          '0%': { transform: 'translateX(-150px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        rightToLeft: {
          '0%': { transform: 'translateX(150px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        pulseDelay: {
          '0%': {
            opacity: 0.5,
          },
          ' 100%': {
            opacity: 0.5,
          },
          '50%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
