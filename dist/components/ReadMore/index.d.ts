import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { A as Article } from '../../sharedChunks/ContentHubArticle.types';
import 'react';
import '../../sharedChunks/Image.types';
import '../../sharedChunks/Themes.types';

declare type ReadMoreProps = {
    articles: Article[];
    className?: string;
};
declare type ReadMoreType = ComponentWithoutChildren<ReadMoreProps>;

declare const ReadMore: ReadMoreType;

export { ReadMore };
