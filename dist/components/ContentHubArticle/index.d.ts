import { ReactElement, MutableRefObject } from 'react';
import { I as ImageProps } from '../../sharedChunks/Image.types';
import '../../sharedChunks/Themes.types';

declare type DefaultReactComponentReturn = ReactElement<any, any> | null;
declare type ComponentWithoutChildren<P = {}> = (props: P) => DefaultReactComponentReturn;

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
