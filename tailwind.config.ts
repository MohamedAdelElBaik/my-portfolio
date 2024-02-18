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
          background: '#f4fcf7',
          backgroundL: '#ddf6e5',
          primary: {
            r: 'hsl(142, 76%, 36%)',
            l: 'hsl(142, 76%, 36% , 0.5)',
            '2l': 'hsl(142, 76%, 36% , 0.25)',
            '3l': 'hsl(142, 76%, 36% , 0.125)',
          },
          secondary: {
            r: 'hsl(240, 10%, 4%)',
            l: 'hsl(240, 10%, 4% , 0.5)',
          },
        },
        dark: {
          background: '#041015',
          backgroundL: '#07271d',
          primary: {
            r: 'hsl(142, 71%, 45%)',
            l: 'hsl(142, 71%, 45% , 0.5)',
            '2l': 'hsl(142, 71%, 45% , 0.25)',
            '3l': 'hsl(142, 71%, 45% , 0.125)',
            '4l': 'hsl(142, 71%, 45% , 0.05)',
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
