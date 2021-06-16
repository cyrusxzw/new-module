import type { ReactNode } from 'react';
import type { Themes } from '~/types';

type ComponentBoilerplateProps = {
  children?: ReactNode;
  className?: string;
  theme?: Themes;
};

export type { ComponentBoilerplateProps };
