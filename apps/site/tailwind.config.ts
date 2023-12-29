import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1280px',
      },
      padding: {
        DEFAULT: '1rem',
        xl: '0px',
      },
    },
    keyframes: {
      slide: {
        from: {
          transform: 'translateY(100%)',
        },
        to: {
          transform: 'translateY(0)',
        },
      },
    },
    animation: {
      'filter-slide': 'slide .5s ease-in-out',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
