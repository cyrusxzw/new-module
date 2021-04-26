import { FC } from 'react';
import type { ThemeContextProps } from './ThemeContext.types';
declare const ThemeContextProvider: FC<ThemeContextProps>;
declare const useThemeContext: (
  propTheme: string,
  defaultTheme?: string,
) => any;
export { ThemeContextProvider, useThemeContext };
