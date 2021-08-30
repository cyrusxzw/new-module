import type { Themes, ComponentWithChildren } from '~/types';

type LogoProps = {
  className?: string;
  theme?: Themes;
};

type LogoType = ComponentWithChildren<LogoProps>;

export type { LogoType };
