import type { ComponentWithChildren } from '~/types';

type NavBarThemeContextProps = {
  loginAndCartTheme?: string;
  navigationAndLogoTheme?: string;
};

type NavBarThemeContextProviderType = ComponentWithChildren<NavBarThemeContextProps>;

export type { NavBarThemeContextProps, NavBarThemeContextProviderType };
