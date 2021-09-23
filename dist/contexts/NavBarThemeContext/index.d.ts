import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import 'react';

declare type NavBarThemeContextProps = {
    loginAndCartTheme?: string;
    navigationAndLogoTheme?: string;
};
declare type NavBarThemeContextProviderType = ComponentWithChildren<NavBarThemeContextProps>;

declare const NavBarThemeContextProvider: NavBarThemeContextProviderType;
declare const useNavBarThemeContext: () => any;

export { NavBarThemeContextProvider, useNavBarThemeContext };
