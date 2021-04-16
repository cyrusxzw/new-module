import React, { forwardRef, FC } from 'react';
import cx from 'classnames';
import { Hyperlink } from '~/components/Hyperlink';
import { getImageSourcesBySize } from './Image.utils';
import type { ImageProps } from './Image.types';
import styles from './Image.module.css';

const Image: FC<ImageProps> = forwardRef(function ImageRef(
  {
    altText,
    className,
    cta,
    isLazyLoaded = true,
    sizes,
    style,
    type,
    theme = 'dark',
  },
  ref: React.LegacyRef<HTMLImageElement>,
) {
  const fullBleedImage = type === 'componentFullBleedImage';
  const isRightAligned = type === 'componentSquareImage';

  const classSet = cx(
    { [styles.base]: !cta },
    styles.picture,
    { [styles.fullBleedImage]: fullBleedImage },
    { [styles.isRightAligned]: isRightAligned },
    styles[theme],
    className,
  );

  const picture = (
    <picture className={classSet} style={style}>
      {getImageSourcesBySize(sizes)}

      <img alt={altText} loading={isLazyLoaded ? 'lazy' : 'eager'} ref={ref} />
    </picture>
  );

  return cta ? (
    <Hyperlink
      className={styles.base}
      hasTargetInNewWindow={cta.openInANewWindow}
      theme={theme}
      url={cta.url}
    >
      {picture}
    </Hyperlink>
  ) : (
    picture
  );
});

export { Image };
