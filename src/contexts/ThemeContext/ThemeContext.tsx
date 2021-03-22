import React, { createContext, useContext, FC } from 'react';
import type { ThemeContextProps } from './ThemeContext.types';

const ThemeContext = createContext(undefined);

const ThemeContextProvider: FC<ThemeContextProps> = ({ children, theme }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

const useThemeContext = (propTheme: string, defaultTheme = 'dark') => {
  const themeContext = useContext(ThemeContext);

  return propTheme || themeContext || defaultTheme;
};

export { ThemeContextProvider, useThemeContext };
