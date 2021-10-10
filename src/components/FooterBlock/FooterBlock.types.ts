import type { ReactNode } from 'react';
import type { ComponentWithoutChildren, Themes } from '~/types';

type Link = {
  id?: string;
  openInANewWindow?: boolean;
  text: string;
  url: string;
};

type FooterBlockProps = {
  className?: string;
  copy?: ReactNode;
  heading?: string;
  headingClassName?: string;
  isVisibleOnTabletAndMobile?: boolean;
  links?: Link[];
  listClassName?: string;
  listItemClassName?: string;
  theme?: Themes;
};

export type FooterBlockType = ComponentWithoutChildren<FooterBlockProps>;
