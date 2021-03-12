import React, { createContext, useContext, FC } from 'react';
import { useNavBarThemeStore } from './NavBarThemeStore';
import type { NavBarThemeContextProps } from './NavBarThemeContext.types';

const NavBarThemeContext = createContext(undefined);

const NavBarThemeContextProvider: FC<NavBarThemeContextProps> = ({
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
