import React, { createContext, useContext, FunctionComponent } from 'react';

interface ThemeContextProviderProps {
  theme?: 'dark' | 'light';
}

const ThemeContext = createContext(undefined);

const ThemeContextProvider: FunctionComponent<ThemeContextProviderProps> = ({
  children,
  theme,
}) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;

const useThemeContext = (propTheme: string, defaultTheme = 'dark') => {
  const themeContext = useContext(ThemeContext);

  return propTheme || themeContext || defaultTheme;
};

export { ThemeContextProvider, useThemeContext };
