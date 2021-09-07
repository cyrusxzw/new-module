import { MutableRefObject } from 'react';
import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { A as Article } from '../../sharedChunks/ContentHubArticle.types';
import '../../sharedChunks/Image.types';
import '../../sharedChunks/Themes.types';

declare type ListArticle = Article & {
    mobileArticleRef?: MutableRefObject<HTMLDivElement>;
};
declare type ContentHubArticleListProps = {
    articles?: ListArticle[];
    className?: string;
    isFirstGroup?: boolean;
    pattern?: 0 | 1;
};
declare type ContentHubArticleListType = ComponentWithoutChildren<ContentHubArticleListProps>;

declare const ContentHubArticleList: ContentHubArticleListType;

export { ContentHubArticleList };
