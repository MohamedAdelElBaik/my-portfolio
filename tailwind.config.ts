import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: 'hsl(0, 0%, 100%)',
          primary: {
            r: 'hsl(142, 76%, 36%)',
            l: 'hsl(142, 76%, 36% , 0.5)',
          },
          secondary: {
            r: 'hsl(240, 10%, 4%)',
            l: 'hsl(240, 10%, 4% , 0.5)',
          },
        },
        dark: {
          background: 'hsl(224, 71%, 4%)',
          primary: {
            r: 'hsl(142, 71%, 45%)',
            l: 'hsl(142, 71%, 45% , 0.5)',
          },
          secondary: {
            r: 'hsl(0, 0%, 95%)',
            l: 'hsl(0, 0%, 95% , 0.5)',
          },
        },
      },
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
