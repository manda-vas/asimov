import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'positivus-green': '#B9FF66',
        'positivus-dark': '#191A23',
        'positivus-grey': '#F3F3F3',
        'positivus-black': '#000000',
        'positivus-white': '#FFFFFF',
      },
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
      },
      fontSize: {
        'h1': '3.75rem', /* 60px */
        'h2': '2.5rem', /* 40px */
        'h3': '1.875rem', /* 30px */
        'h4': '1.25rem', /* 20px */
        'p': '1.125rem', /* 18px */
        'h1-mob': '2.6875rem', /* 43px */
        'h2-mob': '2.25rem', /* 36px */
        'h3-mob': '1.625rem', /* 26px */
        'h4-mob': '1.125rem', /* 18px */
        'p-mob': '1rem', /* 16px */
      },
      spacing: {
        '7': '0.4375rem',
        '15': '0.9375rem',
        '20': '1.25rem',
        '26': '1.625rem',
        '30': '1.875rem',
        '35': '2.1875rem',
        '40': '2.5rem',
        '41': '2.5625rem',
        '45': '2.8125rem',
        '50': '3.125rem',
        '60': '3.75rem',
        '64': '4rem',
        '70': '4.375rem',
        '80': '5rem',
        '100': '6.25rem',
        '140': '8.75rem',
        '163': '10.1875rem',
        '165': '10.3125rem',
        '210': '13.125rem',
        '286': '17.875rem',
        '310': '19.375rem',
        '326': '20.375rem',
        '347': '21.6875rem',
        '394': '24.625rem',
        '494': '30.875rem',
        '500': '31.25rem',
        '531': '33.1875rem',
        '498': '31.125rem',
        '580': '36.25rem',
        '600': '37.5rem',
        '1240': '77.5rem',
        '1440': '90rem',
      },
      borderRadius: {
        'positivus': '45px',
        'badge': '7px',
        'button': '14px',
      },
      boxShadow: {
        'card': '0px 5px 0px 0px #191A23',
      },
      maxWidth: {
        '494': '30.875rem',
        '500': '31.25rem',
        '1240': '77.5rem',
        '1440': '90rem',
      },
    },
  },
  plugins: [],
};

export default config;
