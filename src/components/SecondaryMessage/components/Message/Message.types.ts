import type { Themes } from '~/types';

type MessageProps = {
  className?: string;
  copy: string;
  heading: string;
  id?: string;
  link?: {
    title: string;
    url: string;
  };
  theme?: Themes;
};

export type { MessageProps };
