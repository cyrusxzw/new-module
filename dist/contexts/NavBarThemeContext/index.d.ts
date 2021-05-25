import { FC } from 'react';

declare type NavBarThemeContextProps = {
    loginAndCartTheme?: string;
    navigationAndLogoTheme?: string;
};

declare const NavBarThemeContextProvider: FC<NavBarThemeContextProps>;
declare const useNavBarThemeContext: () => any;

export { NavBarThemeContextProvider, useNavBarThemeContext };
