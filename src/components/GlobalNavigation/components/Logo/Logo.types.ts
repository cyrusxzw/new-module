import type { ComponentWithoutChildren, Themes } from '~/types';

type LogoProps = {
  closedTheme?: Themes;
};

type LogoType = ComponentWithoutChildren<LogoProps>;

export type { LogoType };
