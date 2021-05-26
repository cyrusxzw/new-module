import { FC } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type ThemeContextProps = {
    theme?: Themes;
};

declare const ThemeContextProvider: FC<ThemeContextProps>;
declare const useThemeContext: (propTheme: string, defaultTheme?: string) => any;

export { ThemeContextProvider, useThemeContext };
