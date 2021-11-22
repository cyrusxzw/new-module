import type { Themes } from '~/types';
import type { ImageSectionProps } from '../components/ImageSection/ImageSection.types';
import type { TextSectionProps } from '../components/TextSection/TextSection.types';
import type { ComponentWithChildren } from '~/types';

type MobileViewProps = {
  backgroundImages?: {
    image?: ImageSectionProps['image'];
  }[];
  textBlocks?: {
    text?: TextSectionProps['text'];
  }[];
  theme?: Themes;
};

type MobileViewType = ComponentWithChildren<MobileViewProps>;

export type { MobileViewProps, MobileViewType };
