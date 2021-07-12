import React, { createContext, useContext } from 'react';
import type { ThemeContextProviderType } from './ThemeContext.types';
import { Themes } from '~/types';

const ThemeContext = createContext(undefined);

const ThemeContextProvider: ThemeContextProviderType = ({
  children,
  theme,
}) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;

const useThemeContext = (propTheme: Themes, defaultTheme = 'dark'): Themes => {
  const themeContext = useContext(ThemeContext);

  return propTheme || themeContext || defaultTheme;
};

export { ThemeContextProvider, useThemeContext };
