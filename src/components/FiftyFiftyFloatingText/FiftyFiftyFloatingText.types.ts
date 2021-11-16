import type { Themes } from '~/types';
import type { ImageSectionProps } from './components/ImageSection/ImageSection.types';
import type { TextSectionProps } from './components/TextSection/TextSection.types';

type FiftyFiftyFloatingTextProps = {
  backgroundImages?: {
    image?: ImageSectionProps['image'];
  }[];
  id?: string;
  textBlocks?: {
    text?: TextSectionProps['text'];
  }[];
  theme?: Themes;
};

export type { FiftyFiftyFloatingTextProps };
