import type { Themes } from '~/types';

type ContentCopy = {
  description?: React.ReactNode;
  eyebrow?: string;
  heading?: string;
  subHeading?: string;
};

type ContentProps = {
  className?: string;
  content?: React.ReactNode;
  copy: ContentCopy;
  hasFullWidthImage?: boolean;
  hasSerifFontHeading?: boolean;
  isReverse?: boolean;
  theme?: Themes;
};

export type { ContentProps, ContentCopy };
