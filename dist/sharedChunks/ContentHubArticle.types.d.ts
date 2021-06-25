import { MutableRefObject } from 'react';
import { C as ComponentWithoutChildren } from './Component.types';
import { I as ImageProps } from './Image.types';

declare type Image = Pick<ImageProps, 'altText' | 'sizes'>;
declare type Article = {
    articleRef?: MutableRefObject<HTMLDivElement>;
    category?: string;
    horizontalThumbnail?: Image;
    id?: string;
    longTitle?: string;
    onClick?: () => void;
    readingTime?: string;
    uri?: string;
    verticalThumbnail?: Image;
};
declare type ContentHubArticleProps = Article & {
    className?: string;
    dataTestRef: string;
    isHorizontal?: boolean;
    isInFirstGroup?: boolean;
    isMenuItem?: boolean;
    isReadMore?: boolean;
};
declare type ContentHubArticleType = ComponentWithoutChildren<ContentHubArticleProps>;

export { Article as A, ContentHubArticleType as C };
