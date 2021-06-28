import { ReactNode, LegacyRef } from 'react';
import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { I as ImageProps } from '../../sharedChunks/Image.types';
import { L as LinkStyle } from '../../sharedChunks/Hyperlink.types';

declare type CarouselIntroductionProps = {
    cta?: {
        style?: LinkStyle;
        title?: string;
        url?: string;
        text?: string;
    };
    description?: ReactNode;
    eyebrow?: string;
    heading?: string;
    theme?: Themes;
};

declare type Slide = {
    caption?: string;
    description?: string;
    heading?: string;
    id?: string;
    isLoading?: boolean;
    image: ImageProps;
    url?: string;
};
declare type CarouselProps = {
    autoplaySpeed?: number;
    className?: string;
    hasAutoplay?: boolean;
    hasFlushPagination?: boolean;
    hasFullWidthSlides?: boolean;
    hasShowCaption?: boolean;
    hasSlideCounter?: boolean;
    id?: string;
    initialSlideIndex?: number;
    introduction?: Omit<CarouselIntroductionProps, 'theme'>;
    isCompact?: boolean;
    slides?: Slide[];
    slideRefs?: LegacyRef<HTMLDivElement>[];
    theme?: Themes;
};
declare type CarouselType = ComponentWithoutChildren<CarouselProps>;

declare const Carousel: CarouselType;

export { Carousel };
