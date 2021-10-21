import type { ComponentWithoutChildren } from '~/types';
import type { Article } from '~/components/ContentHubArticle/ContentHubArticle.types';

type ReadMoreProps = {
  articles: Article[];
  className?: string;
};

type ReadMoreType = ComponentWithoutChildren<ReadMoreProps>;

export { ReadMoreType };
