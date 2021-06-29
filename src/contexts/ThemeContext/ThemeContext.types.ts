import type { ComponentWithChildren, Themes } from '~/types';

type ThemeContextProps = {
  theme?: Themes;
};

type ThemeContextProviderType = ComponentWithChildren<ThemeContextProps>;

export { ThemeContextProps, ThemeContextProviderType };
