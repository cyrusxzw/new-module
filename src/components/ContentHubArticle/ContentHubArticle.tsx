import React, { useRef } from 'react';
import cx from 'classnames';
import { useOnScreen } from '~/customHooks';
import { Image } from '~/components/Image';
import { Hyperlink } from '~/components/Hyperlink';
import { Transition } from '~/components/Transition';
import type { ContentHubArticleType } from './ContentHubArticle.types';
import styles from './ContentHubArticle.module.css';

const ContentHubArticle: ContentHubArticleType = ({
  articleRef,
  category,
  className,
  dataTestRef,
  horizontalThumbnail,
  id,
  isHorizontal = false, // use horizontal or vertical thumbnail
  isInFirstGroup = false,
  isMenuItem = false, // if it's displayed in Read Menu Navigation
  isReadMore = false, // if it's displayed in ReadMore section
  longTitle,
  onClick,
  readingTime,
  uri,
  verticalThumbnail,
}) => {
  const defaultRef = useRef(null);
  const ref = articleRef || defaultRef;
  const isOnScreen = useOnScreen(ref, 0.5);
  const currentImage = isHorizontal ? horizontalThumbnail : verticalThumbnail;
  const classSet = cx(styles.base, className, {
    [styles.readMoreArticle]: !!isReadMore,
  });
  const categoryClassSet = cx(styles.category, {
    [styles.readMoreCategory]: !!isReadMore,
  });
  const imageClassSet = cx(styles.image);
  const readMoreThumbnailRef = useRef(null);
  const nonMobileImageClassSet = cx(styles.image, styles.nonMobile);
  const nonMobileThumbnailRef = useRef(null);
  const noteClassSet = cx(styles.note, { [styles.readMoreNote]: !!isReadMore });
  const mobileImageClassSet = cx(styles.image, styles.mobile);
  const mobileThumbnailRef = useRef(null);
  const titleClassSet = cx(styles.title, {
    [styles.readMoreTitle]: !!isReadMore,
  });
  const titleRef = useRef(null);

  const imageMouseEnter = () => {
    const titleSpan = titleRef?.current
      .getElementsByClassName(titleClassSet)[0]
      .getElementsByTagName('span')[0];
    titleSpan.className = cx(styles.title, styles.titleActive);
  };

  const imageMouseLeave = () => {
    const titleSpan = titleRef?.current
      ?.getElementsByClassName(titleClassSet)[0]
      ?.getElementsByTagName('span')[0];
    titleSpan.className = '';
  };

  const titleMouseEnter = () => {
    [readMoreThumbnailRef, nonMobileThumbnailRef, mobileThumbnailRef].forEach(
      (imageRef) => {
        if (imageRef?.current)
          imageRef.current.className = cx(styles.imageActive);
      },
    );
  };

  const titleMouseLeave = () => {
    [readMoreThumbnailRef, nonMobileThumbnailRef, mobileThumbnailRef].forEach(
      (imageRef) => {
        if (imageRef?.current)
          imageRef.current.className = cx(styles.imageUnactive);
      },
    );
  };

  return (
    <Transition isActive={isInFirstGroup || isOnScreen} type="fade">
      <div className={classSet} id={id} ref={ref}>
        {isReadMore && !isMenuItem && (
          <Hyperlink
            className={imageClassSet}
            dataTestRef={`${dataTestRef}_READMORE_THUMBNAIL`}
            onClick={onClick}
            title={longTitle}
            url={uri}
          >
            <div
              onMouseEnter={() => imageMouseEnter()}
              onMouseLeave={() => imageMouseLeave()}
            >
              <Image
                altText={currentImage?.altText}
                ref={readMoreThumbnailRef}
                sizes={currentImage?.sizes}
              />
            </div>
          </Hyperlink>
        )}
        {!isMenuItem && <div className={categoryClassSet}>{category}</div>}
        <div
          onMouseEnter={() => titleMouseEnter()}
          onMouseLeave={() => titleMouseLeave()}
          ref={titleRef}
        >
          <Hyperlink
            className={titleClassSet}
            dataTestRef={`${dataTestRef}_TITLE`}
            onClick={onClick}
            title={longTitle}
            url={uri}
          >
            <span>{longTitle}</span>
          </Hyperlink>
        </div>
        {readingTime && (
          <div className={noteClassSet}>
            <span>{readingTime}</span>
          </div>
        )}

        {!isReadMore && !isMenuItem && (
          <Hyperlink
            className={nonMobileImageClassSet}
            dataTestRef={`${dataTestRef}_NON_MOBILE_THUMBNAIL`}
            onClick={onClick}
            title={longTitle}
            url={uri}
          >
            <div
              onMouseEnter={() => imageMouseEnter()}
              onMouseLeave={() => imageMouseLeave()}
            >
              <Image
                altText={currentImage?.altText}
                className={styles.image}
                ref={nonMobileThumbnailRef}
                sizes={currentImage?.sizes}
              />
            </div>
          </Hyperlink>
        )}
        {!isReadMore && !isMenuItem && (
          <Hyperlink
            className={mobileImageClassSet}
            dataTestRef={`${dataTestRef}_MOBILE_THUMBNAIL`}
            onClick={onClick}
            title={longTitle}
            url={uri}
          >
            <div
              onMouseEnter={() => imageMouseEnter()}
              onMouseLeave={() => imageMouseLeave()}
            >
              <Image
                altText={currentImage?.altText}
                className={styles.image}
                ref={mobileThumbnailRef}
                sizes={currentImage?.sizes}
              />
            </div>
          </Hyperlink>
        )}
      </div>
    </Transition>
  );
};

export { ContentHubArticle };
