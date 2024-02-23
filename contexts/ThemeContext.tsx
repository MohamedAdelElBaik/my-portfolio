import { createContext, useContext, useState } from 'react';

type Theme = 'dark' | 'light';
type ThemeContextType = [Theme, React.Dispatch<React.SetStateAction<Theme>>];

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>('dark');

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('ThemeContext was used outside the ThemeProvider');
  return context;
}

export { ThemeProvider, useTheme };
