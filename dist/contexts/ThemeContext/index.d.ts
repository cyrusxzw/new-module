import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

declare type ThemeContextProps = {
    theme?: Themes;
};
declare type ThemeContextProviderType = ComponentWithChildren<ThemeContextProps>;

declare const ThemeContextProvider: ThemeContextProviderType;
declare const useThemeContext: (propTheme: Themes, defaultTheme?: string) => Themes;

export { ThemeContextProvider, useThemeContext };
