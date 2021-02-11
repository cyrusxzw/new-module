import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ContentHubArticle } from '~/components/ContentHubArticle';
import styles from './ContentHubArticleList.module.css';

const ContentHubArticleList = ({
  articles,
  className,
  isFirstGroup,
  pattern, // 0 means first image is horizontal
}) => {
  const count = articles && articles.length;

  const classSet = cx(styles.base, className);
  const mobileSet = cx(styles.mobile, className);
  const mobileMiddleSet = cx(styles.mobileMiddleRow, className);
  const topLeftClassSet = cx(styles[`top-left-${pattern}`], styles[`article`], {
    [styles.nonFirstRow]: (count < 3 && pattern === 0) || count < 2,
  });
  const topRightClassSet = cx(
    styles[`top-right-${pattern}`],
    styles[`article`],
    {
      [styles.nonFirstRow]: (count < 3 && pattern === 1) || count < 2,
    },
  );
  const bottomLeftClassSet = cx(
    styles[`bottom-left-${pattern}`],
    styles[`article`],
    {
      [styles.nonFirstRow]: count === 1 && pattern === 0,
    },
  );
  const bottomRightClassSet = cx(
    styles[`bottom-right-${pattern}`],
    styles[`article`],
    {
      [styles.nonFirstRow]: count === 1 && pattern === 1,
    },
  );
  const leftMiddleArticleClassSet = cx(styles.leftMiddleArticle);
  const middleArticleClassSet = cx(styles.middleArticle);
  const rightMiddleArticleClassSet = cx(styles.rightMiddleArticle);

  const getArticleIndex = (isOnTop, isOnLeft) => {
    const indexArray = isOnTop ? [4, 3] : [2, 1];
    if (!isOnLeft) {
      indexArray.reverse();
    }
    return pattern === 0 ? indexArray[0] : indexArray[1]; // this is to get the max number of articles when this position is visible
  };

  const getArticle = (isOnTop, isOnLeft) => {
    const articleIndex = getArticleIndex(isOnTop, isOnLeft);
    return articles[count - articleIndex];
  };

  return (
    <section>
      <Fragment>
        <div className={classSet}>
          <div className={topLeftClassSet}>
            {count >= getArticleIndex(true, true) && (
              <ContentHubArticle
                articleRef={getArticle(true, true).articleRef}
                category={getArticle(true, true).category}
                dataTestRef={getArticle(true, true).id}
                horizontalThumbnail={getArticle(true, true).horizontalThumbnail}
                id={getArticle(true, true).id}
                isHorizontal={Boolean(!pattern)}
                isInFirstGroup={isFirstGroup}
                key={getArticle(true, true).id}
                longTitle={getArticle(true, true).longTitle}
                onClick={getArticle(true, true).onClick}
                readingTime={getArticle(true, true).readingTime}
                uri={getArticle(true, true).uri}
                verticalThumbnail={getArticle(true, true).verticalThumbnail}
              />
            )}
          </div>
          <div className={topRightClassSet}>
            {count >= getArticleIndex(true, false) && (
              <ContentHubArticle
                articleRef={getArticle(true, false).articleRef}
                category={getArticle(true, false).category}
                dataTestRef={getArticle(true, false).id}
                horizontalThumbnail={
                  getArticle(true, false).horizontalThumbnail
                }
                id={getArticle(true, false).id}
                isHorizontal={Boolean(pattern)}
                isInFirstGroup={isFirstGroup}
                key={getArticle(true, false).id}
                longTitle={getArticle(true, false).longTitle}
                onClick={getArticle(true, false).onClick}
                readingTime={getArticle(true, false).readingTime}
                uri={getArticle(true, false).uri}
                verticalThumbnail={getArticle(true, false).verticalThumbnail}
              />
            )}
          </div>
          <div className={bottomLeftClassSet}>
            {count >= getArticleIndex(false, true) && (
              <ContentHubArticle
                articleRef={getArticle(false, true).articleRef}
                category={getArticle(false, true).category}
                dataTestRef={getArticle(false, true).id}
                horizontalThumbnail={
                  getArticle(false, true).horizontalThumbnail
                }
                id={getArticle(false, true).id}
                isHorizontal={Boolean(pattern)}
                isInFirstGroup={isFirstGroup}
                longTitle={getArticle(false, true).longTitle}
                onClick={getArticle(false, true).onClick}
                readingTime={getArticle(false, true).readingTime}
                uri={getArticle(false, true).uri}
                verticalThumbnail={getArticle(false, true).verticalThumbnail}
              />
            )}
          </div>
          <div className={bottomRightClassSet}>
            {count >= getArticleIndex(false, false) && (
              <ContentHubArticle
                articleRef={getArticle(false, false).articleRef}
                category={getArticle(false, false).category}
                dataTestRef={getArticle(false, false).id}
                horizontalThumbnail={
                  getArticle(false, false).horizontalThumbnail
                }
                id={getArticle(false, false).id}
                isHorizontal={Boolean(!pattern)}
                isInFirstGroup={isFirstGroup}
                longTitle={getArticle(false, false).longTitle}
                onClick={getArticle(false, false).onClick}
                readingTime={getArticle(false, false).readingTime}
                uri={getArticle(false, false).uri}
                verticalThumbnail={getArticle(false, false).verticalThumbnail}
              />
            )}
          </div>
        </div>

        {pattern === 0 && (
          <div className={mobileSet}>
            {count >= 4 && (
              <ContentHubArticle
                articleRef={articles[0].mobileArticleRef}
                category={articles[0].category}
                dataTestRef={articles[0].id}
                horizontalThumbnail={articles[0].horizontalThumbnail}
                id={articles[0].id}
                isHorizontal={true}
                isInFirstGroup={isFirstGroup}
                key={articles[0].id}
                longTitle={articles[0].longTitle}
                onClick={articles[0].onClick}
                readingTime={articles[0].readingTime}
                uri={articles[0].uri}
                verticalThumbnail={articles[0].verticalThumbnail}
              />
            )}
            <div className={mobileMiddleSet}>
              <div className={middleArticleClassSet}>
                {count >= 3 && (
                  <ContentHubArticle
                    articleRef={articles[count - 2].mobileArticleRef}
                    category={articles[count - 2].category}
                    className={leftMiddleArticleClassSet}
                    dataTestRef={articles[count - 2].id}
                    horizontalThumbnail={
                      articles[count - 2].horizontalThumbnail
                    }
                    id={articles[count - 2].id}
                    isHorizontal={false}
                    isInFirstGroup={isFirstGroup}
                    key={articles[count - 2].id}
                    longTitle={articles[count - 2].longTitle}
                    onClick={articles[count - 2].onClick}
                    readingTime={articles[count - 2].readingTime}
                    uri={articles[count - 2].uri}
                    verticalThumbnail={articles[count - 2].verticalThumbnail}
                  />
                )}
              </div>
              <div className={middleArticleClassSet}>
                {count >= 2 && (
                  <ContentHubArticle
                    articleRef={
                      (count > 2 ? articles[count - 3] : articles[0])
                        .mobileArticleRef
                    }
                    category={
                      (count > 2 ? articles[count - 3] : articles[0]).category
                    }
                    className={rightMiddleArticleClassSet}
                    dataTestRef={
                      (count > 2 ? articles[count - 3] : articles[0]).id
                    }
                    horizontalThumbnail={
                      (count > 2 ? articles[count - 3] : articles[0])
                        .horizontalThumbnail
                    }
                    id={(count > 2 ? articles[count - 3] : articles[0]).id}
                    isHorizontal={false}
                    isInFirstGroup={isFirstGroup}
                    key={(count > 2 ? articles[count - 3] : articles[0]).id}
                    longTitle={
                      (count > 2 ? articles[count - 3] : articles[0]).longTitle
                    }
                    onClick={
                      (count > 2 ? articles[count - 3] : articles[0]).onClick
                    }
                    readingTime={
                      (count > 2 ? articles[count - 3] : articles[0])
                        .readingTime
                    }
                    uri={(count > 2 ? articles[count - 3] : articles[0]).uri}
                    verticalThumbnail={
                      (count > 2 ? articles[count - 3] : articles[0])
                        .verticalThumbnail
                    }
                  />
                )}
              </div>
            </div>
            {count >= 1 && (
              <ContentHubArticle
                articleRef={articles[count - 1].mobileArticleRef}
                category={articles[count - 1].category}
                dataTestRef={articles[count - 1].id}
                horizontalThumbnail={articles[count - 1].horizontalThumbnail}
                id={articles[count - 1].id}
                isHorizontal={true}
                isInFirstGroup={isFirstGroup}
                key={articles[count - 1].id}
                longTitle={articles[count - 1].longTitle}
                onClick={articles[count - 1].onClick}
                readingTime={articles[count - 1].readingTime}
                uri={articles[count - 1].uri}
                verticalThumbnail={articles[count - 1].verticalThumbnail}
              />
            )}
          </div>
        )}
        {pattern === 1 && (
          <div className={mobileSet}>
            <div className={mobileMiddleSet}>
              <div className={middleArticleClassSet}>
                {count >= 4 && (
                  <ContentHubArticle
                    articleRef={articles[0].mobileArticleRef}
                    category={articles[0].category}
                    className={leftMiddleArticleClassSet}
                    dataTestRef={articles[0].id}
                    horizontalThumbnail={articles[0].horizontalThumbnail}
                    id={articles[0].id}
                    isHorizontal={false}
                    isInFirstGroup={isFirstGroup}
                    key={articles[0].id}
                    longTitle={articles[0].longTitle}
                    onClick={articles[0].onClick}
                    readingTime={articles[0].readingTime}
                    uri={articles[0].uri}
                    verticalThumbnail={articles[0].verticalThumbnail}
                  />
                )}
              </div>
              <div className={middleArticleClassSet} />
            </div>
            {count >= 3 && (
              <ContentHubArticle
                articleRef={
                  (articles[count - 3] || articles[0]).mobileArticleRef
                }
                category={(articles[count - 3] || articles[0]).category}
                dataTestRef={(articles[count - 3] || articles[0]).id}
                horizontalThumbnail={
                  (articles[count - 3] || articles[0]).horizontalThumbnail
                }
                id={(articles[count - 3] || articles[0]).id}
                isHorizontal={true}
                isInFirstGroup={isFirstGroup}
                key={(articles[count - 3] || articles[0]).id}
                longTitle={(articles[count - 3] || articles[0]).longTitle}
                onClick={(articles[count - 3] || articles[0]).onClick}
                readingTime={(articles[count - 3] || articles[0]).readingTime}
                uri={(articles[count - 3] || articles[0]).uri}
                verticalThumbnail={
                  (articles[count - 3] || articles[0]).verticalThumbnail
                }
              />
            )}
            {count >= 2 && (
              <ContentHubArticle
                articleRef={articles[count - 2].mobileArticleRef}
                category={articles[count - 2].category}
                dataTestRef={articles[count - 2].id}
                horizontalThumbnail={articles[count - 2].horizontalThumbnail}
                id={articles[count - 2].id}
                isHorizontal={true}
                isInFirstGroup={isFirstGroup}
                key={articles[count - 2].id}
                longTitle={articles[count - 2].longTitle}
                onClick={articles[count - 2].onClick}
                readingTime={articles[count - 2].readingTime}
                uri={articles[count - 2].uri}
                verticalThumbnail={articles[count - 2].verticalThumbnail}
              />
            )}
            <div className={mobileMiddleSet}>
              <div className={middleArticleClassSet} />
              <div className={middleArticleClassSet}>
                {count >= 1 && (
                  <ContentHubArticle
                    articleRef={articles[count - 1].mobileArticleRef}
                    category={articles[count - 1].category}
                    className={rightMiddleArticleClassSet}
                    dataTestRef={articles[count - 1].id}
                    horizontalThumbnail={
                      articles[count - 1].horizontalThumbnail
                    }
                    id={articles[count - 1].id}
                    isHorizontal={false}
                    isInFirstGroup={isFirstGroup}
                    key={articles[count - 1].id}
                    longTitle={articles[count - 1].longTitle}
                    onClick={articles[count - 1].onClick}
                    readingTime={articles[count - 1].readingTime}
                    uri={articles[count - 1].uri}
                    verticalThumbnail={articles[count - 1].verticalThumbnail}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </Fragment>
    </section>
  );
};

ContentHubArticleList.propTypes = {
  articles: PropTypes.array,
  className: PropTypes.string,
  isFirstGroup: PropTypes.bool,
  pattern: PropTypes.oneOf([0, 1]),
};

ContentHubArticleList.defaultProps = {
  articles: undefined,
  className: undefined,
  isFirstGroup: false,
  pattern: 0,
};

export { ContentHubArticleList };
