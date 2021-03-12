import { ReactNode } from 'react';
import type { Themes } from '~/types';

type AccordionItem = {
  content: ReactNode;
  heading: string;
  id: string;
};

type AccordionProps = {
  className?: string;
  id?: string;
  items?: AccordionItem[];
  theme?: Themes;
  wrapperClass?: string;
};

export type { AccordionProps };
