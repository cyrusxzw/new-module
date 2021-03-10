import React, { createContext, useContext, FC } from 'react';
import type { Props } from './ThemeContext.types';

const ThemeContext = createContext(undefined);

const ThemeContextProvider: FC<Props> = ({ children, theme }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

const useThemeContext = (propTheme: string, defaultTheme = 'dark') => {
  const themeContext = useContext(ThemeContext);

  return propTheme || themeContext || defaultTheme;
};

export { ThemeContextProvider, useThemeContext };
