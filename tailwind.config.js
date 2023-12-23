/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // darkMode: false,
  theme: {
    extend: {
      colors: {
        'regal-blue': '#53DCFF',
        'regal-yellow': '#FFBB00',
      },
    },

    screens: {
      'sm': '340px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {},
  },

  plugins: [],
};
