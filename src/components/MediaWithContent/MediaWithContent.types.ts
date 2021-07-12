import type { Themes } from '~/types';
import type { ContentCopy } from './components/Content/Content.types';

type ContainMedia = 'center' | 'left' | 'right';

type ForegroundImageLink = {
  onClick?: () => void;
  url: string;
  title: string;
};

type MediaWithContentProps = {
  backgroundColor?: string;
  className?: string;
  containMedia?: ContainMedia;
  content?: React.ReactNode;
  copy: ContentCopy;
  foregroundImage?: JSX.Element;
  foregroundImageLink?: ForegroundImageLink;
  hasFullWidthImage?: boolean;
  hasSerifFontHeading?: boolean;
  isReverse?: boolean;
  media: JSX.Element;
  theme?: Themes;
};

export type { MediaWithContentProps, ContainMedia };
