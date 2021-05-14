import type { Themes } from '~/types';

type Copy = {
  description?: React.ReactNode;
  eyebrow?: string;
  heading?: string;
  subHeading?: string;
};

type ForegroundImageLink = {
  url: string;
  title: string;
};

type MediaWithContentProps = {
  backgroundColor?: string;
  className?: string;
  containMedia?: 'center' | 'left' | 'right';
  content?: React.ReactNode;
  copy: Copy;
  foregroundImage?: JSX.Element;
  foregroundImageLink?: ForegroundImageLink;
  hasFullWidthImage?: boolean;
  hasSerifFontHeading?: boolean;
  isReverse?: boolean;
  media: JSX.Element;
  theme?: Themes;
};

export type { MediaWithContentProps };
