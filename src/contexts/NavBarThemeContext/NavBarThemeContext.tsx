import React, { createContext, useContext } from 'react';
import { useNavBarThemeStore } from './NavBarThemeStore';
import type { NavBarThemeContextProviderType } from './NavBarThemeContext.types';

const NavBarThemeContext = createContext(undefined);

const NavBarThemeContextProvider: NavBarThemeContextProviderType = ({
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
