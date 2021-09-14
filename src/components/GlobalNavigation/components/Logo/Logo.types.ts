import type { ComponentWithoutChildren, Themes } from '~/types';

type LogoProps = {
  closedTheme?: Themes;
  isVisible?: boolean;
};

type LogoType = ComponentWithoutChildren<LogoProps>;

export type { LogoType };
