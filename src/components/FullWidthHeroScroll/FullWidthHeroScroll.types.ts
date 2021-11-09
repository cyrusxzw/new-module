import type { Themes } from '~/types';
import type { BodyCopyProps } from '../BodyCopy/BodyCopy.types';
import type { BackgroundElementProps } from './components/BackgroundElement/BackgroundElement.types';
import type { FullscreenSectionProps } from './components/FullscreenSection/FullscreenSection.types';

type FullWidthHeroScrollProps = {
  backgroundImage?: BackgroundElementProps['image'];
  backgroundMediaType?: BackgroundElementProps['mediaType'];
  backgroundVideo?: BackgroundElementProps['video'];
  copy?: BodyCopyProps['copy'];
  cta?: {
    englishLabel?: string;
    onClick?: () => void;
    text?: string;
    url?: string;
  };
  eyebrow?: string;
  hasSerifFontHeading?: boolean;
  hasTopOffset?: boolean;
  heading?: string;
  id?: string;
  textBlocks?: {
    text?: FullscreenSectionProps['text'];
  }[];
  theme?: Themes;
};

export type { FullWidthHeroScrollProps };
