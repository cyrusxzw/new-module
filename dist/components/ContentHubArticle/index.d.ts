import { MutableRefObject } from 'react';
import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { I as ImageProps } from '../../sharedChunks/Image.types';
import '../../sharedChunks/Themes.types';

declare type Image = Pick<ImageProps, 'altText' | 'sizes'>;
declare type ContentHubArticleProps = {
    articleRef?: MutableRefObject<HTMLDivElement>;
    category?: string;
    className?: string;
    dataTestRef: string;
    horizontalThumbnail?: Image;
    id?: string;
    isHorizontal?: boolean;
    isInFirstGroup?: boolean;
    isMenuItem?: boolean;
    isReadMore?: boolean;
    longTitle?: string;
    onClick?: () => void;
    readingTime?: string;
    uri?: string;
    verticalThumbnail?: Image;
};
declare type ContentHubArticleType = ComponentWithoutChildren<ContentHubArticleProps>;

declare const ContentHubArticle: ContentHubArticleType;

export { ContentHubArticle };
