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
          background: 'hsl(0 0% 100%)',
          foreground: 'hsl(240 10% 3.9%)',
          card: 'hsl(0 0% 100%)',
          cardForeground: 'hsl(240 10% 3.9%)',
          popover: 'hsl(0 0% 100%)',
          popoverForeground: 'hsl(240 10% 3.9%)',
          primary: 'hsl(142.1 76.2% 36.3%)',
          primaryForeground: 'hsl(355.7 100% 97.3%)',
          secondary: 'hsl(240 4.8% 95.9%)',
          secondaryForeground: 'hsl(240 5.9% 10%)',
          muted: 'hsl(240 4.8% 95.9%)',
          mutedForeground: 'hsl(240 3.8% 46.1%)',
          accent: 'hsl(240 4.8% 95.9%)',
          accentForeground: 'hsl(240 5.9% 10%)',
          destructive: 'hsl(0 84.2% 60.2%)',
          destructiveForeground: 'hsl(0 0% 98%)',
          border: 'hsl(240 5.9% 90%)',
          input: 'hsl(240 5.9% 90%)',
          ring: 'hsl(142.1 76.2% 36.3%)',
          radius: '0.5rem',
        },
        dark: {
          background: 'hsl(20 14.3% 4.1%)',
          foreground: 'hsl(0 0% 95%)',
          card: 'hsl(24 9.8% 10%)',
          cardForeground: 'hsl(0 0% 95%)',
          popover: 'hsl(0 0% 9%)',
          popoverForeground: 'hsl(0 0% 95%)',
          primary: 'hsl(142.1 70.6% 45.3%)',
          primaryForeground: 'hsl(144.9 80.4% 10%)',
          secondary: 'hsl(240 3.7% 15.9%)',
          secondaryForeground: 'hsl(0 0% 98%)',
          muted: 'hsl(0 0% 15%)',
          mutedForeground: 'hsl(240 5% 64.9%)',
          accent: 'hsl(12 6.5% 15.1%)',
          accentForeground: 'hsl(0 0% 98%)',
          destructive: 'hsl(0 62.8% 30.6%)',
          destructiveForeground: 'hsl(0 85.7% 97.3%)',
          border: 'hsl(240 3.7% 15.9%)',
          input: 'hsl(240 3.7% 15.9%)',
          ring: 'hsl(142.4 71.8% 29.2%)',
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
