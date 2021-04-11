import type { Themes } from '~/types';

type ComponentBoilerplateProps = {
  children: React.ReactNode;
  className?: string;
  theme?: Themes;
};

export type { ComponentBoilerplateProps };
