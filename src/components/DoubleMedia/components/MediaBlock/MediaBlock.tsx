import React from 'react';
import cx from 'classnames';
import { ConditionalWrapper } from '~/components/ConditionalWrapper';
import { Figure } from '~/components/Figure';
import { Hyperlink } from '~/components/Hyperlink';
import { Image } from '~/components/Image';
import { Video } from '~/components/Video';
import type { MediaBlockType } from './MediaBlock.types';
import styles from './MediaBlock.module.css';

const MediaBlock: MediaBlockType = ({
  altText,
  caption,
  fallbackImage,
  heading,
  link,
  poster,
  sizes,
  theme = 'dark',
  type = 'image',
}) => {
  const Media = () => {
    const isScrollBasedVideo = type === 'scrollbasedvideo' ? true : false;

    return type.includes('video') ? (
      <Video
        fallbackImage={fallbackImage}
        hasAllowAudio={false}
        hasAutoplay={true}
        hasControls={false}
        hasLoop={true}
        hasPlayInFullScreen={false}
        isFullWidth={true}
        isInMediaBlock={true}
        isScrollBasedVideo={isScrollBasedVideo}
        poster={poster}
        sizes={sizes}
      />
    ) : (
      <Image altText={altText} sizes={sizes} />
    );
  };

  const headingClassSet = cx(styles.heading, { [styles.headingLink]: link });

  return (
    <Figure
      className={cx(styles.figure, styles[theme])}
      hasCaptionBorder={false}
      theme={theme}
    >
      <ConditionalWrapper
        condition={!!link}
        wrapper={(children) => (
          <Hyperlink {...link} className={styles.imageLinkWrapper}>
            {children}
          </Hyperlink>
        )}
      >
        <Media />
      </ConditionalWrapper>

      {(heading || caption) && (
        <figcaption className={styles.figcaption}>
          {heading && (
            <h3 className={headingClassSet}>
              {link ? (
                <Hyperlink
                  {...link}
                  className={styles.headingWrapper}
                  theme={theme}
                >
                  <span>{heading}</span>
                </Hyperlink>
              ) : (
                <span className={styles.headingWrapper}>{heading}</span>
              )}
            </h3>
          )}
          {caption && <div className={styles.caption}>{caption}</div>}
        </figcaption>
      )}
    </Figure>
  );
};

export { MediaBlock };
