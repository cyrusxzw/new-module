import React from 'react';
import cx from 'classnames';
import { Figure } from '~/components/Figure';
import { Hyperlink } from '~/components/Hyperlink';
import { Image } from '~/components/Image';
import { Video } from '~/components/Video';
import type { MediaBlockProps } from './MediaBlock.types';
import styles from './MediaBlock.module.css';

const MediaBlock = ({
  altText,
  caption,
  fallbackImage,
  heading,
  link,
  poster,
  sizes,
  theme = 'dark',
  type = 'image',
}: MediaBlockProps) => {
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
        isScrollBasedVideo={isScrollBasedVideo}
        poster={poster}
        sizes={sizes}
      />
    ) : (
      <Image altText={altText} sizes={sizes} />
    );
  };

  const captionClassSet = cx(styles.caption);
  const headingClassSet = cx(styles.heading, link && styles.headingLink);
  const headingWrapperClassSet = cx(styles.headingWrapper);

  return (
    <Figure
      className={cx(styles.figure, styles[theme])}
      hasCaptionBorder={false}
      theme={theme}
    >
      {link ? (
        <Hyperlink {...link} className={styles.imageLinkWrapper}>
          <Media />
        </Hyperlink>
      ) : (
        <Media />
      )}

      {(heading || caption) && (
        <figcaption className={styles.figcaption}>
          {heading && (
            <h3 className={headingClassSet}>
              {link ? (
                <Hyperlink
                  {...link}
                  className={headingWrapperClassSet}
                  theme={theme}
                >
                  <span>{heading}</span>
                </Hyperlink>
              ) : (
                <span className={headingWrapperClassSet}>{heading}</span>
              )}
            </h3>
          )}
          {caption && <div className={captionClassSet}>{caption}</div>}
        </figcaption>
      )}
    </Figure>
  );
};

export { MediaBlock };
