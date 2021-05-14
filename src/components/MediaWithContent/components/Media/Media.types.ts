type ForegroundImageLink = {
  url: string;
  title: string;
};

type MediaProps = {
  className?: string;
  containMedia?: 'center' | 'left' | 'right';
  foregroundImage?: JSX.Element;
  foregroundImageLink?: ForegroundImageLink;
  hasFullWidthImage?: boolean;
  media: JSX.Element;
};

export type { MediaProps };
