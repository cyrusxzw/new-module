import { ReactNode } from 'react';
import type { Themes } from '~/types';
declare type AccordionItem = {
  content: ReactNode;
  heading: string;
  id: string;
};
declare type AccordionProps = {
  className?: string;
  id?: string;
  items?: AccordionItem[];
  theme?: Themes;
  wrapperClass?: string;
};
export type { AccordionProps };
