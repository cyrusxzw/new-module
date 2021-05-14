import type { ContainMedia } from '~/components/MediaWithContent/MediaWithContent.types';

type ForegroundImageLink = {
  url: string;
  title: string;
};

type MediaProps = {
  className?: string;
  containMedia?: ContainMedia;
  foregroundImage?: JSX.Element;
  foregroundImageLink?: ForegroundImageLink;
  hasFullWidthImage?: boolean;
  media: JSX.Element;
};

export type { MediaProps };
