import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { I as ImageProps } from '../../sharedChunks/Image.types';
import 'react';

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
declare type ImageCarouselType = ComponentWithoutChildren<ImageCarouselProps>;

declare const ImageCarousel: ImageCarouselType;

export { ImageCarousel };
