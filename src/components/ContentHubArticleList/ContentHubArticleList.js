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
      [styles.nonFirstRow]: count === 1 && pattern === 1,
    },
  );
  const bottomRightClassSet = cx(
    styles[`bottom-right-${pattern}`],
    styles[`article`],
  );
  const leftMiddleArticleClassSet = cx(styles.leftMiddleArticle);
  const middleArticleClassSet = cx(styles.middleArticle);
  const rightMiddleArticleClassSet = cx(styles.rightMiddleArticle);
  let articleNo = -1;
  const increaseArticleNo = () => {
    articleNo++;
    return true;
  };

  return (
    <section>
      <Fragment>
        <div className={classSet}>
          <div className={topLeftClassSet}>
            {count >= 4 && increaseArticleNo() && (
              <ContentHubArticle
                articleRef={articles[articleNo].articleRef}
                category={articles[articleNo].category}
                dataTestRef={articles[articleNo].id}
                horizontalThumbnail={articles[articleNo].horizontalThumbnail}
                id={articles[articleNo].id}
                isHorizontal={Boolean(!pattern)}
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
          <div className={topRightClassSet}>
            {count >= 3 && increaseArticleNo() && (
              <ContentHubArticle
                articleRef={articles[articleNo].articleRef}
                category={articles[articleNo].category}
                dataTestRef={articles[articleNo].id}
                horizontalThumbnail={articles[articleNo].horizontalThumbnail}
                id={articles[articleNo].id}
                isHorizontal={Boolean(pattern)}
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
          <div className={bottomLeftClassSet}>
            {count >= 1 && (
              <>
                {count <= 2 && increaseArticleNo()}
                {/* when count is less than 3, the bottom left one will be the first one */}
                <ContentHubArticle
                  articleRef={
                    articles[count === 2 ? articleNo : count - 1].articleRef
                  }
                  category={
                    articles[count === 2 ? articleNo : count - 1].category
                  }
                  dataTestRef={articles[count === 2 ? articleNo : count - 1].id}
                  horizontalThumbnail={
                    articles[count === 2 ? articleNo : count - 1]
                      .horizontalThumbnail
                  }
                  id={articles[count === 2 ? articleNo : count - 1].id}
                  isHorizontal={Boolean(pattern)}
                  isInFirstGroup={isFirstGroup}
                  longTitle={
                    articles[count === 2 ? articleNo : count - 1].longTitle
                  }
                  onClick={
                    articles[count === 2 ? articleNo : count - 1].onClick
                  }
                  readingTime={
                    articles[count === 2 ? articleNo : count - 1].readingTime
                  }
                  uri={articles[count === 2 ? articleNo : count - 1].uri}
                  verticalThumbnail={
                    articles[count === 2 ? articleNo : count - 1]
                      .verticalThumbnail
                  }
                />
              </>
            )}
          </div>
          <div className={bottomRightClassSet}>
            {count >= 2 && increaseArticleNo() && (
              <ContentHubArticle
                articleRef={articles[articleNo].articleRef}
                category={articles[articleNo].category}
                dataTestRef={articles[articleNo].id}
                horizontalThumbnail={articles[articleNo].horizontalThumbnail}
                id={articles[articleNo].id}
                isHorizontal={Boolean(!pattern)}
                isInFirstGroup={isFirstGroup}
                longTitle={articles[articleNo].longTitle}
                onClick={articles[articleNo].onClick}
                readingTime={articles[articleNo].readingTime}
                uri={articles[articleNo].uri}
                verticalThumbnail={articles[articleNo].verticalThumbnail}
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
              {/** The left middle one will be removed when count < 3 */}
              <div className={middleArticleClassSet}>
                {count >= 3 && (
                  <ContentHubArticle
                    articleRef={articles[count - 1].mobileArticleRef}
                    category={articles[count - 1].category}
                    className={leftMiddleArticleClassSet}
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
              <div className={middleArticleClassSet}>
                {/** The right middle one will be the first one when 1 < count < 4 */}
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
            {/** The bottom one will be the first one when count === 1 */}
            {count >= 1 && (
              <ContentHubArticle
                articleRef={
                  (count > 2 ? articles[count - 2] : articles[count - 1])
                    .mobileArticleRef
                }
                category={
                  (count > 2 ? articles[count - 2] : articles[count - 1])
                    .category
                }
                dataTestRef={
                  (count > 2 ? articles[count - 2] : articles[count - 1]).id
                }
                horizontalThumbnail={
                  (count > 2 ? articles[count - 2] : articles[count - 1])
                    .horizontalThumbnail
                }
                id={(count > 2 ? articles[count - 2] : articles[count - 1]).id}
                isHorizontal={true}
                isInFirstGroup={isFirstGroup}
                key={(count > 2 ? articles[count - 2] : articles[count - 1]).id}
                longTitle={
                  (count > 2 ? articles[count - 2] : articles[count - 1])
                    .longTitle
                }
                onClick={
                  (count > 2 ? articles[count - 2] : articles[count - 1])
                    .onClick
                }
                readingTime={
                  (count > 2 ? articles[count - 2] : articles[count - 1])
                    .readingTime
                }
                uri={
                  (count > 2 ? articles[count - 2] : articles[count - 1]).uri
                }
                verticalThumbnail={
                  (count > 2 ? articles[count - 2] : articles[count - 1])
                    .verticalThumbnail
                }
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
