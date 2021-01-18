import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavBarThemeStore } from './NavBarThemeStore';

const NavBarThemeContext = createContext();

const NavBarThemeContextProvider = ({
  children,
  loginAndCartTheme,
  navigationAndLogoTheme,
}) => (
  <NavBarThemeContext.Provider
    value={useNavBarThemeStore({ loginAndCartTheme, navigationAndLogoTheme })}
  >
    {children}
  </NavBarThemeContext.Provider>
);

NavBarThemeContextProvider.propTypes = {
  children: PropTypes.any,
  loginAndCartTheme: PropTypes.string,
  navigationAndLogoTheme: PropTypes.string,
};

const useNavBarThemeContext = () => {
  const context = useContext(NavBarThemeContext);

  if (context === undefined) {
    throw new Error(
      'useNavBarThemeContext must be used within a NavBarThemeContextProvider',
    );
  }

  return context;
};

export { NavBarThemeContextProvider, useNavBarThemeContext };
