import React from 'react';
import cx from 'classnames';
import { ContentHubArticle } from '~/components/ContentHubArticle';
import type { ContentHubArticleListType } from './ContentHubArticleList.types';
import styles from './ContentHubArticleList.module.css';

const ContentHubArticleList: ContentHubArticleListType = ({
  articles,
  className,
  isFirstGroup = false,
  pattern = 0,
}) => {
  const count = articles && articles.length;
  const classSet = cx(styles.base, className);
  const mobileSet = cx(styles.mobile, className);

  const mobileMiddleSet = cx(
    styles.mobileMiddleRow,
    { [styles.reverseColumn]: pattern === 0 },
    className,
  );

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

  let articleNo = -1; // article index for mobile

  const increaseArticleNo = () => {
    articleNo++;
    return true;
  };

  const getArticleIndex = (isOnTop: boolean, isOnLeft: boolean) => {
    const indexArray = isOnTop ? [4, 3] : [2, 1];

    if (!isOnLeft) {
      indexArray.reverse();
    }

    return pattern === 0 ? indexArray[0] : indexArray[1]; // this is to get the max number of articles when this position is visible
  };

  const getArticle = (isOnTop: boolean, isOnLeft: boolean) => {
    const articleIndex = getArticleIndex(isOnTop, isOnLeft);

    return articles[count - articleIndex];
  };

  return (
    <section>
      <>
        <div className={classSet}>
          <div
            className={topLeftClassSet}
            data-testid="data-testid-ContentHubArticle-top"
          >
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
          <div
            className={topRightClassSet}
            data-testid="data-testid-ContentHubArticle-top"
          >
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
          <div
            className={bottomLeftClassSet}
            data-testid="data-testid-ContentHubArticle-bottom"
          >
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
          <div
            className={bottomRightClassSet}
            data-testid="data-testid-ContentHubArticle-bottom"
          >
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
            {count >= 4 && increaseArticleNo() && (
              <ContentHubArticle
                articleRef={articles[articleNo].mobileArticleRef}
                category={articles[articleNo].category}
                dataTestRef={articles[articleNo].id}
                horizontalThumbnail={articles[articleNo].horizontalThumbnail}
                id={articles[articleNo].id}
                isHorizontal={true}
                isInFirstGroup={isFirstGroup}
                key={articles[articleNo].id}
                longTitle={articles[articleNo].longTitle}
                onClick={articles[articleNo].onClick}
                readingTime={articles[articleNo].readingTime}
                uri={articles[articleNo].uri}
                verticalThumbnail={articles[articleNo].verticalThumbnail}
              />
            )}
            <div className={mobileMiddleSet}>
              <div className={middleArticleClassSet}>
                {count >= 2 && increaseArticleNo() && (
                  <ContentHubArticle
                    articleRef={articles[articleNo].mobileArticleRef}
                    category={articles[articleNo].category}
                    className={rightMiddleArticleClassSet}
                    dataTestRef={articles[articleNo].id}
                    horizontalThumbnail={
                      articles[articleNo].horizontalThumbnail
                    }
                    id={articles[articleNo].id}
                    isHorizontal={false}
                    isInFirstGroup={isFirstGroup}
                    key={articles[articleNo].id}
                    longTitle={articles[articleNo].longTitle}
                    onClick={articles[articleNo].onClick}
                    readingTime={articles[articleNo].readingTime}
                    uri={articles[articleNo].uri}
                    verticalThumbnail={articles[articleNo].verticalThumbnail}
                  />
                )}
              </div>
              <div className={middleArticleClassSet}>
                {count >= 3 && increaseArticleNo() && (
                  <ContentHubArticle
                    articleRef={articles[articleNo].mobileArticleRef}
                    category={articles[articleNo].category}
                    className={leftMiddleArticleClassSet}
                    dataTestRef={articles[articleNo].id}
                    horizontalThumbnail={
                      articles[articleNo].horizontalThumbnail
                    }
                    id={articles[articleNo].id}
                    isHorizontal={false}
                    isInFirstGroup={isFirstGroup}
                    key={articles[articleNo].id}
                    longTitle={articles[articleNo].longTitle}
                    onClick={articles[articleNo].onClick}
                    readingTime={articles[articleNo].readingTime}
                    uri={articles[articleNo].uri}
                    verticalThumbnail={articles[articleNo].verticalThumbnail}
                  />
                )}
              </div>
            </div>
            {count >= 1 && increaseArticleNo() && (
              <ContentHubArticle
                articleRef={articles[articleNo].mobileArticleRef}
                category={articles[articleNo].category}
                dataTestRef={articles[articleNo].id}
                horizontalThumbnail={articles[articleNo].horizontalThumbnail}
                id={articles[articleNo].id}
                isHorizontal={true}
                isInFirstGroup={isFirstGroup}
                key={articles[articleNo].id}
                longTitle={articles[articleNo].longTitle}
                onClick={articles[articleNo].onClick}
                readingTime={articles[articleNo].readingTime}
                uri={articles[articleNo].uri}
                verticalThumbnail={articles[articleNo].verticalThumbnail}
              />
            )}
          </div>
        )}
        {pattern === 1 && (
          <div className={mobileSet}>
            <div className={mobileMiddleSet}>
              <div className={middleArticleClassSet}>
                {count >= 4 && increaseArticleNo() && (
                  <ContentHubArticle
                    articleRef={articles[articleNo].mobileArticleRef}
                    category={articles[articleNo].category}
                    className={leftMiddleArticleClassSet}
                    dataTestRef={articles[articleNo].id}
                    horizontalThumbnail={
                      articles[articleNo].horizontalThumbnail
                    }
                    id={articles[articleNo].id}
                    isHorizontal={false}
                    isInFirstGroup={isFirstGroup}
                    key={articles[articleNo].id}
                    longTitle={articles[articleNo].longTitle}
                    onClick={articles[articleNo].onClick}
                    readingTime={articles[articleNo].readingTime}
                    uri={articles[articleNo].uri}
                    verticalThumbnail={articles[articleNo].verticalThumbnail}
                  />
                )}
              </div>
              <div className={middleArticleClassSet} />
            </div>
            {count >= 3 && increaseArticleNo() && (
              <ContentHubArticle
                articleRef={articles[articleNo].mobileArticleRef}
                category={articles[articleNo].category}
                dataTestRef={articles[articleNo].id}
                horizontalThumbnail={articles[articleNo].horizontalThumbnail}
                id={articles[articleNo].id}
                isHorizontal={true}
                isInFirstGroup={isFirstGroup}
                key={articles[articleNo].id}
                longTitle={articles[articleNo].longTitle}
                onClick={articles[articleNo].onClick}
                readingTime={articles[articleNo].readingTime}
                uri={articles[articleNo].uri}
                verticalThumbnail={articles[articleNo].verticalThumbnail}
              />
            )}
            {count >= 2 && increaseArticleNo() && (
              <ContentHubArticle
                articleRef={articles[articleNo].mobileArticleRef}
                category={articles[articleNo].category}
                dataTestRef={articles[articleNo].id}
                horizontalThumbnail={articles[articleNo].horizontalThumbnail}
                id={articles[articleNo].id}
                isHorizontal={true}
                isInFirstGroup={isFirstGroup}
                key={articles[articleNo].id}
                longTitle={articles[articleNo].longTitle}
                onClick={articles[articleNo].onClick}
                readingTime={articles[articleNo].readingTime}
                uri={articles[articleNo].uri}
                verticalThumbnail={articles[articleNo].verticalThumbnail}
              />
            )}
            <div className={mobileMiddleSet}>
              <div className={middleArticleClassSet} />
              <div className={middleArticleClassSet}>
                {count >= 1 && increaseArticleNo() && (
                  <ContentHubArticle
                    articleRef={articles[articleNo].mobileArticleRef}
                    category={articles[articleNo].category}
                    className={rightMiddleArticleClassSet}
                    dataTestRef={articles[articleNo].id}
                    horizontalThumbnail={
                      articles[articleNo].horizontalThumbnail
                    }
                    id={articles[articleNo].id}
                    isHorizontal={false}
                    isInFirstGroup={isFirstGroup}
                    key={articles[articleNo].id}
                    longTitle={articles[articleNo].longTitle}
                    onClick={articles[articleNo].onClick}
                    readingTime={articles[articleNo].readingTime}
                    uri={articles[articleNo].uri}
                    verticalThumbnail={articles[articleNo].verticalThumbnail}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </>
    </section>
  );
};

export { ContentHubArticleList };
