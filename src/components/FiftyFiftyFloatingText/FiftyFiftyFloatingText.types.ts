import type { Themes } from '~/types';
import type { BackgroundElementProps } from './components/BackgroundElement/BackgroundElement.types';
import type { FullscreenSectionProps } from './components/FullscreenSection/FullscreenSection.types';

type FiftyFiftyFloatingTextProps = {
  backgroundImage?: BackgroundElementProps['image'];
  id?: string;
  textBlocks?: {
    text?: FullscreenSectionProps['text'];
  }[];
  theme?: Themes;
};

export type { FiftyFiftyFloatingTextProps };
