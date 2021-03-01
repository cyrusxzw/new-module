import React, { createContext, useContext, FunctionComponent } from 'react';
import { useNavBarThemeStore } from './NavBarThemeStore';

interface NavBarThemeContextProviderProps {
  loginAndCartTheme?: string;
  navigationAndLogoTheme?: string;
}

const NavBarThemeContext = createContext(undefined);

const NavBarThemeContextProvider: FunctionComponent<NavBarThemeContextProviderProps> = ({
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
