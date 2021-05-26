import { ReactElement } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { I as ImageProps } from '../../sharedChunks/Image.types';

declare type Slide = {
    caption?: string;
    id?: string;
    image: ImageProps;
};
declare type ImageCarouselProps = {
    autoplaySpeed?: number;
    className?: string;
    hasAutoplay?: boolean;
    hasFlushPagination?: boolean;
    isCompact?: boolean;
    slides?: Slide[];
    theme?: Themes;
};

declare const ImageCarousel: ({ autoplaySpeed, className, hasAutoplay, hasFlushPagination, isCompact, slides, theme, }: ImageCarouselProps) => ReactElement | null;

export { ImageCarousel };
