import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ContentHubArticle } from '~/components/ContentHubArticle/index.ts';
import { Transition } from '~/components/Transition';
import styles from './ReadMore.module.css';

const ReadMore = ({ articles, className }) => {
  const classSet = cx(styles.base, className);
  const readMoreArticleClassSet = cx(styles.readMoreArticle);

  return (
    <Transition isActiveOnMount={true} type="fade">
      <section className={classSet}>
        {articles.map((article) => (
          <ContentHubArticle
            articleRef={article.articleRef}
            category={article.category}
            className={readMoreArticleClassSet}
            dataTestRef={article.id}
            horizontalThumbnail={article.horizontalThumbnail}
            id={article.id}
            isHorizontal={true}
            isInFirstGroup={false}
            isReadMore={true}
            key={article.id}
            longTitle={article.longTitle}
            onClick={article.onClick}
            readingTime={article.readingTime}
            uri={article.uri}
            verticalThumbnail={article.verticalThumbnail}
          />
        ))}
      </section>
    </Transition>
  );
};

ReadMore.propTypes = {
  articles: PropTypes.array,
  className: PropTypes.string,
};

ReadMore.defaultProps = {
  articles: undefined,
  className: undefined,
};

export { ReadMore };
