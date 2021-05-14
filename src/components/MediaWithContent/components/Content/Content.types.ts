import type { Themes } from '~/types';

type Copy = {
  description?: React.ReactNode;
  eyebrow?: string;
  heading?: string;
  subHeading?: string;
};

type ContentProps = {
  className?: string;
  content?: React.ReactNode;
  copy: Copy;
  hasFullWidthImage?: boolean;
  hasSerifFontHeading?: boolean;
  isReverse?: boolean;
  theme?: Themes;
};

export type { ContentProps };
