import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext(undefined);

const ThemeContextProvider = ({ children, theme }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

ThemeContextProvider.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.oneOf(['dark', 'light']),
};

const useThemeContext = (propTheme, defaultTheme = 'dark') => {
  const themeContext = useContext(ThemeContext);

  return propTheme || themeContext || defaultTheme;
};

export { ThemeContextProvider, useThemeContext };
