import type { ReactElement } from 'react';
import type { Themes } from '~/types';

type LinkButtonGroupProps = {
  children?:
    | JSX.Element
    | JSX.Element[] /** @todo figure out how to efficiently allow only Button an Hyperlink */;
  className?: string;
  hasFitContent?: boolean;
  isFlush?: boolean;
  isFullWidth?: boolean;
  textAlign?: 'center' | 'left' | 'right';
  theme?: Themes;
};

type LinkButtonGroupType = (props: LinkButtonGroupProps) => ReactElement | null;

export type { LinkButtonGroupProps, LinkButtonGroupType };
